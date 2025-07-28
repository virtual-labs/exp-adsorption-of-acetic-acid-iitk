const experimentStates = {
    0: "Initial", 1: "Butanol poured", 2: "Ready for Acetic Acid", 3: "Acetic poured",
    4: "Water poured", 5: "Ready for cylinder pour 3", 6: "Ready for shake",
    7: "Shaking", 8: "Ready to separate", 9: "Separation done", 10: "Add Indicator", 11: "Complete"
};

// Voice over support
let speechSynthesis = window.speechSynthesis;
let currentUtterance = null;
let voiceEnabled = true;

const elements = {
    f: 0,
    mcylender: document.querySelector("#gcylinder"),
    sol: document.querySelector("#solution"),
    drp1: document.querySelector("#drop1"),
    btnl: document.querySelector("#beaker1_butanol"),
    drp: document.querySelector("#drop"),
    acid: document.querySelector("#acetic"),
    wtr: document.querySelector("#water"),
    fsol: document.querySelector("#fsolution"),
    fsol1: document.querySelector("#fsolution1"),
    fsol2: document.querySelector("#fsolution2"),
    flask1: document.querySelector("#flask"),
    machineLP: document.querySelector("#machinelp"),
    machineUP: document.querySelector("#machineup"),
    machineUP1: document.querySelector("#machineup1"),
    machineUP2: document.querySelector("#machineup2"),
    powerbtn: document.querySelector("#powerbtn"),
    steps: document.querySelector("#step"),
    mxdsol: document.querySelector("#mixedsol"),
    cnflask1: document.querySelector("#conicalflaskE1"),
    cnflask2: document.querySelector("#conicalflaskE2"),
    pippetf: document.querySelector("#pippet"),
    orglayer: document.querySelector("#organiclayer"),
    aqlayer: document.querySelector("#aquaslayer"),
    burette: document.querySelector("#burette"),
    titrationFlask: document.querySelector("#titrationFlask"),
    indicator: document.querySelector("#indicator"),
    indicatorDrop: document.querySelector("#indicatorDrop"),
    baseSolution: document.querySelector("#baseSolution"),
    calculation: document.querySelector("#calculation"),
    progressContainer: document.querySelector("#progress-container"),
    progressBar: document.querySelector("#progress-bar"),
    progressText: document.querySelector("#progress-text"),
    washBtn: document.querySelector("#wash-btn"),
    washWater: document.querySelector("#wash-water"),
    washStream: document.querySelector("#wash-stream")
};

// Voice over function
function speakInstruction(text) {
    if (!voiceEnabled || !speechSynthesis) return;
    
    try {
        // Stop any current speech
        if (currentUtterance) {
            speechSynthesis.cancel();
        }
        
        // Create new utterance
        currentUtterance = new SpeechSynthesisUtterance(text);
        currentUtterance.rate = 0.7;
        currentUtterance.pitch = 1;
        currentUtterance.volume = 0.8;
        
        // Try to use a female voice if available
        const voices = speechSynthesis.getVoices();
        if (voices.length > 0) {
            const femaleVoice = voices.find(voice => voice.name.includes('Female') || voice.name.includes('female'));
            if (femaleVoice) {
                currentUtterance.voice = femaleVoice;
            }
        }
        
        speechSynthesis.speak(currentUtterance);
    } catch (error) {
        console.log('Speech synthesis not available:', error);
        voiceEnabled = false;
        const voiceToggle = document.getElementById('voice-toggle');
        if (voiceToggle) {
            voiceToggle.textContent = '🔇 VOICE OFF';
            voiceToggle.style.background = 'linear-gradient(135deg, hsl(0, 80%, 77%) 0%, hsl(0, 70%, 65%) 100%)';
        }
    }
}

// Voice toggle function
function toggleVoice() {
    if (!speechSynthesis) {
        alert('Speech synthesis is not available in your browser. Please use a modern browser with speech support.');
        return;
    }
    
    voiceEnabled = !voiceEnabled;
    const voiceToggle = document.getElementById('voice-toggle');
    
    if (voiceEnabled) {
        voiceToggle.textContent = '🔊 VOICE ON';
        voiceToggle.style.background = 'linear-gradient(135deg, hsl(120, 80%, 77%) 0%, hsl(120, 70%, 65%) 100%)';
        speakInstruction('Voice over enabled');
    } else {
        voiceToggle.textContent = '🔇 VOICE OFF';
        voiceToggle.style.background = 'linear-gradient(135deg, hsl(0, 80%, 77%) 0%, hsl(0, 70%, 65%) 100%)';
        // Stop any current speech
        if (currentUtterance) {
            speechSynthesis.cancel();
        }
    }
}

