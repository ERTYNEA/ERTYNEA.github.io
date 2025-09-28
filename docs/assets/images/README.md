# NewAndRetroPong Assets

## Required Images

This game requires the following image assets to be placed in the `wwwroot/assets/images/` directory:

### Ball
- **Filename:** `ball.png`
- **Required size:** 20x20 pixels (base size - scales automatically)
- **Description:** The game ball sprite

### Player Paddle
- **Filename:** `paddle_player.png`
- **Required size:** 70x10 pixels (base size - scales automatically)
- **Description:** The player's paddle sprite (bottom area of screen)

### Enemy Paddle
- **Filename:** `paddle_enemy.png`
- **Required size:** 70x10 pixels (base size - scales automatically)
- **Description:** The enemy/opponent paddle sprite (top area of screen)

## Fallback Rendering

If the images are not found, the game will use colored fallbacks:
- Ball: White circle (scales automatically to screen size)
- Player Paddle: Cyan (#4ecdc4) rectangle with white border (scales automatically)
- Enemy Paddle: Red (#ff6b6b) rectangle with white border (scales automatically)

## Game Features - Version 0.1.4

- **Version:** 0.1.4 (displayed in top-left corner)
- **Ultra-minimalist Interface:** Clean design with essential elements only
- **Full-screen:** Game occupies entire screen with 5px white side borders
- **Responsive Elements:** All game objects scale automatically to screen size
- **Enhanced Paddle Control:** 
  - Player paddle: Responsive mouse control in bottom third
  - Enemy paddle: Smart AI with scaled movement speed
- **Movement Areas:** 
  - Player paddle: Bottom third of screen (scales with canvas)
  - Enemy paddle: Top third of screen (AI controlled, scales with canvas)
- **Advanced AI:** Opponent AI scales movement speed based on screen size
- **Scoring:** Points awarded when ball exits top or bottom of screen
- **Auto-reset:** Game automatically resets after scoring, maintaining responsiveness
- **Physics:** Enhanced collision detection with responsive ball bouncing
- **Responsive Design:** Perfect adaptation to any screen size while maintaining gameplay

## Technical Specifications

- **Canvas Format:** Mobile aspect ratio (9:16 portrait orientation)
- **Responsive System:** Automatic scaling based on screen dimensions
- **Frame Rate:** 60 FPS smooth gameplay with scaled element updates
- **Input:** Mouse-only control system (click to start, mouse movement for control)
- **Layout:** Ultra-clean full-screen experience with white side borders
- **Element Scaling:** All paddles, ball, and speeds scale proportionally
- **Base Configuration:** Optimized for 400x600 canvas, scales to any size
- **Performance:** Maintains smooth gameplay across all device sizes