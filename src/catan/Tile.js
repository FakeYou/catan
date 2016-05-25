export default class Tile {
	constructor(q, r, resource, number) {
		this.q = q;
		this.r = r;

		// Check if a valid `resource` was given.
		if (!(resource in Tile.Resources)) {
			throw new Error('Invalid resource');
		}
		this.resource = resource;

		// For all resources except `water` and `desert` check if a valid `number` was given.
		if (resource !== Tile.Resources.WATER && resource !== Tile.Resources.DESERT) {
			if (!Number.isInteger(number) || number < 2 || number > 12 || number === 7) {
				throw new Error('Invalid number');
			}

			this.number = number;
		}
	}

	getNeighbour(direction) {
		switch (direction) {
			case Tile.Directions.NORTH: {
				return [this.q, this.r - 1];
			}
			case Tile.Directions.NORTHEAST: {
				return [this.q + 1, this.r - 1];
			}
			case Tile.Directions.SOUTHEAST: {
				return [this.q + 1, this.r];
			}
			case Tile.Directions.SOUTH: {
				return [this.q, this.r + 1];
			}
			case Tile.Directions.SOUTHWEST: {
				return [this.q - 1, this.r + 1];
			}
			case Tile.Directions.NORTHWEST: {
				return [this.q - 1, this.r];
			}
			default: {
				return [0, 0];
			}
		}
	}

	get key() {
		return Tile.key(this.q, this.r);
	}

	get cube() {
		// For the `y` value when `q` and `r` are both `0` the resulting `y` would be `-0`.
		// To prevent this behaviour and always return a postive zero we use `-q - z + 0`.
		return [this.q, -this.q - this.r + 0, this.r];
	}

	static key(q, r) {
		return `${q},${r}`;
	}
}

Tile.Directions = {
	NORTH: 'NORTH',
	NORTHEAST: 'NORTHEAST',
	SOUTHEAST: 'SOUTHEAST',
	SOUTH: 'SOUTH',
	SOUTHWEST: 'SOUTHWEST',
	NORTHWEST: 'NORTHWEST',
};

Tile.Resources = {
	LUMBER: 'LUMBER',
	WOOL: 'WOOL',
	GRAIN: 'GRAIN',
	BRICK: 'BRICK',
	ORE: 'ORE',
	DESERT: 'DESERT',
	WATER: 'WATER',
};