// Enhanced update step function with voice over
function updateStep(instruction, nextStep) {
    elements.steps.innerHTML = instruction;
    speakInstruction(instruction);
    // Only show next step if explicitly provided and after a longer delay
    if (nextStep) {
        setTimeout(() => {
            elements.steps.innerHTML = nextStep;
            speakInstruction(nextStep);
        }, 3500); // Shorter delay for concise instructions
    }
}

// Init
window.onload = initExperiment;

function initExperiment() {
    resetElements();
    updateStep("Rinse cylinder.");
    elements.f = 0;
}

function resetElements() {
    const hiddenElements = '#solution, #drop, #drop1, #wash-water, #wash-stream, #fsolution, #fsolution1, #fsolution2, #machinelp, #machineup, #machineup1, #machineup2, #powerbtn, #mixedsol, #conicalflaskE1, #conicalflaskE2, #pippet, #organiclayer, #aquaslayer, #burette, #titrationFlask, #indicator, #baseSolution, #calculation';
    const visibleElements = '#beaker1_butanol, #gcylinder, #acetic, #water, #flask';
    
    document.querySelectorAll(hiddenElements).forEach(el => el.style.visibility = 'hidden');
    document.querySelectorAll(visibleElements).forEach(el => el.style.visibility = 'visible');

    [elements.btnl, elements.acid, elements.wtr, elements.mcylender, elements.sol, elements.flask1]
        .forEach(el => el.style.transform = 'translate(0, 0) rotate(0)');

    elements.progressContainer.style.display = 'none';
    elements.progressBar.style.width = '0%';
    
    if (elements.washWater) {
        elements.washWater.classList.remove('wash-animation');
        elements.washStream.classList.remove('stream-animation');
        elements.mcylender.classList.remove('cylinder-wash-effect');
    }
}

function butanol1() {
    if (elements.f === 0) {
        updateStep("Adding butanol...");
        elements.btnl.style.transform = "translate(-40%, -100%) rotate(-60deg)";
        setTimeout(() => {
            elements.btnl.style.transform = "translate(0, 0) rotate(0)";
            elements.drp.style.visibility = "visible";
            elements.sol.style.visibility = "visible";
            setTimeout(() => {
                elements.drp.style.visibility = "hidden";
                elements.f = 1;
                updateStep("Butanol added! Pour into flask.");
            }, 300);
        }, 1000);
    }
}

function pourcylinder() {
    const targets = {
        1: { text: "Butanol poured! Rinse cylinder.", flask: elements.fsol },
        3: { text: "Acetic acid poured! Rinse cylinder.", flask: elements.fsol1 },
        5: { text: "Water poured! Click Next. Proceed to shaking.", flask: elements.fsol2 }
    };
    if (targets[elements.f]) {
        const { text, flask } = targets[elements.f];
        updateStep(text);
        elements.mcylender.style.transform = "translate(-330%, -170%) rotate(-80deg)";
        elements.sol.style.transform = "translate(-440%, -1000%) rotate(-80deg)";
        setTimeout(() => {
            elements.drp1.style.visibility = "visible";
            elements.drp1.style.transform = "translate(0, 180%)";
            elements.sol.style.visibility = "hidden";
            setTimeout(() => {
                flask.style.visibility = "visible";
                elements.drp1.style.visibility = "hidden";
                elements.mcylender.style.transform = "translate(0, 0) rotate(0)";
                elements.sol.style.transform = "translate(0, 0) rotate(0)";
                elements.f++;
            }, 2000);
        }, 1500);
    }
}

function acedic() {
    if (elements.f === 2) {
        updateStep("Adding acetic acid...");
        elements.acid.style.transform = "translate(-150%, -90%) rotate(-50deg)";
        setTimeout(() => {
            elements.acid.style.transform = "translate(0, 0) rotate(0)";
            elements.drp.style.visibility = "visible";
            elements.sol.style.visibility = "visible";
            setTimeout(() => {
                elements.drp.style.visibility = "hidden";
                elements.f = 3;
                updateStep("Acetic acid added! Pour into flask.");
            }, 300);
        }, 1500);
    }
}

function diswater() {
    if (elements.f === 4) {
        updateStep("Adding distilled water...");
        elements.wtr.style.transform = "translate(-260%, -110%) rotate(-50deg)";
        setTimeout(() => {
            elements.wtr.style.transform = "translate(0, 0) rotate(0)";
            elements.drp.style.visibility = "visible";
            elements.sol.style.visibility = "visible";
            setTimeout(() => {
                elements.drp.style.visibility = "hidden";
                elements.f = 5;
                updateStep("Water added! Pour into flask.");
            }, 300);
        }, 1500);
    }
}

