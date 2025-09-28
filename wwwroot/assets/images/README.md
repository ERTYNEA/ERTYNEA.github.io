# NewAndRetroPong Assets

## Required Images

This game requires the following image assets to be placed in the `wwwroot/assets/images/` directory:

### Ball
- **Filename:** `ball.png`
- **Required size:** 20x20 pixels
- **Description:** The game ball sprite

### Player Paddle
- **Filename:** `paddle_player.png`
- **Required size:** 70x10 pixels
- **Description:** The player's paddle sprite (bottom area of screen)

### Enemy Paddle
- **Filename:** `paddle_enemy.png`
- **Required size:** 70x10 pixels
- **Description:** The enemy/opponent paddle sprite (top area of screen)

## Fallback Rendering

If the images are not found, the game will use colored fallbacks:
- Ball: White circle (20x20 pixels)
- Player Paddle: Cyan (#4ecdc4) rectangle with white border (70x10 pixels)
- Enemy Paddle: Red (#ff6b6b) rectangle with white border (70x10 pixels)

## Game Features - Version 0.1.3

- **Version:** 0.1.3 (displayed in top-left corner)
- **Ultra-minimalist Interface:** No game title, only essential elements (version and score)
- **Full-screen:** Game occupies entire screen with no navigation menus
- **Enhanced Paddle Control:** 
  - Player paddle: Responds to mouse immediately after first click
  - Enemy paddle: AI starts moving after game initiation
- **Movement Areas:** 
  - Player paddle: Bottom third of screen (active after game start)
  - Enemy paddle: Top third of screen (AI controlled, active after game start)
- **AI:** Improved opponent AI that continues tracking between points
- **Scoring:** Points awarded when ball exits top or bottom of screen
- **Auto-reset:** Game automatically resets after scoring, paddles remain responsive
- **Physics:** Enhanced collision detection with proper ball bouncing
- **Responsive:** Adapts to different screen sizes while maintaining aspect ratio

## Technical Specifications

- **Canvas Format:** Vertical orientation (4:7 aspect ratio approximately)
- **Frame Rate:** 60 FPS smooth gameplay with continuous paddle updates
- **Input:** Mouse-only control system (click to start, mouse movement for control)
- **Layout:** Ultra-clean full-screen experience with minimal UI elements
- **Paddle Movement:** Enhanced responsiveness - both paddles active after game initiation