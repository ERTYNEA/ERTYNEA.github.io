namespace NewAndRetroPong.Game.Core;

using System;

public class GameLogic
{
	// Canvas dimensions
	public int CanvasWidth { get; private set; }
	public int CanvasHeight { get; private set; }
	
	// Game objects
	public Ball Ball { get; private set; } = null!;
	public Paddle PlayerPaddle { get; private set; } = null!;
	public Paddle OpponentPaddle { get; private set; } = null!;
	
	// Game state
	public bool IsGameRunning { get; private set; }
	public bool IsGameStarted { get; private set; }
	public bool IsBallPaused { get; private set; } = true;
	public int PlayerScore { get; private set; }
	public int OpponentScore { get; private set; }
	public string Version { get; private set; } = "0.1.5";
	
	// Base configuration for 400x600 canvas (used as reference for scaling)
	private const int BASE_CANVAS_WIDTH = 400;
	private const int BASE_CANVAS_HEIGHT = 600;
	private const int BASE_PADDLE_WIDTH = 70;
	private const int BASE_PADDLE_HEIGHT = 10;
	private const int BASE_BALL_SIZE = 20;
	private const int BASE_PADDLE_SPEED = 4;
	private const int BASE_BALL_SPEED = 5;
	
	// Responsive configuration - automatically calculated based on canvas size
	private int ResponsivePaddleWidth => (int)(BASE_PADDLE_WIDTH * ScaleFactor);
	private int ResponsivePaddleHeight => (int)(BASE_PADDLE_HEIGHT * ScaleFactor);
	private int ResponsiveBallSize => (int)(BASE_BALL_SIZE * ScaleFactor);
	private int ResponsivePaddleSpeed => Math.Max(1, (int)(BASE_PADDLE_SPEED * ScaleFactor));
	private int ResponsiveBallSpeed => Math.Max(1, (int)(BASE_BALL_SPEED * ScaleFactor));
	
	// Scale factor based on ratio between current canvas and base canvas
	private float ScaleFactor => Math.Min((float)CanvasWidth / BASE_CANVAS_WIDTH, (float)CanvasHeight / BASE_CANVAS_HEIGHT);
	
	// Mouse tracking
	public float MouseX { get; private set; }
	public float MouseY { get; private set; }
	
	public GameLogic()
	{
		InitializeGame();
	}
	
	public void InitializeGame()
	{
		CanvasWidth = BASE_CANVAS_WIDTH;
		CanvasHeight = BASE_CANVAS_HEIGHT;
		
		// Initialize ball at center
		Ball = new Ball
		{
			X = CanvasWidth / 2.0f,
			Y = CanvasHeight / 2.0f,
			VelocityX = 0,
			VelocityY = 0,
			Size = ResponsiveBallSize
		};
		
		// Player paddle (bottom third)
		PlayerPaddle = new Paddle
		{
			X = (CanvasWidth - ResponsivePaddleWidth) / 2,
			Y = CanvasHeight - CanvasHeight / 3 + (CanvasHeight / 3 - ResponsivePaddleHeight) / 2,
			Width = ResponsivePaddleWidth,
			Height = ResponsivePaddleHeight,
			Speed = ResponsivePaddleSpeed
		};
		
		// Opponent paddle (top third)
		OpponentPaddle = new Paddle
		{
			X = (CanvasWidth - ResponsivePaddleWidth) / 2,
			Y = CanvasHeight / 3 / 2 - ResponsivePaddleHeight / 2,
			Width = ResponsivePaddleWidth,
			Height = ResponsivePaddleHeight,
			Speed = ResponsivePaddleSpeed
		};
		
		// Reset scores only on first initialization
		if (!IsGameStarted)
		{
			PlayerScore = 0;
			OpponentScore = 0;
		}
		
		IsGameRunning = false;
		IsGameStarted = false;
		IsBallPaused = true;
		MouseX = CanvasWidth / 2.0f;
		MouseY = CanvasHeight * 2.0f / 3.0f;
	}
	
	public void SetCanvasSize(int width, int height)
	{
		CanvasWidth = width;
		CanvasHeight = height;
		
		// Update element sizes based on new canvas size
		Ball.Size = ResponsiveBallSize;
		PlayerPaddle.Width = ResponsivePaddleWidth;
		PlayerPaddle.Height = ResponsivePaddleHeight;
		PlayerPaddle.Speed = ResponsivePaddleSpeed;
		OpponentPaddle.Width = ResponsivePaddleWidth;
		OpponentPaddle.Height = ResponsivePaddleHeight;
		OpponentPaddle.Speed = ResponsivePaddleSpeed;
		
		// Reposition elements if game hasn't started
		if (!IsGameStarted)
		{
			Ball.X = width / 2.0f;
			Ball.Y = height / 2.0f;
			PlayerPaddle.X = (width - ResponsivePaddleWidth) / 2;
			OpponentPaddle.X = (width - ResponsivePaddleWidth) / 2;
		}
		
		// Adjust paddle Y positions (always adjusted)
		PlayerPaddle.Y = height - height / 3 + (height / 3 - ResponsivePaddleHeight) / 2;
		OpponentPaddle.Y = height / 3 / 2 - ResponsivePaddleHeight / 2;
		
		if (MouseX == 0) MouseX = width / 2.0f;
		if (MouseY == 0) MouseY = height * 2.0f / 3.0f;
	}
	
