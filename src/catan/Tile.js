export default class Tile {
	constructor(x, y, z, resource, number) {
		this.x = x;
		this.y = y;
		this.z = z;

		// Check if a valid `resource` was given.
		if(!(resource in Tile.Resources)) {
			throw new Error('Invalid resource');
		}
		this.resource = resource;

		// For all resources except `water` and `desert` check if a valid `number` was given.
		if(resource !== Tile.Resources.WATER && resource !== Tile.Resources.DESERT) {
			if(!Number.isInteger(number) || number < 2 || number > 12 || number === 7) {
				throw new Error('Invalid number');
			}

			this.number = number;
		}
	}

	getNeighbour(direction) {
		switch(direction) {
			case Tile.Directions.NORTH:
				return [this.x, this.y + 1, this.z - 1];
			case Tile.Directions.NORTHEAST:
				return [this.x + 1, this.y, this.z - 1];
			case Tile.Directions.SOUTHEAST:
				return [this.x + 1, this.y - 1, this.z];
			case Tile.Directions.SOUTH:
				return [this.x, this.y - 1, this.z + 1];
			case Tile.Directions.SOUTHWEST:
				return [this.x - 1, this.y, this.z + 1];
			case Tile.Directions.NORTHWEST:
				return [this.x - 1, this.y + 1, this.z];
		}
	}

	get key() {
		return Tile.key(this.x, this.y, this.z);
	}

	static key(x, y, z) {
		return x.toString() + ',' + y.toString() + ',' + z.toString();
	}
}

Tile.Directions = {
	NORTH: 'NORTH',
	NORTHEAST: 'NORTHEAST',
	SOUTHEAST: 'SOUTHEAST',
	SOUTH: 'SOUTH',
	SOUTHWEST: 'SOUTHWEST',
	NORTHWEST: 'NORTHWEST'
}

Tile.Resources = {
	LUMBER : 'LUMBER',
	WOOL   : 'WOOL',
	GRAIN  : 'GRAIN',
	BRICK  : 'BRICK',
	ORE    : 'ORE',
	DESERT : 'DESERT',
	WATER  : 'WATER'
}