function next() {
    if (elements.f === 6) {
        // Only show one instruction: Transferring solutions to the shaker machine
        updateStep("Transferring solutions to the shaker machine...");

        // Add visual feedback - highlight the flask
        elements.flask1.style.filter = "drop-shadow(0 0 10px rgba(52, 152, 219, 0.8))";
        elements.flask1.style.transform = "scale(1.05)";
        elements.flask1.style.transition = "all 0.5s ease";

        setTimeout(() => {
            // Hide original elements with fade effect
            [elements.btnl, elements.mcylender, elements.acid, elements.wtr, elements.sol].forEach(e => {
                e.style.transition = "all 0.8s ease";
                e.style.opacity = "0";
                setTimeout(() => e.style.visibility = "hidden", 800);
            });

            // Hide flask with special effect
            elements.flask1.style.transform = "scale(0.8) translateY(-20px)";
            elements.flask1.style.opacity = "0";
            setTimeout(() => elements.flask1.style.visibility = "hidden", 800);

            // Explicitly hide solution images
            [elements.fsol, elements.fsol1, elements.fsol2].forEach(e => {
                e.style.visibility = "hidden";
                e.style.opacity = "0";
            });

            // Show shaker elements (excluding solution images)
            [elements.machineLP, elements.machineUP, elements.powerbtn].forEach(e => {
                e.style.visibility = "visible";
                e.style.opacity = "0";
                e.style.transform = "scale(0.8)";
                setTimeout(() => {
                    e.style.transition = "all 0.5s ease";
                    e.style.opacity = "1";
                    e.style.transform = "scale(1)";
                }, 100);
            });

            setTimeout(() => {
                // Show ready state
                elements.machineUP.style.visibility = "hidden";
                elements.machineUP1.style.visibility = "visible";
                elements.machineUP1.style.animation = "pulse 2s infinite";
                elements.powerbtn.style.animation = "pulse 1.5s infinite";

                // Only show the next essential instruction
                updateStep("Click power button to start shaking.");
                elements.f = 7;
            }, 2500); // Allow time for animation
        }, 1000);
    }
}

function power() {
    if (elements.f === 7) {
        updateStep("Starting the shaking process...");
        
        // Remove pulse animations
        elements.machineUP1.style.animation = "";
        elements.powerbtn.style.animation = "";
        
        // Hide power button with effect
        elements.powerbtn.style.transform = "scale(0.8)";
        elements.powerbtn.style.opacity = "0";
        setTimeout(() => elements.powerbtn.style.visibility = "hidden", 300);
        
        // Show shaking state
        elements.machineUP1.style.visibility = "hidden";
        elements.machineUP2.style.visibility = "visible";
        elements.machineUP2.style.animation = "shake 0.5s infinite";

        // Add shake effect to machineLP
        elements.machineLP.classList.add("shake");
        elements.machineLP.style.animation = "shake 0.3s infinite";

        elements.progressContainer.style.display = 'block';
        elements.progressContainer.style.animation = "slideInFromTop 0.5s ease-out";

        let seconds = 0;
        const totalSeconds = 10;
        const interval = setInterval(() => {
            seconds++;
            const percent = (seconds / totalSeconds) * 100;
            elements.progressBar.style.width = `${percent}%`;
            elements.progressText.textContent = `Shaking: ${seconds}/${totalSeconds} seconds (simulating 60 minutes)`;
            
            // Add visual feedback based on progress
            if (seconds === 3) {
                updateStep("Shaking in progress - solutions are mixing thoroughly...");
            } else if (seconds === 6) {
                updateStep("Shaking continues - creating uniform mixture...");
            } else if (seconds === 9) {
                updateStep("Final moments of shaking - preparing for separation...");
            }

            if (seconds >= totalSeconds) {
                clearInterval(interval);
                elements.progressContainer.style.display = 'none';
                elements.machineLP.classList.remove("shake");
                elements.machineLP.style.animation = "";
                
                elements.machineUP2.style.animation = "";
                completeShaking();
            }
        }, 1000);
    }
}

