# NewAndRetroPong

[![.NET](https://img.shields.io/badge/.NET-9.0-512BD4?style=flat-square&logo=dotnet)](https://dotnet.microsoft.com/)
[![Blazor WebAssembly](https://img.shields.io/badge/Blazor-WebAssembly-7139d1?style=flat-square&logo=blazor)](https://blazor.net/)
[![C#](https://img.shields.io/badge/C%23-13.0-239120?style=flat-square&logo=csharp)](https://docs.microsoft.com/en-us/dotnet/csharp/)
[![Live Demo](https://img.shields.io/badge/Play_Now-Live_Demo-00d4aa?style=flat-square)](https://ERTYNEA.github.io/)

A modern, full-screen **Pong game** built with **.NET 9** and **Blazor WebAssembly**. Experience the classic arcade game with smooth 60 FPS gameplay, intelligent AI opponent, responsive mouse controls, and immersive visual design with dynamic referee system.

## [**PLAY NOW**](https://ERTYNEA.github.io/)

---

## Features

### **Core Gameplay - Version 0.1.5**
- **Full-screen immersive experience** - Clean, distraction-free gaming
- **Smooth 60 FPS gameplay** - Buttery smooth animations and physics
- **Mouse control system** - Intuitive horizontal and vertical paddle movement
- **Intelligent AI opponent** - Smart ball-following algorithm
- **Real-time scoring** - Live score tracking with visual feedback
- **Auto-restart mechanism** - Seamless transitions after scoring
- **Responsive game elements** - Paddles and ball scale automatically to screen size

### **Visual Design & UI - New in 0.1.5**
- **Dynamic referee system** - Visual referee reactions to game events
  - Neutral referee on game start
  - Celebratory referee when player scores
  - Opponent-favoring referee when AI scores
  - Referee state persists until new game starts
- **Immersive gradient background** - Beautiful cyan to magenta gradient (#00D0FF ? #FF00FF)
- **Dual-section layout** - Game title on left, referee and score on right
- **Professional game branding** - 400x227px title image with dynamic positioning
- **Centered responsive positioning** - Elements automatically center between screen edges and game canvas
- **Enhanced spacing** - 20px consistent spacing throughout the interface

### **Technical Excellence**
- **Modern architecture** - Clean separation with dedicated RefereeState enum
- **Blazor WebAssembly** - Runs entirely in the browser
- **Dynamic positioning system** - JavaScript-powered responsive layout
- **Fully responsive design** - Elements scale based on screen size
- **Cross-platform compatibility** - Works on any modern browser
- **Optimized performance** - AOT compilation and compressed assets

---

## How to Play

1. **Move your mouse** to control your paddle (bottom area)
2. **Click anywhere** on the game area to start
3. **Hit the ball** with your paddle to keep it in play
4. **Score points** when the ball passes your opponent
5. **Watch the referee** react to your gameplay!
6. **Click to continue** after each point

---

## Architecture

### **Project Structure**
```
NewAndRetroPong/
??? Game/
?   ??? Game.razor              # Main UI Component with Dual-Section Layout
?   ??? Core/                   # Game Logic Layer
?       ??? GameLogic.cs        # Game Engine with Referee System
?       ??? Ball.cs             # Ball Entity
?       ??? Paddle.cs           # Paddle Entity
?       ??? RefereeState.cs     # Referee State Management
??? Layout/
?   ??? MainLayout.razor        # Full-screen Layout
??? wwwroot/
    ??? css/game.css            # Enhanced Game Styling with Gradients
    ??? assets/images/          # Game Assets including Referee Images
    ?   ??? title.png           # Game Title (400x227px)
    ?   ??? referee_neutral.png # Neutral Referee (400x400px)
    ?   ??? referee_player.png  # Player Score Referee (400x400px)
    ?   ??? referee_enemy.png   # AI Score Referee (400x400px)
    ?   ??? ball.png            # Ball Sprite
    ?   ??? paddle_player.png   # Player Paddle Sprite
    ?   ??? paddle_enemy.png    # AI Paddle Sprite
    ??? index.html              # Entry Point with Dynamic Positioning Logic
```

### **Technology Stack**
- **Framework**: .NET 9 with C# 13.0
- **Frontend**: Blazor WebAssembly
- **Graphics**: HTML5 Canvas with JavaScript interop
- **Styling**: CSS3 with responsive design and gradients
- **State Management**: Custom RefereeState system
- **Deployment**: GitHub Pages ready

---

## Getting Started

### **Prerequisites**
- [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)
- Modern web browser

### **Local Development**
```bash
# Clone the repository
git clone https://github.com/ERTYNEA/ERTYNEA.github.io.git

# Navigate to project directory
cd ERTYNEA.github.io

# Restore dependencies
dotnet restore

# Run the application
dotnet run

# Open browser to https://localhost:5000
```

### **Build for Production**
```bash
# Publish for GitHub Pages
dotnet publish -c Release -o docs

# The docs/ folder contains the deployable application
```

---

## Game Mechanics

### **Dynamic Referee System - New in 0.1.5**
- **State-based reactions**: Referee image changes based on game events
- **Persistent feedback**: Referee state maintains until new game starts
- **Visual storytelling**: Enhances game immersion with character reactions
- **Responsive positioning**: 400x400px referee images scale for mobile devices

### **Enhanced Visual Design**
- **Gradient background**: Smooth cyan to magenta transition
- **Dual-section layout**: Title/version on left, referee/score on right
- **Dynamic positioning**: Elements center automatically between screen edges and canvas
- **Professional branding**: High-quality title image with proper spacing

### **Player Controls**
- **Mouse Movement**: Controls paddle position in real-time
- **Movement Area**: Bottom third of the game area
- **Click to Start**: Simple interaction to begin/resume gameplay

### **AI Opponent**
- **Ball Tracking**: Follows ball position horizontally
- **Restricted Movement**: Operates only in top third of game area  
- **Responsive AI**: Reacts to ball direction changes

### **Physics**
- **Ball Bouncing**: Realistic collision detection with walls and paddles
- **Angle Variation**: Hit position affects ball trajectory
- **Speed Consistency**: Maintains constant game speed for fairness

---

## Development Features

### **Code Quality**
- **Clean architecture** - RefereeState enum separated into Core layer
- **English-first comments** - All documentation in English
- **Modern C# features** - Leverages C# 13.0 pattern matching
- **Comprehensive documentation** - Well-documented codebase
- **Refactored codebase** - Removed unused code and dependencies

### **Performance Optimizations**
- **Responsive scaling system** - Efficient element sizing
- **60 FPS game loop** - Consistent 16ms frame timing
- **Memory management** - Proper disposal patterns
- **Optimized rendering** - Canvas-based graphics with image preloading

---

## Cross-Platform Support

| Platform | Support | Notes |
|----------|---------|-------|
| **Desktop** | Full | Optimal experience with mouse control and full visual effects |
| **Mobile** | Full | Touch-responsive design with scaled UI elements |
| **Tablet** | Full | Perfect for touch gameplay with medium-sized assets |
| **Web** | Full | No installation required, runs in any modern browser |

---

## Technical Specifications

### **Performance Metrics**
- **Frame Rate**: 60 FPS consistent gameplay
- **Load Time**: < 3 seconds on modern connections
- **Memory Usage**: Optimized WebAssembly footprint
- **Bundle Size**: Compressed for fast delivery

### **Responsive Design Breakpoints**
- **Desktop**: Full 400px images and elements
- **Tablet (?768px)**: Scaled to 300px images
- **Mobile (?480px)**: Scaled to 250px images
- **Dynamic positioning**: JavaScript-powered responsive layout

### **Browser Compatibility**
- Chrome/Edge (Chromium) 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Visual Features

### **Game Interface - Version 0.1.5**
- **Immersive gradient background** - Cyan to magenta color transition
- **Professional game title** - High-quality branding image
- **Dynamic referee system** - Visual feedback for game events
- **Intelligent positioning** - Auto-centering between screen edges and game area
- **Consistent spacing** - 20px margins throughout interface

### **Referee System**
- **Neutral State**: Default referee appearance on game start
- **Player Victory**: Celebratory referee when player scores
- **AI Victory**: Opponent-supporting referee when AI scores
- **State Persistence**: Referee reaction remains until new game begins

---

## Deployment

This project is configured for **GitHub Pages** deployment:

1. **Repository Setup**: Uses `ERTYNEA.github.io` for direct domain access
2. **Automatic Deployment**: Publishes to `docs/` folder
3. **Live URL**: [https://ERTYNEA.github.io/](https://ERTYNEA.github.io/)

### **GitHub Pages Configuration**
- **Source**: Deploy from `docs/` folder
- **Branch**: `main`
- **Custom Domain**: Supports custom domain configuration

---

## Version History

### **v0.1.5** (Current)
- **Dynamic referee system** - Visual referee reactions to scoring events
- **Immersive gradient background** - Beautiful cyan to magenta gradient
- **Enhanced UI layout** - Dual-section design with title and referee
- **Professional branding** - High-quality title image integration
- **Responsive positioning** - JavaScript-powered dynamic layout
- **Code refactoring** - Cleaned architecture with separated RefereeState enum
- **Asset optimization** - Updated game sprites and removed unused files

### **v0.1.4**
- **Responsive game elements** - Paddles and ball scale automatically
- **Enhanced borders** - Clean 5px white side borders
- **Improved field lines** - Bright white lines for better visibility
- **Mobile aspect ratio** - Optimized 9:16 portrait orientation
- **English documentation** - All comments translated to English

### **v0.1.3**
- Full-screen immersive gameplay
- Refactored architecture with separated classes
- GitHub Pages deployment ready
- Mobile-responsive design
- Performance optimizations

---

## Contributing

Contributions are welcome! This project serves as an excellent example of:
- Modern .NET 9 and Blazor WebAssembly development
- Clean architecture principles with state management
- Game development with web technologies
- Responsive design implementation
- Dynamic UI positioning systems
- GitHub Pages deployment strategies

---

## License

This project is open source and available for educational and personal use.

---

## About

**NewAndRetroPong** demonstrates modern web game development using Microsoft's latest technologies. Built with **.NET 9**, **Blazor WebAssembly**, and **C# 13.0**, it showcases how to create performant, cross-platform games with immersive visual design and responsive user interfaces.

### **Perfect For:**
- Learning modern .NET web development
- Understanding game development with state management
- Exploring Blazor WebAssembly capabilities
- Studying responsive web design patterns
- Implementing dynamic positioning systems
- Creating visual feedback systems in games

---

<div align="center">

**[PLAY NOW](https://ERTYNEA.github.io/) | [Star this repo](https://github.com/ERTYNEA/ERTYNEA.github.io) | [Fork](https://github.com/ERTYNEA/ERTYNEA.github.io/fork)**

*Built with care using .NET 9 and Blazor WebAssembly*

</div>