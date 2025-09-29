namespace NewAndRetroPong.Game.Core;

/// <summary>
/// Represents different referee states to control which referee image to display
/// </summary>
public enum RefereeState
{
	/// <summary>
	/// Neutral state - shows referee_neutral.png (default state)
	/// </summary>
	Neutral,
	
	/// <summary>
	/// Player scored state - shows referee_player.png
	/// </summary>
	PlayerScored,
	
	/// <summary>
	/// Opponent scored state - shows referee_enemy.png
	/// </summary>
	OpponentScored
}