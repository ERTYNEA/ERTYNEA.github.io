namespace NewAndRetroPong.Game.Core;

/// <summary>
/// Represents a game paddle (player or opponent) with position, dimensions and speed
/// </summary>
public class Paddle
{
	/// <summary>Paddle horizontal position</summary>
	public int X { get; set; }
	
	/// <summary>Paddle vertical position</summary>
	public int Y { get; set; }
	
	/// <summary>Paddle width in pixels</summary>
	public int Width { get; set; }
	
	/// <summary>Paddle height in pixels</summary>
	public int Height { get; set; }
	
	/// <summary>Paddle movement speed (pixels per frame)</summary>
	public int Speed { get; set; }
}