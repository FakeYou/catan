import { times } from 'lodash';

import City from './pieces/City';
import Road from './pieces/Road';
import Settlement from './pieces/Settlement';

export default class Player {
	constructor(game, name, color) {
		this.game = game;
		this.name = name;

		// Check if a valid `color` was given.
		if (!(color in Player.Color)) {
			throw new Error(`Invalid color, should one of ${Object.keys(Player.Color)}`);
		}
		this.color = color;

		this.cities = times(4, () => new City(this));
		this.roads = times(15, () => new Road(this));
		this.settlements = times(5, () => new Settlement(this));
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
