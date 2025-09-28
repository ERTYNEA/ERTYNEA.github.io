namespace NewAndRetroPong.Game.Core;

/// <summary>
/// Represents the game ball with position, velocity and size
/// </summary>
public class Ball
{
	/// <summary>Ball horizontal position</summary>
	public float X { get; set; }
	
	/// <summary>Ball vertical position</summary>
	public float Y { get; set; }
	
	/// <summary>Horizontal velocity (positive = right, negative = left)</summary>
	public float VelocityX { get; set; }
	
	/// <summary>Vertical velocity (positive = down, negative = up)</summary>
	public float VelocityY { get; set; }
	
	/// <summary>Ball size (diameter) in pixels</summary>
	public int Size { get; set; }
}