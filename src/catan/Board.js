import Tile from './Tile';

export default class Board {
	constructor(tiles = []) {
		this.tiles = {};

		tiles.forEach((tile) => {
			this.tiles[tile.key] = tile;
		})
	}

	getTile(x, y, z) {
		const key = Tile.key(x, y, z);

		return this.tiles[key];
	}
}