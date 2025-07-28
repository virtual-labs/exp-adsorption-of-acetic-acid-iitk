# Partition Coefficient Experiment Simulation

## Overview
This is an interactive simulation of a partition coefficient experiment that demonstrates the distribution of acetic acid between butanol and water phases.

## New Features Added

### 🧽 Rinse Flask Effect
- **Rinse Button**: A green rinse button appears at appropriate stages to clean the graduated cylinder
- **Rinse Animation**: The cylinder shakes and rotates during the rinsing process with distilled water
- **Proper Workflow**: Ensures the cylinder is cleaned with distilled water before each new solution
- **Visual Feedback**: Clear indication when rinsing is complete
- **Realistic Lab Practice**: Follows proper laboratory procedures for preventing contamination

### 🔊 Voice Over Instructions
- **Voice Guidance**: All instructions are spoken aloud using the Web Speech API
- **Voice Controls**: 
  - 🔊 Voice Toggle: Turn voice guidance on/off
  - 🔄 Repeat Button: Repeat the current instruction
- **Smart Voice Selection**: Automatically selects a female voice if available
- **Accessibility**: Helps visually impaired users and improves learning experience

### 🎯 Improved Workflow
- **Step Validation**: Prevents users from performing actions out of order
- **Visual Feedback**: Success and error messages appear on screen
- **Better Instructions**: More detailed and clear step-by-step guidance
- **Progress Tracking**: Visual progress bars for time-consuming processes
- **Keyboard Shortcuts**:
  - `Ctrl+R`: Repeat current instruction
  - `Ctrl+V`: Toggle voice guidance
  - `Escape`: Restart experiment

### 🎨 Enhanced User Experience
- **Hover Effects**: Interactive elements respond to mouse hover
- **Smooth Animations**: Improved transitions and animations
- **Responsive Design**: Works on different screen sizes
- **Accessibility Features**: High contrast mode and reduced motion support
- **Error Handling**: Clear feedback when actions are performed incorrectly

## How to Use

### Starting the Experiment
1. **Initial Rinse**: Click the "🧽 Rinse Cylinder" button to clean the graduated cylinder with distilled water
2. **Add Butanol**: Click on the Butanol beaker → Click graduated cylinder to pour → Click rinse button
3. **Add Acetic Acid**: Click on Acetic Acid beaker → Click graduated cylinder to pour → Click rinse button
4. **Add Water**: Click on Distilled Water beaker → Click graduated cylinder to pour
5. **Shake**: Click NEXT → Click power button → Wait for shaking to complete
6. **Separate**: Click pipette to separate layers
7. **Titrate**: Click indicator → Wait for titration → View results

### Correct Rinse Workflow
The experiment follows proper laboratory procedures:

1. **Before Butanol**: Rinse cylinder with distilled water
2. **After Butanol**: Pour butanol → Transfer to flask → Rinse cylinder with distilled water
3. **After Acetic Acid**: Pour acetic acid → Transfer to flask → Rinse cylinder with distilled water
4. **After Water**: Pour water → Transfer to flask → Proceed to shaking

### Voice Controls
- Click "🔊 Voice: ON" to enable/disable voice guidance
- Click "🔄 Repeat" to hear the current instruction again
- Voice automatically speaks each new instruction

### Experiment Steps (Detailed)
1. **Initial Setup**: Click rinse button to clean cylinder with distilled water
2. **Add Butanol**: 
   - Click butanol beaker
   - Click graduated cylinder to transfer to flask
   - Click rinse button to clean cylinder
3. **Add Acetic Acid**:
   - Click acetic acid beaker
   - Click graduated cylinder to transfer to flask
   - Click rinse button to clean cylinder
4. **Add Water**:
   - Click distilled water beaker
   - Click graduated cylinder to transfer to flask
5. **Shake Solutions**:
   - Click NEXT button
   - Click power button on shaker
   - Wait for 10 seconds (simulates 60 minutes)
6. **Separate Layers**:
   - Click pipette to separate organic and aqueous layers
7. **Titration**:
   - Click phenolphthalein indicator
   - Wait for titration to complete
8. **Results**: View calculated partition coefficient

### Tips
- Always rinse the cylinder with distilled water between different solutions
- Follow the instructions in the exact order shown
- Use voice guidance for better understanding
- Watch for visual feedback messages
- The rinse button only appears when rinsing is appropriate

## Technical Details

### Browser Compatibility
- Modern browsers with Web Speech API support
- Chrome, Firefox, Safari, Edge (latest versions)
- Requires HTTPS for voice features in some browsers

### File Structure
```
simulation/
├── index.html          # Main HTML file
├── css/
│   └── main.css        # Styling and animations
├── js/
│   └── main.js         # Interactive functionality
└── images/             # Experiment graphics
```

### Key Features
- **State Management**: Tracks experiment progress through 15 distinct states
- **Voice Synthesis**: Text-to-speech for instructions
- **Animation System**: Smooth transitions and effects
- **Error Handling**: Validates user actions and provides feedback
- **Responsive Design**: Adapts to different screen sizes
- **Realistic Lab Workflow**: Proper rinsing procedures between solutions

## Accessibility Features
- **Voice Guidance**: Audio instructions for all steps
- **Keyboard Navigation**: Keyboard shortcuts for common actions
- **High Contrast Mode**: Support for high contrast display preferences
- **Reduced Motion**: Respects user's motion preferences
- **Screen Reader Friendly**: Proper ARIA labels and semantic HTML

## Troubleshooting

### Voice Not Working
- Ensure your browser supports Web Speech API
- Check if your system has text-to-speech voices installed
- Try refreshing the page
- Use HTTPS if accessing from a server

### Experiment Not Progressing
- Follow the instructions exactly in order
- Look for error messages in red
- Use the repeat button to hear instructions again
- Check that all elements are visible on screen
- Make sure to rinse the cylinder when prompted

### Power Button Not Working
- Ensure you've clicked the NEXT button first
- Check that you're on the correct step (step 10)
- Look for any error messages
- Try refreshing the page if issues persist

### Performance Issues
- Close other browser tabs
- Refresh the page
- Check your internet connection for voice features

## Future Enhancements
- Multiple language support
- More detailed chemical calculations
- 3D visualization options
- Mobile app version
- Integration with learning management systems
- Additional laboratory safety features 