function completeShaking() {
    updateStep("Shaking complete! Preparing for separation...");
    
    // Show completion effect
    elements.machineUP2.style.visibility = "hidden";
    elements.machineUP.style.visibility = "visible";
    elements.machineUP.style.animation = "fadeInScale 0.8s ease-out";
    
    // Add completion glow effect
    elements.machineLP.style.filter = "drop-shadow(0 0 15px rgba(76, 175, 80, 0.8))";
    setTimeout(() => {
        elements.machineLP.style.filter = "";
    }, 2000);

    setTimeout(() => {
        // Show mixed solution with dramatic effect
        elements.mxdsol.style.visibility = "visible";
        elements.mxdsol.style.opacity = "0";
        elements.mxdsol.style.transform = "scale(0.8)";
        elements.mxdsol.style.transition = "all 1s ease-out";
        
        setTimeout(() => {
            elements.mxdsol.style.opacity = "1";
            elements.mxdsol.style.transform = "scale(1)";
            elements.mxdsol.style.filter = "drop-shadow(0 0 10px rgba(52, 152, 219, 0.6))";
        }, 100);
        
        // Show pipette with animation
        setTimeout(() => {
            elements.pippetf.style.visibility = "visible";
            elements.pippetf.style.opacity = "0";
            elements.pippetf.style.transform = "translateY(20px)";
            elements.pippetf.style.transition = "all 0.8s ease-out";
            
            setTimeout(() => {
                elements.pippetf.style.opacity = "1";
                elements.pippetf.style.transform = "translateY(0)";
                elements.pippetf.style.animation = "pulse 2s infinite";
            }, 100);
            
            updateStep("Shaking complete! Click pipette to separate the solution layers");
        }, 800);
        
        elements.f = 8;
    }, 1000);
}

function completeTitration() {
    elements.progressContainer.style.display = 'none';
    elements.solutionClear.style.visibility = "hidden";
    elements.solutionPink.style.visibility = "hidden";
    showResults();
}

function separateSolution() {
    if (elements.f === 8) {
        updateStep("Starting separation process...");
        
        // Remove pulse animation from pipette
        elements.pippetf.style.animation = "";
        
        // Animate pipette movement
        elements.pippetf.classList.add('pipette-animation');
        elements.pippetf.style.transform = "translate(-50px, -30px) rotate(-15deg)";
        elements.pippetf.style.transition = "all 1s ease-out";
        
        setTimeout(() => {
            updateStep("Extracting organic layer from the mixture...");
            
            // Create enhanced extraction effect
            createExtractionEffect();
            
            // Add swirling effect to mixed solution
            elements.mxdsol.style.transition = "all 2s ease-in-out";
            elements.mxdsol.style.transform = "rotate(360deg) scale(0.8)";
            elements.mxdsol.style.filter = "hue-rotate(180deg) brightness(1.2)";
            
            setTimeout(() => {
                // Hide mixed solution with dramatic fade
                elements.mxdsol.style.opacity = "0";
                elements.mxdsol.style.transform = "rotate(720deg) scale(0.5)";
                
                setTimeout(() => {
                    elements.mxdsol.style.visibility = "hidden";
                    elements.pippetf.classList.remove('pipette-animation');
                    elements.pippetf.style.visibility = "hidden";
                    
                    // Show separated layers with enhanced animation
                    showSeparatedLayers();
                }, 1000);
            }, 1500);
            
        }, 1000);
    }
}

function createExtractionEffect() {
    // Create bubbling effect during extraction
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const bubble = document.createElement('div');
            bubble.style.cssText = `
                position: absolute;
                width: ${4 + Math.random() * 6}px;
                height: ${4 + Math.random() * 6}px;
                background: rgba(255, 255, 0, 0.6);
                border-radius: 50%;
                left: ${40 + Math.random() * 8}%;
                top: ${50 + Math.random() * 10}%;
                z-index: 30;
                pointer-events: none;
                animation: titrationBubble 1.5s ease-out forwards;
            `;
            
            document.getElementById('beaker').appendChild(bubble);
            
            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.remove();
                }
            }, 1500);
            
        }, i * 200);
    }
}

