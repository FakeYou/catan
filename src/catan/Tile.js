export default class Tile {
	constructor(x, y, z, resource, number) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.resource = resource;
		this.number = number;
	}

	neighbour(direction) {
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