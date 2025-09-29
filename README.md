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

### **Visual Design & UI - Enhanced in 0.1.5**
- **Dynamic referee system** - Visual referee reactions to game events
  - Neutral referee on game start and new game initiation
  - Celebratory referee when player scores (persists until new game)
  - Opponent-favoring referee when AI scores (persists until new game)
  - State-based image switching with smooth transitions
- **Immersive gradient background** - Beautiful cyan to magenta gradient (#00D0FF ? #FF00FF)
- **Perfectly balanced layout** - Vertically centered sections for optimal visual harmony
  - Game title and version (left side) - centered as unified block
  - Referee and score (right side) - centered as unified block
- **Professional game branding** - 400x227px title image with dynamic positioning
- **Intelligent responsive positioning** - Elements automatically center between screen edges and game canvas
- **Consistent spacing design** - 20px spacing throughout interface for visual coherence

### **Technical Excellence**
- **Clean architecture** - Separated RefereeState enum in dedicated Core layer
- **Blazor WebAssembly** - Runs entirely in the browser with .NET 9
- **Dynamic positioning system** - JavaScript-powered responsive layout with vertical centering
- **State management** - Sophisticated referee state tracking and persistence
- **Fully responsive design** - Elements scale based on screen size with optimal breakpoints
- **Cross-platform compatibility** - Works on any modern browser
- **Optimized performance** - AOT compilation and compressed assets

---

## How to Play

1. **Move your mouse** to control your paddle (bottom area)
2. **Click anywhere** on the game area to start/restart
3. **Hit the ball** with your paddle to keep it in play
4. **Score points** when the ball passes your opponent
5. **Watch the referee** react to your gameplay and remember your performance!
6. **Click to start new game** - referee resets to neutral, scores persist

---

## Architecture

### **Project Structure**
```
NewAndRetroPong/
??? Game/
?   ??? Game.razor              # Main UI Component with Vertically Centered Dual-Section Layout
?   ??? Core/                   # Game Logic Layer
?       ??? GameLogic.cs        # Game Engine with Enhanced Referee System
?       ??? Ball.cs             # Ball Entity
?       ??? Paddle.cs           # Paddle Entity
?       ??? RefereeState.cs     # Dedicated Referee State Management (Separated)
??? Layout/
?   ??? MainLayout.razor        # Full-screen Layout
??? wwwroot/
    ??? css/game.css            # Enhanced Game Styling with Gradients & Vertical Centering
    ??? assets/images/          # Optimized Game Assets
    ?   ??? title.png           # Game Title (400x227px)
    ?   ??? referee_neutral.png # Neutral Referee (400x400px)
    ?   ??? referee_player.png  # Player Score Referee (400x400px)
    ?   ??? referee_enemy.png   # AI Score Referee (400x400px)
    ?   ??? ball.png            # Enhanced Ball Sprite
    ?   ??? paddle_player.png   # Enhanced Player Paddle Sprite
    ?   ??? paddle_enemy.png    # Enhanced AI Paddle Sprite
    ??? index.html              # Entry Point with Advanced Dynamic Positioning Logic
```

### **Technology Stack**
- **Framework**: .NET 9 with C# 13.0 pattern matching
- **Frontend**: Blazor WebAssembly with component-based architecture
- **Graphics**: HTML5 Canvas with optimized JavaScript interop
- **Styling**: CSS3 with responsive design, gradients, and transform-based centering
- **State Management**: Custom RefereeState enum with persistent game memory
- **Deployment**: GitHub Pages optimized

---

## Getting Started

### **Prerequisites**
- [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)
- Modern web browser with WebAssembly support

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

### **Enhanced Referee System - Version 0.1.5**
- **Intelligent state management**: Referee remembers game events until new game starts
- **Visual storytelling**: Character reactions enhance immersion and feedback
- **Persistent feedback**: Referee state maintains throughout point sequences
- **Reset mechanism**: Returns to neutral only when clicking to start new game
- **Responsive scaling**: 400x400px referee images adapt to all screen sizes

### **Advanced Visual Design**
- **Perfect vertical centering**: Both side sections centered as unified blocks using CSS transforms
- **Gradient background**: Smooth cyan (#00D0FF) to magenta (#FF00FF) transition
- **Intelligent layout**: Title/version block on left, referee/score block on right
- **Dynamic positioning**: JavaScript calculates optimal horizontal centering between screen edges and canvas
- **Professional presentation**: High-quality assets with consistent 20px spacing

### **Player Controls**
- **Mouse Movement**: Real-time paddle control with smooth responsiveness
- **Movement Area**: Bottom third of the game area with boundary constraints
- **Click to Start/Restart**: Simple interaction for game state management

### **AI Opponent**
- **Advanced Ball Tracking**: Intelligent horizontal positioning based on ball location
- **Area Restriction**: Operates exclusively in top third of game area
- **Adaptive Response**: Reacts intelligently to ball direction changes

### **Enhanced Physics**
- **Realistic Collisions**: Precise detection with walls and paddles
- **Dynamic Trajectories**: Hit position influences ball angle with physics accuracy
- **Consistent Performance**: Maintains 60 FPS for fair gameplay experience

---

## Development Features

### **Code Quality & Architecture**
- **Clean separation**: RefereeState enum properly isolated in Core layer
- **Modern C# patterns**: Leverages C# 13.0 switch expressions and pattern matching
- **Comprehensive refactoring**: Removed unused Bootstrap dependencies and placeholder files
- **English-first documentation**: Complete codebase documentation in English
- **Maintainable structure**: Clear component hierarchy and responsibility separation

### **Performance Optimizations**
- **Advanced responsive system**: Efficient element scaling with CSS transforms
- **Optimized game loop**: Consistent 16ms frame timing (60 FPS)
- **Memory management**: Proper disposal patterns and resource cleanup
- **Enhanced rendering**: Canvas-based graphics with preloaded, optimized images
- **Asset optimization**: Removed unused files, compressed images

---

## Cross-Platform Support

| Platform | Support | Optimizations |
|----------|---------|---------------|
| **Desktop** | Full | Optimal mouse control, full visual effects, native resolution |
| **Mobile** | Full | Touch-responsive design, scaled UI (250px assets), portrait optimization |
| **Tablet** | Full | Perfect touch gameplay, medium assets (300px), landscape/portrait support |
| **Web** | Full | No installation required, runs in any modern WebAssembly-capable browser |

---

## Technical Specifications

### **Performance Metrics**
- **Frame Rate**: Consistent 60 FPS gameplay with optimized game loop
- **Load Time**: < 3 seconds on modern connections with compressed assets
- **Memory Usage**: Optimized WebAssembly footprint with efficient state management
- **Bundle Size**: Compressed and optimized for fast delivery

### **Responsive Design System**
- **Desktop (>768px)**: Full 400px images and elements
- **Tablet (?768px)**: Scaled to 300px images with maintained aspect ratios
- **Mobile (?480px)**: Optimized 250px images for touch interaction
- **Dynamic positioning**: JavaScript-powered responsive layout with CSS transform centering

### **Browser Compatibility**
- Chrome/Edge (Chromium) 90+ with WebAssembly 1.0
- Firefox 88+ with full WebAssembly support
- Safari 14+ with optimized WebAssembly performance
- Mobile browsers (iOS Safari 14+, Chrome Mobile 90+)

---

## Visual Features

### **Enhanced Game Interface - Version 0.1.5**
- **Immersive gradient background** - Seamless cyan to magenta color transition
- **Professional game branding** - High-quality title image with perfect positioning
- **Advanced referee system** - Dynamic visual feedback with state persistence
- **Perfect centering system** - Vertical centering of element groups for visual balance
- **Intelligent spacing** - Consistent 20px margins with optimal visual hierarchy

### **Sophisticated Referee System**
- **Neutral State**: Clean, professional referee appearance on game start
- **Player Victory**: Celebratory referee reaction that persists until new game
- **AI Victory**: Opponent-supporting referee that remembers AI success
- **State Intelligence**: Referee maintains reaction memory throughout game session
- **Reset Logic**: Returns to neutral only when explicitly starting new game

---

## Deployment

This project is optimized for **GitHub Pages** deployment:

1. **Repository Setup**: Uses `ERTYNEA.github.io` for direct domain access
2. **Automatic Deployment**: Publishes to `docs/` folder with optimized assets
3. **Live URL**: [https://ERTYNEA.github.io/](https://ERTYNEA.github.io/)
4. **Performance**: Optimized for fast loading and smooth gameplay

### **GitHub Pages Configuration**
- **Source**: Deploy from `docs/` folder in main branch
- **Build Process**: .NET 9 publish with Release configuration
- **Custom Domain**: Supports custom domain configuration and HTTPS

---

## Version History

### **v0.1.5** (Current - Enhanced)
- **Advanced referee system** - Intelligent state management with memory persistence
- **Perfect vertical centering** - CSS transform-based centering for visual balance
- **Enhanced gradient background** - Beautiful cyan to magenta immersive experience
- **Professional dual-section layout** - Title/version left, referee/score right with perfect spacing
- **Optimized asset management** - Updated sprites, removed placeholder files and unused dependencies
- **Clean architecture refactoring** - Separated RefereeState enum, removed unused Bootstrap components
- **Advanced responsive positioning** - JavaScript-powered dynamic layout with CSS centering
- **Improved state management** - Referee remembers game events until explicit reset

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
- Modern .NET 9 and Blazor WebAssembly development with state management
- Clean architecture principles with proper separation of concerns
- Advanced game development with web technologies and CSS transforms
- Responsive design implementation with intelligent positioning
- Dynamic UI systems with persistent state management
- GitHub Pages deployment strategies with performance optimization

---

## License

This project is open source and available for educational and personal use.

---

## About

**NewAndRetroPong** demonstrates cutting-edge web game development using Microsoft's latest technologies. Built with **.NET 9**, **Blazor WebAssembly**, and **C# 13.0**, it showcases how to create performant, cross-platform games with sophisticated visual design, intelligent state management, and responsive user interfaces.

### **Perfect For:**
- Learning modern .NET 9 web development patterns
- Understanding advanced game development with persistent state systems
- Exploring Blazor WebAssembly capabilities and component architecture
- Studying responsive web design with CSS transforms and dynamic positioning
- Implementing visual feedback systems with memory in games
- Creating professional-grade user interfaces with perfect centering

### **Technical Highlights:**
- **State Management**: Sophisticated referee system with memory persistence
- **Visual Design**: CSS transform-based vertical centering for perfect balance
- **Architecture**: Clean separation with dedicated enum management
- **Performance**: Optimized 60 FPS gameplay with efficient asset loading
- **Responsiveness**: Intelligent positioning system with JavaScript and CSS collaboration

---

<div align="center">

**[PLAY NOW](https://ERTYNEA.github.io/) | [Star this repo](https://github.com/ERTYNEA/ERTYNEA.github.io) | [Fork](https://github.com/ERTYNEA/ERTYNEA.github.io/fork)**

*Built with care using .NET 9, Blazor WebAssembly, and modern web technologies*

</div>