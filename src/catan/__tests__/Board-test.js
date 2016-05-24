jest.unmock('../Board');
jest.unmock('../Tile');

import Board from '../Board';
import Tile from '../Tile';

let board;
let tiles;

describe('Board', () => {
	beforeEach(() => {
		tiles = [
			new Tile(0, 0, 0, Tile.Resources.DESERT),
			new Tile(0, 1, -1, Tile.Resources.LUMBER, 2),
			new Tile(1, 0, -1, Tile.Resources.WOOL, 3),
			new Tile(1, -1, 0, Tile.Resources.GRAIN, 4),
			new Tile(0, -1, 1, Tile.Resources.BRICK, 5),
			new Tile(-1, 0, 1, Tile.Resources.ORE, 5),
			new Tile(-1, 1, 0, Tile.Resources.WATER),
		];

		board = new Board(tiles);
	})

	it('constructs with `tiles` property', () => {
		expect(board.tiles).toEqual(jasmine.any(Object));
		expect(Object.values(board.tiles).length).toBe(tiles.length);
	});

	it('gives the correct `Tile` when calling `getTile`', () => {
		expect(board.getTile(0, 0, 0)).toBe(tiles[0]);
		expect(board.getTile(0, -1, 1)).toBe(tiles[4]);
	});

	it('gives the correct `Tile` when calling `getTile` with `Tile.getNeighbour`', () => {
		expect(board.getTile(...tiles[0].getNeighbour(Tile.Directions.SOUTH))).toBe(tiles[4]);
	});

	it('gives all tiles with matching `number` property', () => {
		expect(board.getTilesByNumber(5)).toEqual([tiles[4], tiles[5]]);
	})
})