function showSeparatedLayers() {
    updateStep("Separation complete! Two distinct layers have formed");
    
    // Show flasks with enhanced staggered animation
    setTimeout(() => {
        elements.cnflask1.style.visibility = "visible";
        elements.cnflask1.style.opacity = "0";
        elements.cnflask1.style.transform = "scale(0.8) translateY(20px)";
        elements.cnflask1.style.transition = "all 0.8s ease-out";
        elements.cnflask1.classList.add('separation-animation');
        
        setTimeout(() => {
            elements.cnflask1.style.opacity = "1";
            elements.cnflask1.style.transform = "scale(1) translateY(0)";
            elements.cnflask1.style.filter = "drop-shadow(0 0 8px rgba(52, 152, 219, 0.4))";
        }, 100);
    }, 300);
    
    setTimeout(() => {
        elements.cnflask2.style.visibility = "visible";
        elements.cnflask2.style.opacity = "0";
        elements.cnflask2.style.transform = "scale(0.8) translateY(20px)";
        elements.cnflask2.style.transition = "all 0.8s ease-out";
        elements.cnflask2.classList.add('separation-animation');
        
        setTimeout(() => {
            elements.cnflask2.style.opacity = "1";
            elements.cnflask2.style.transform = "scale(1) translateY(0)";
            elements.cnflask2.style.filter = "drop-shadow(0 0 8px rgba(52, 152, 219, 0.4))";
        }, 100);
    }, 600);
    
    // Show layers with enhanced color effects
    setTimeout(() => {
        elements.orglayer.style.visibility = "visible";
        elements.orglayer.style.opacity = "0";
        elements.orglayer.style.transform = "scale(0.9)";
        elements.orglayer.style.transition = "all 1s ease-out";
        elements.orglayer.classList.add('separation-animation');
        
        setTimeout(() => {
            elements.orglayer.style.opacity = "1";
            elements.orglayer.style.transform = "scale(1)";
            // Add visual distinction for organic layer
            elements.orglayer.style.filter = "hue-rotate(30deg) brightness(1.1) drop-shadow(0 0 5px rgba(255, 165, 0, 0.3))";
        }, 200);
        
        setTimeout(() => {
            elements.aqlayer.style.visibility = "visible";
            elements.aqlayer.style.opacity = "0";
            elements.aqlayer.style.transform = "scale(0.9)";
            elements.aqlayer.style.transition = "all 1s ease-out";
            elements.aqlayer.classList.add('separation-animation');
            
            setTimeout(() => {
                elements.aqlayer.style.opacity = "1";
                elements.aqlayer.style.transform = "scale(1)";
                // Add visual distinction for aqueous layer
                elements.aqlayer.style.filter = "hue-rotate(180deg) brightness(0.9) drop-shadow(0 0 5px rgba(0, 123, 255, 0.3))";
            }, 200);
            
            updateStep("Two distinct layers formed! Organic layer (top) and aqueous layer (bottom)");
            elements.f = 9;
            
            // Prepare titration after delay
            setTimeout(prepareTitration, 3000);
        }, 800);
    }, 1000);
}

function prepareTitration() {
    updateStep("Setting up titration apparatus for analysis...");

    // Show indicator with enhanced animation
    setTimeout(() => {
        elements.indicator.style.visibility = "visible";
        elements.indicator.style.opacity = "0";
        elements.indicator.style.transform = "scale(0.8) translateY(30px)";
        elements.indicator.style.transition = "all 1s ease-out";
        elements.indicator.classList.add('separation-animation');
        
        setTimeout(() => {
            elements.indicator.style.opacity = "1";
            elements.indicator.style.transform = "scale(1) translateY(0)";
            elements.indicator.style.filter = "drop-shadow(0 0 8px rgba(255, 20, 147, 0.4))";
            elements.indicator.style.animation = "pulse 2s infinite";
        }, 200);
        
        updateStep("Titration apparatus ready! Click on indicator to add phenolphthalein");
        elements.indicator.onclick = addIndicator;
        elements.f = 10;
    }, 1000);
}

function addIndicator() {
    if (elements.f === 10) {
        updateStep("Adding phenolphthalein indicator to the organic layer...");
        
        // Remove pulse animation
        elements.indicator.style.animation = "";
        
        // Animate indicator bottle with enhanced effect
        elements.indicator.style.transform = "translate(-30px, -40px) rotate(-20deg) scale(1.1)";
        elements.indicator.style.transition = "all 1s ease-out";
        elements.indicator.style.filter = "drop-shadow(0 0 12px rgba(255, 20, 147, 0.6))";
        
        setTimeout(() => {
            // Show indicator drop with enhanced animation
            elements.indicatorDrop.style.visibility = "visible";
            elements.indicatorDrop.style.opacity = "0";
            elements.indicatorDrop.style.transform = "scale(0.5)";
            elements.indicatorDrop.style.transition = "all 0.5s ease-out";
            elements.indicatorDrop.classList.add('indicator-animation');
            
            setTimeout(() => {
                elements.indicatorDrop.style.opacity = "1";
                elements.indicatorDrop.style.transform = "scale(1)";
            }, 100);
            
            // Create enhanced indicator drops
            createIndicatorDrops();
            
            setTimeout(() => {
                // Reset indicator bottle
                elements.indicator.style.transform = "translate(0, 0) rotate(0) scale(1)";
                elements.indicator.style.filter = "drop-shadow(0 0 8px rgba(255, 20, 147, 0.4))";
                elements.indicatorDrop.style.visibility = "hidden";
                
                // Change solution color to show indicator effect - only in organic layer
                elements.orglayer.style.transition = "all 1.5s ease-in-out";
                elements.orglayer.style.filter = "hue-rotate(320deg) brightness(1.3) drop-shadow(0 0 8px rgba(255, 20, 147, 0.4))";
                
                updateStep("Indicator added successfully! Color change indicates the presence of acetic acid");
                
                setTimeout(() => {
                    elements.indicator.style.visibility = "hidden";
                    elements.indicator.style.transition = "all 0.8s ease-out";
                    elements.indicator.style.opacity = "0";
                    elements.indicator.style.transform = "scale(0.8) translateY(20px)";
                    
                    setTimeout(() => {
                        showResults();
                    }, 1000);
                }, 2000);
            }, 2000);
        }, 800);
    }
}

