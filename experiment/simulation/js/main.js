
var weingimg=document.querySelector("#hweingimage")
var conicalflaskimg=document.querySelector("#hemptyconicalflask")
var roundflaskimg=document.querySelector("#hemptyroundflsk")
var roundflask1=document.querySelector("#hroundflask1")
var roundflask2=document.querySelector("#hroundflask2")
var aceticacideimg=document.querySelector("#haceticacidimage")
var buretimag=document.querySelector("#hburetimage")
var fiterstandimg=document.querySelector("#hfilterstand")
var mesurimg=document.querySelector("#hmasurcylenderimage")
var sperchulaimg=document.querySelector("#hspertulaimage")
var emptypatrydiskimg=document.querySelector("#hemptypatrydiskimage")
var activechr=document.querySelector("#hpetrydiskchar")
var kippiimg=document.querySelector("#hkippiimage")
var indicatorimg=document.querySelector("#hactivatordroperimage")
var step1=document.querySelector("#beaker")
var step1=document.querySelector("#beaker1")

var hovt = document.querySelector("#hovt")

var hcounter=0
/*var hvalue="none"
var body=document.querySelector("#bod")

body.addEventListener("mouseover",function(){
    steper()
})*/



weingimg.addEventListener("mouseenter",function(){
    hcounter+=1;
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Weighing balance "
    hovt.style.top="60%"
    hovt.style.left="5%"

})
weingimg.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})
conicalflaskimg.addEventListener("mouseenter",function(){
    hcounter+=1
    
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Conical flask (100 mL) "
    hovt.style.top="34%"
    hovt.style.left="20%"

})
conicalflaskimg.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})
roundflaskimg.addEventListener("mouseenter",function(){
    hcounter+=1
    
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Round-Flask"
    hovt.style.top="30%"
    hovt.style.left="25%"

})
roundflaskimg.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})
roundflask1.addEventListener("mouseenter",function(){
    hcounter+=1
    
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Oxalic Acid (0.1 N)"
    hovt.style.top="28%"
    hovt.style.left="35%"

})
roundflask1.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})
roundflask2.addEventListener("mouseenter",function(){
    hcounter+=1
    
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Sodium hydroxide"
    hovt.style.top="28%"
    hovt.style.left="42%"

})
roundflask2.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})
aceticacideimg.addEventListener("mouseenter",function(){
    hcounter+=1
    
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Acetic Acid "
    hovt.style.top="37%"
    hovt.style.left="48%"

})
aceticacideimg.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})
buretimag.addEventListener("mouseenter",function(){
    hcounter+=1
    
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Burette (50 mL)"
    hovt.style.top="25%"
    hovt.style.left="60%"

})
buretimag.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})
fiterstandimg.addEventListener("mouseenter",function(){
    hcounter+=1
    
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Filter-Stand "
    hovt.style.top="28%"
    hovt.style.left="70%"

})
fiterstandimg.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})
mesurimg.addEventListener("mouseenter",function(){
    hcounter+=1
    
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Measuring Cylinder (10 mL)"
    hovt.style.top="38%"
    hovt.style.left="10%"

})
mesurimg.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})
sperchulaimg.addEventListener("mouseenter",function(){
    hcounter+=1
    
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Spatula "
    hovt.style.top="75%"
    hovt.style.left="30%"

})
sperchulaimg.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})
emptypatrydiskimg.addEventListener("mouseenter",function(){
    hcounter+=1
    
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Petri dish"
    hovt.style.top="75%"
    hovt.style.left="38%"

})
emptypatrydiskimg.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})
activechr.addEventListener("mouseenter",function(){
    hcounter+=1
    
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Activated Charcoal"
    hovt.style.top="75%"
    hovt.style.left="44%"

})
activechr.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})
kippiimg.addEventListener("mouseenter",function(){
    hcounter+=1
    
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Funnel"
    hovt.style.top="75%"
    hovt.style.left="55%"

})
kippiimg.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})
indicatorimg.addEventListener("mouseenter",function(){
    hcounter+=1
    
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Phenolphthalein indicator"
    hovt.style.top="75%"
    hovt.style.left="80%"

})
indicatorimg.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

/*var s=0;
function next(){
    if(s==0){
        step1.style.visibility="hidden";
    }
}*/
/*function steper(){
    if(hcounter==14){
        console.log(hcounter)
        if(hvalue=="none"){
            console.log(hcounter)
            f=0
            messcounter=1
            update()
            hvalue="done"
        }
    }

}*/


