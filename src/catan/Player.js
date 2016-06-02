export default class Player {
	constructor(name, color) {
		this.name = name;

		// Check if a valid `color` was given.
		if (!(color in Player.Color)) {
			throw new Error(`Invalid color, should one of ${Object.keys(Player.Color)}`);
		}
		this.color = color;
	}
}

Player.Color = {
	RED: 'RED',
	BLUE: 'BLUE',
	WHITE: 'WHITE',
	ORANGE: 'ORANGE',
	GREEN: 'GREEN',
	BROWN: 'BROWN',
};