	public void StartGame()
	{
		IsGameRunning = true;
		IsGameStarted = true;
		IsBallPaused = false;
		
		// Generate random angle for ball
		Random random = new Random();
		float angle = (random.NextSingle() - 0.5f) * (float)Math.PI / 4;
		Ball.VelocityX = ResponsiveBallSpeed * (float)Math.Sin(angle);
		Ball.VelocityY = ResponsiveBallSpeed * (float)Math.Cos(angle) * (random.Next(2) == 0 ? 1 : -1);
	}
	
	public void ResetGameForNextPoint()
	{
		Ball.X = CanvasWidth / 2.0f;
		Ball.Y = CanvasHeight / 2.0f;
		Ball.VelocityX = 0;
		Ball.VelocityY = 0;
		IsGameRunning = false;
		IsBallPaused = true;
		// Keep IsGameStarted = true to maintain paddle control
	}
	
	public bool CanStartGame()
	{
		return !IsGameStarted || IsBallPaused;
	}
	
	public void UpdateMousePosition(float mouseX, float mouseY)
	{
		MouseX = mouseX;
		MouseY = mouseY;
		
		if (IsGameStarted)
		{
			UpdatePlayerPaddlePosition();
		}
	}
	
	private void UpdatePlayerPaddlePosition()
	{
		// Center paddle on mouse X position
		int newX = (int)(MouseX - ResponsivePaddleWidth / 2);
		PlayerPaddle.X = Math.Max(0, Math.Min(CanvasWidth - ResponsivePaddleWidth, newX));
		
		// Restrict Y movement to bottom third
		int bottomThirdStart = CanvasHeight * 2 / 3;
		int bottomThirdEnd = CanvasHeight;
		int newY = (int)(MouseY - ResponsivePaddleHeight / 2);
		PlayerPaddle.Y = Math.Max(bottomThirdStart, Math.Min(bottomThirdEnd - ResponsivePaddleHeight, newY));
	}
	
	public void UpdateGame()
	{
		UpdateOpponentAI();
		
		if (!IsGameRunning) return;
		
		// Update ball position
		Ball.X += Ball.VelocityX;
		Ball.Y += Ball.VelocityY;
		
		// Side wall collisions
		if (Ball.X <= Ball.Size / 2 || Ball.X >= CanvasWidth - Ball.Size / 2)
		{
			Ball.VelocityX = -Ball.VelocityX;
			Ball.X = Math.Max(Ball.Size / 2, Math.Min(CanvasWidth - Ball.Size / 2, Ball.X));
		}
		
		// Player paddle collision
		if (Ball.Y + Ball.Size / 2 >= PlayerPaddle.Y &&
			Ball.Y - Ball.Size / 2 <= PlayerPaddle.Y + PlayerPaddle.Height &&
			Ball.X + Ball.Size / 2 >= PlayerPaddle.X &&
			Ball.X - Ball.Size / 2 <= PlayerPaddle.X + PlayerPaddle.Width &&
			Ball.VelocityY > 0)
		{
			Ball.VelocityY = -Math.Abs(Ball.VelocityY);
			// Angle effect based on where it hits the paddle
			float hitPos = (Ball.X - (PlayerPaddle.X + PlayerPaddle.Width / 2)) / (PlayerPaddle.Width / 2);
			Ball.VelocityX += hitPos * 1.5f;
			Ball.Y = PlayerPaddle.Y - Ball.Size / 2;
		}
		
		// Opponent paddle collision
		if (Ball.Y - Ball.Size / 2 <= OpponentPaddle.Y + OpponentPaddle.Height &&
			Ball.Y + Ball.Size / 2 >= OpponentPaddle.Y &&
			Ball.X + Ball.Size / 2 >= OpponentPaddle.X &&
			Ball.X - Ball.Size / 2 <= OpponentPaddle.X + OpponentPaddle.Width &&
			Ball.VelocityY < 0)
		{
			Ball.VelocityY = Math.Abs(Ball.VelocityY);
			// Angle effect based on where it hits the paddle
			float hitPos = (Ball.X - (OpponentPaddle.X + OpponentPaddle.Width / 2)) / (OpponentPaddle.Width / 2);
			Ball.VelocityX += hitPos * 1.5f;
			Ball.Y = OpponentPaddle.Y + OpponentPaddle.Height + Ball.Size / 2;
		}
		
		// Scoring system
		if (Ball.Y < -Ball.Size)
		{
			PlayerScore++;
			ResetGameForNextPoint();
		}
		else if (Ball.Y > CanvasHeight + Ball.Size)
		{
			OpponentScore++;
			ResetGameForNextPoint();
		}
	}
	
	private void UpdateOpponentAI()
	{
		if (!IsGameStarted) return;
		
		// Simple AI: follow the ball
		float targetX = Ball.X - OpponentPaddle.Width / 2;
		float currentX = OpponentPaddle.X;
		float distance = targetX - currentX;
		
		// Move towards ball if distance is significant
		if (Math.Abs(distance) > 2)
		{
			if (distance > 0)
				OpponentPaddle.X = Math.Min(CanvasWidth - OpponentPaddle.Width, (int)(currentX + OpponentPaddle.Speed));
			else
				OpponentPaddle.X = Math.Max(0, (int)(currentX - OpponentPaddle.Speed));
		}
	}
}