function createIndicatorDrops() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const drop = document.createElement('div');
            drop.style.cssText = `
                position: absolute;
                width: 6px;
                height: 6px;
                background: radial-gradient(circle, rgba(255, 20, 147, 0.9) 0%, rgba(255, 20, 147, 0.6) 100%);
                border-radius: 50%;
                left: ${48 + Math.random() * 4}%;
                top: ${55 + Math.random() * 5}%;
                z-index: 35;
                pointer-events: none;
                animation: indicatorDrop 1.2s ease-out forwards;
            `;
            
            document.getElementById('beaker').appendChild(drop);
            
            setTimeout(() => {
                if (drop.parentNode) {
                    drop.remove();
                }
            }, 1200);
            
        }, i * 150);
    }
}

function simulateTitration() {
    updateStep("Titration in progress - adding base dropwise...", "Carefully adding base solution to reach endpoint");
    elements.progressContainer.style.display = 'block';
    
    // Create titration visual effects
    createTitrationEffects();

    let seconds = 0;
    const totalSeconds = 8;

    const interval = setInterval(() => {
        seconds++;
        const percent = (seconds / totalSeconds) * 100;
        elements.progressBar.style.width = `${percent}%`;
        elements.progressText.textContent = `Titration progress: ${seconds}/${totalSeconds} seconds`;
        
        // Add titration drops during process
        if (seconds % 2 === 0) {
            createTitrationDrop();
        }
        
        // Gradually change solution colors
        const hueShift = (seconds / totalSeconds) * 60;
        elements.orglayer.style.filter = `hue-rotate(${hueShift}deg) brightness(${1 + seconds * 0.02})`;
        elements.aqlayer.style.filter = `hue-rotate(${hueShift + 180}deg) brightness(${1 + seconds * 0.02})`;

        if (seconds >= totalSeconds) {
            clearInterval(interval);
            elements.progressContainer.style.display = 'none';
            
            // Final color change to indicate endpoint
            elements.orglayer.style.filter = "hue-rotate(320deg) brightness(1.3)";
            elements.aqlayer.style.filter = "hue-rotate(320deg) brightness(1.3)";
            
            updateStep("Titration complete! Endpoint reached.", "Analyzing results and calculating partition coefficient...");
            
            setTimeout(showResults, 1500);
        }
    }, 1000);
}

function createTitrationEffects() {
    // Create continuous bubbling effect
    const bubbleInterval = setInterval(() => {
        createTitrationBubble();
    }, 300);
    
    setTimeout(() => {
        clearInterval(bubbleInterval);
    }, 8000);
}

function createTitrationDrop() {
    const drop = document.createElement('div');
    drop.style.cssText = `
        position: absolute;
        width: 4px;
        height: 8px;
        background: linear-gradient(to bottom, rgba(0, 255, 127, 0.9) 0%, rgba(0, 255, 127, 0.6) 100%);
        border-radius: 2px;
        left: ${52 + Math.random() * 2}%;
        top: 45%;
        z-index: 40;
        pointer-events: none;
        animation: dropFall 1s ease-in forwards;
    `;
    
    document.getElementById('beaker').appendChild(drop);
    
    setTimeout(() => {
        if (drop.parentNode) {
            drop.remove();
        }
    }, 1000);
}

function createTitrationBubble() {
    const bubble = document.createElement('div');
    bubble.style.cssText = `
        position: absolute;
        width: ${3 + Math.random() * 4}px;
        height: ${3 + Math.random() * 4}px;
        background: rgba(0, 255, 127, 0.5);
        border-radius: 50%;
        left: ${50 + Math.random() * 6}%;
        top: ${65 + Math.random() * 5}%;
        z-index: 35;
        pointer-events: none;
        animation: titrationBubble 1.2s ease-out forwards;
    `;
    
    document.getElementById('beaker').appendChild(bubble);
    
    setTimeout(() => {
        if (bubble.parentNode) {
            bubble.remove();
        }
    }, 1200);
}

