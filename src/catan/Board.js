import Tile from './Tile';

export default class Board {
	constructor(tiles = []) {
		this.tiles = {};
		this.roads = {};

		tiles.forEach((tile) => {
			this.tiles[tile.key] = tile;
		});
	}

	getTile(q, r) {
		const key = Tile.key(q, r);

		return this.tiles[key];
	}

	getTilesByNumber(number) {
		return Object.values(this.tiles).filter(tile => tile.number === number);
	}
}
