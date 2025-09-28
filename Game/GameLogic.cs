using System;

namespace NewAndRetroPong.Game
{
	public class GameLogic
	{
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
		public string Version { get; private set; } = "0.1.3";
		
		// Game configuration
		private const int PADDLE_WIDTH = 70;
		private const int PADDLE_HEIGHT = 10;
		private const int BALL_SIZE = 20;
		private const int PADDLE_SPEED = 4;
		private const int BALL_SPEED = 5;
		
		// Mouse tracking
		public float MouseX { get; private set; }
		public float MouseY { get; private set; }
		
		public GameLogic()
		{
			InitializeGame();
		}
		
		public void InitializeGame()
		{
			CanvasWidth = 400;
			CanvasHeight = 600;
			
			Ball = new Ball
			{
				X = CanvasWidth / 2.0f,
				Y = CanvasHeight / 2.0f,
				VelocityX = 0,
				VelocityY = 0,
				Size = BALL_SIZE
			};
			
			PlayerPaddle = new Paddle
			{
				X = (CanvasWidth - PADDLE_WIDTH) / 2,
				Y = CanvasHeight - CanvasHeight / 3 + (CanvasHeight / 3 - PADDLE_HEIGHT) / 2,
				Width = PADDLE_WIDTH,
				Height = PADDLE_HEIGHT,
				Speed = PADDLE_SPEED
			};
			
			OpponentPaddle = new Paddle
			{
				X = (CanvasWidth - PADDLE_WIDTH) / 2,
				Y = CanvasHeight / 3 / 2 - PADDLE_HEIGHT / 2,
				Width = PADDLE_WIDTH,
				Height = PADDLE_HEIGHT,
				Speed = PADDLE_SPEED
			};
			
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
			
			if (!IsGameStarted)
			{
				Ball.X = width / 2.0f;
				Ball.Y = height / 2.0f;
				PlayerPaddle.X = (width - PADDLE_WIDTH) / 2;
				OpponentPaddle.X = (width - PADDLE_WIDTH) / 2;
			}
			
			PlayerPaddle.Y = height - height / 3 + (height / 3 - PADDLE_HEIGHT) / 2;
			OpponentPaddle.Y = height / 3 / 2 - PADDLE_HEIGHT / 2;
			
			if (MouseX == 0) MouseX = width / 2.0f;
			if (MouseY == 0) MouseY = height * 2.0f / 3.0f;
		}
		
		public void StartGame()
		{
			IsGameRunning = true;
			IsGameStarted = true;
			IsBallPaused = false;
			
			Random random = new Random();
			float angle = (random.NextSingle() - 0.5f) * (float)Math.PI / 4;
			Ball.VelocityX = BALL_SPEED * (float)Math.Sin(angle);
			Ball.VelocityY = BALL_SPEED * (float)Math.Cos(angle) * (random.Next(2) == 0 ? 1 : -1);
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
			int newX = (int)(MouseX - PADDLE_WIDTH / 2);
			PlayerPaddle.X = Math.Max(0, Math.Min(CanvasWidth - PADDLE_WIDTH, newX));
			
			int bottomThirdStart = CanvasHeight * 2 / 3;
			int bottomThirdEnd = CanvasHeight;
			int newY = (int)(MouseY - PADDLE_HEIGHT / 2);
			PlayerPaddle.Y = Math.Max(bottomThirdStart, Math.Min(bottomThirdEnd - PADDLE_HEIGHT, newY));
		}
		
		public void UpdateGame()
		{
			UpdateOpponentAI();
			
			if (!IsGameRunning) return;
			
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
				float hitPos = (Ball.X - (OpponentPaddle.X + OpponentPaddle.Width / 2)) / (OpponentPaddle.Width / 2);
				Ball.VelocityX += hitPos * 1.5f;
				Ball.Y = OpponentPaddle.Y + OpponentPaddle.Height + Ball.Size / 2;
			}
			
			// Scoring
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
			
			float targetX = Ball.X - OpponentPaddle.Width / 2;
			float currentX = OpponentPaddle.X;
			float distance = targetX - currentX;
			
			if (Math.Abs(distance) > 2)
			{
				if (distance > 0)
					OpponentPaddle.X = Math.Min(CanvasWidth - OpponentPaddle.Width, (int)(currentX + OpponentPaddle.Speed));
				else
					OpponentPaddle.X = Math.Max(0, (int)(currentX - OpponentPaddle.Speed));
			}
		}
	}
	
	public class Ball
	{
		public float X { get; set; }
		public float Y { get; set; }
		public float VelocityX { get; set; }
		public float VelocityY { get; set; }
		public int Size { get; set; }
	}
	
	public class Paddle
	{
		public int X { get; set; }
		public int Y { get; set; }
		public int Width { get; set; }
		public int Height { get; set; }
		public int Speed { get; set; }
	}
}