function showResults() {
    updateStep("Calculating partition coefficient...");
    
    // Show calculation panel with glow effect
    elements.calculation.style.display = "block";
    elements.calculation.style.visibility = "visible";
    elements.calculation.classList.add('calculation-animation');
    elements.calculation.classList.remove("hidden");
    
    // Generate and animate results
    const volume1 = (8 + Math.random() * 2).toFixed(2);
    const volume2 = (12 + Math.random() * 3).toFixed(2);
    const conc1 = (0.08 + Math.random() * 0.02).toFixed(4);
    const conc2 = (0.12 + Math.random() * 0.03).toFixed(4);
    const kd = (conc1 / conc2).toFixed(4);
    
    // Animate each result appearing
    setTimeout(() => {
        document.getElementById("volume1").textContent = volume1;
        document.getElementById("volume1").classList.add('number-animation');
    }, 500);
    
    setTimeout(() => {
        document.getElementById("volume2").textContent = volume2;
        document.getElementById("volume2").classList.add('number-animation');
    }, 800);
    
    setTimeout(() => {
        document.getElementById("conc1").textContent = conc1;
        document.getElementById("conc1").classList.add('number-animation');
    }, 1100);
    
    setTimeout(() => {
        document.getElementById("conc2").textContent = conc2;
        document.getElementById("conc2").classList.add('number-animation');
    }, 1400);
    
    setTimeout(() => {
        document.getElementById("kd").textContent = kd;
        document.getElementById("kd").classList.add('number-animation');
        document.getElementById("kd").style.color = "#e74c3c";
        document.getElementById("kd").style.fontSize = "1.2em";
        
        // Create celebration effect
        createCelebrationEffect();
        
        updateStep("Experiment completed successfully! Partition coefficient calculated.");
        elements.f = 11;
    }, 1700);
}

function createCelebrationEffect() {
    // Create sparkle effects around the result
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: radial-gradient(circle, rgba(255, 215, 0, 1) 0%, rgba(255, 215, 0, 0) 100%);
                border-radius: 50%;
                left: ${70 + Math.random() * 20}%;
                top: ${75 + Math.random() * 15}%;
                z-index: 50;
                pointer-events: none;
                animation: titrationBubble 2s ease-out forwards;
                box-shadow: 0 0 6px rgba(255, 215, 0, 0.8);
            `;
            
            document.getElementById('beaker').appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.remove();
                }
            }, 2000);
            
        }, i * 100);
    }
}

function repeatExperiment() {
    if (confirm("Do you want to repeat the experiment?")) {
        initExperiment();
    }
}

function washCylinder() {
    // Determine current state and show appropriate instruction
    let washInstruction = "";
    let nextInstruction = "";
    
    if (elements.f === 0) {
        washInstruction = "Rinsing cylinder...";
        nextInstruction = "Cylinder clean! Add butanol.";
    } else if (elements.f === 2) {
        washInstruction = "Rinsing cylinder...";
        nextInstruction = "Cylinder clean! Click acetic acid beaker.";
    } else if (elements.f === 4) {
        washInstruction = "Rinsing cylinder...";
        nextInstruction = "Cylinder clean! Click distilled water beaker.";
    } else {
        washInstruction = "Rinsing cylinder...";
        nextInstruction = "Cylinder ready!";
    }
    // Show instruction
    updateStep(washInstruction);
    // No motion for water bottle during rinsing - it stays stationary
    setTimeout(() => {
        elements.washWater.style.visibility = "visible";
        elements.washStream.style.visibility = "visible";
        elements.washWater.classList.add('wash-animation');
        elements.washStream.classList.add('stream-animation');
        elements.mcylender.classList.add('cylinder-wash-effect');
        createEnhancedWashEffects();
        handleSolutionWashing();
    }, 1200);
    setTimeout(() => {
        stopWashEffects();
        updateStep(nextInstruction);
    }, 4000);
}

function createEnhancedWashEffects() {
    // Create continuous water droplets
    let dropInterval = setInterval(() => {
        createWashDrop();
    }, 150);
    
    // Stop creating drops after 4 seconds
    setTimeout(() => {
        clearInterval(dropInterval);
    }, 4000);
    
    // Create water ripples in cylinder
    setTimeout(() => {
        createWaterRipples();
    }, 800);
}

function createWashDrop() {
    const washDrop = document.createElement('div');
    const randomOffset = (Math.random() - 0.5) * 2; // -1 to +1
    
    washDrop.style.cssText = `
        position: absolute;
        width: ${6 + Math.random() * 4}px;
        height: ${6 + Math.random() * 4}px;
        background: radial-gradient(circle, rgba(135, 206, 235, 0.9) 0%, rgba(135, 206, 235, 0.6) 50%, rgba(135, 206, 235, 0.3) 100%);
        border-radius: 50%;
        left: ${53.5 + randomOffset}%;
        top: ${35 + Math.random() * 5}%;
        z-index: 25;
        pointer-events: none;
        animation: dropFall 1.5s ease-in forwards;
        box-shadow: 0 2px 4px rgba(135, 206, 235, 0.3);
    `;
    
    // Add CSS animation for drop fall
    if (!document.getElementById('dropFallStyle')) {
        const style = document.createElement('style');
        style.id = 'dropFallStyle';
        style.textContent = `
            @keyframes dropFall {
                0% { 
                    transform: translateY(0) scale(1);
                    opacity: 0.9;
                }
                50% { 
                    transform: translateY(100px) scale(1.1);
                    opacity: 0.7;
                }
                100% { 
                    transform: translateY(200px) scale(0.8);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.getElementById('beaker').appendChild(washDrop);
    
    // Remove the drop after animation
    setTimeout(() => {
        if (washDrop.parentNode) {
            washDrop.remove();
        }
    }, 1500);
}

function createWaterRipples() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                width: 20px;
                height: 20px;
                border: 2px solid rgba(135, 206, 235, 0.6);
                border-radius: 50%;
                left: 54%;
                top: 68%;
                z-index: 20;
                pointer-events: none;
                animation: rippleExpand 2s ease-out forwards;
            `;
            
            // Add ripple animation
            if (!document.getElementById('rippleStyle')) {
                const style = document.createElement('style');
                style.id = 'rippleStyle';
                style.textContent = `
                    @keyframes rippleExpand {
                        0% { 
                            transform: scale(0.5);
                            opacity: 0.8;
                        }
                        100% { 
                            transform: scale(3);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
            }
            
            document.getElementById('beaker').appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.remove();
                }
            }, 2000);
            
        }, i * 500);
    }
}

