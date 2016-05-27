export default class Tile {
	constructor(q, r, resource, number) {
		this.q = q;
		this.r = r;

		// Check if a valid `resource` was given.
		if (!(resource in Tile.Resource)) {
			throw new Error(`Invalid resource, should be one of ${Object.keys(Tile.Resource)}`);
		}
		this.resource = resource;

		// For all resources except `water` and `desert` check if a valid `number` was given.
		if (resource !== Tile.Resource.WATER && resource !== Tile.Resource.DESERT) {
			if (!Number.isInteger(number) || number < 2 || number > 12 || number === 7) {
				throw new Error('Invalid number');
			}

			this.number = number;
		}
	}

	getNeighbour(direction) {
		switch (direction) {
			case Tile.Direction.NORTH: {
				return [this.q, this.r - 1];
			}
			case Tile.Direction.NORTHEAST: {
				return [this.q + 1, this.r - 1];
			}
			case Tile.Direction.EAST: {
				return [this.q + 2, this.r - 1];
			}
			case Tile.Direction.SOUTHEAST: {
				return [this.q + 1, this.r];
			}
			case Tile.Direction.SOUTH: {
				return [this.q, this.r + 1];
			}
			case Tile.Direction.SOUTHWEST: {
				return [this.q - 1, this.r + 1];
			}
			case Tile.Direction.WEST: {
				return [this.q - 2, this.r + 1];
			}
			case Tile.Direction.NORTHWEST: {
				return [this.q - 1, this.r];
			}
			default: {
				throw new Error(`Unknown direction, should be one of ${Object.keys(Tile.Direction)}`);
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

	get offset() {
		const [x, y, z] = this.cube;
		return [x, z + (x + (x & 1)) / 2];
	}

	static key(q, r) {
		return `${q},${r}`;
	}
}

Tile.Direction = {
	NORTH: 'NORTH',
	NORTHEAST: 'NORTHEAST',
	EAST: 'EAST',
	SOUTHEAST: 'SOUTHEAST',
	SOUTH: 'SOUTH',
	SOUTHWEST: 'SOUTHWEST',
	WEST: 'WEST',
	NORTHWEST: 'NORTHWEST',
};

Tile.Resource = {
	FOREST: 'FOREST',
	PASTURE: 'PASTURE',
	FIELD: 'FIELD',
	HILL: 'HILL',
	MOUNTAIN: 'MOUNTAIN',
	DESERT: 'DESERT',
	WATER: 'WATER',
};