function createWashSplash() {
    // Create splash effect at cylinder base
    const splash = document.createElement('div');
    splash.style.cssText = `
        position: absolute;
        width: 30px;
        height: 15px;
        background: radial-gradient(ellipse, rgba(135, 206, 235, 0.7) 0%, rgba(135, 206, 235, 0.3) 70%, transparent 100%);
        border-radius: 50%;
        left: 53%;
        top: 70%;
        z-index: 20;
        pointer-events: none;
        animation: splashEffect 1s ease-out forwards;
    `;
    
    // Add splash animation
    if (!document.getElementById('splashStyle')) {
        const style = document.createElement('style');
        style.id = 'splashStyle';
        style.textContent = `
            @keyframes splashEffect {
                0% { 
                    transform: scale(0.5) translateY(0);
                    opacity: 0.8;
                }
                50% { 
                    transform: scale(1.5) translateY(-5px);
                    opacity: 0.9;
                }
                100% { 
                    transform: scale(2) translateY(-10px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.getElementById('beaker').appendChild(splash);
    
    setTimeout(() => {
        if (splash.parentNode) {
            splash.remove();
        }
    }, 1000);
}

function handleSolutionWashing() {
    if (elements.sol.style.visibility === "visible") {
        // Create swirling effect as solution is washed away
        elements.sol.style.transition = "all 2s ease-in-out";
        elements.sol.style.transform = "rotate(360deg) scale(0.5)";
        elements.sol.style.opacity = "0.3";
        
        setTimeout(() => {
            elements.sol.style.opacity = "0";
            setTimeout(() => {
                elements.sol.style.transform = "rotate(0deg) scale(1)";
                elements.sol.style.opacity = "1";
                elements.sol.style.visibility = "hidden";
                elements.sol.style.transition = "all 1.58s ease";
            }, 1000);
        }, 1500);
    }
}

function stopWashEffects() {
    // Hide wash effects
    elements.washWater.style.visibility = "hidden";
    elements.washStream.style.visibility = "hidden";
    
    // Remove animation classes
    elements.washWater.classList.remove('wash-animation');
    elements.washStream.classList.remove('stream-animation');
    elements.mcylender.classList.remove('cylinder-wash-effect');
    
    // Reset opacity
    elements.washWater.style.opacity = "0.8";
    elements.washStream.style.opacity = "0.8";
}
