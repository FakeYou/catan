/* eslint-disable no-new */

jest.unmock('../Board');
jest.unmock('../Tile');

import Board from '../Board';
import Tile from '../Tile';

let board;
let tiles;

describe('Board', () => {
	beforeEach(() => {
		tiles = [
			new Tile(0, 0, Tile.Resource.DESERT),
			new Tile(0, -1, Tile.Resource.LUMBER, 2),
			new Tile(1, -1, Tile.Resource.WOOL, 3),
			new Tile(1, 0, Tile.Resource.GRAIN, 4),
			new Tile(0, 1, Tile.Resource.BRICK, 5),
			new Tile(-1, 1, Tile.Resource.ORE, 5),
			new Tile(-1, 0, Tile.Resource.WATER),
		];

		board = new Board(tiles);
	});

	it('constructs with `tiles` property', () => {
		expect(board.tiles).toEqual(jasmine.any(Object));
		expect(Object.values(board.tiles).length).toBe(tiles.length);
	});

	it('gives the correct `Tile` when calling `getTile`', () => {
		expect(board.getTile(0, 0)).toBe(tiles[0]);
		expect(board.getTile(0, 1)).toBe(tiles[4]);
	});

	it('gives the correct `Tile` when calling `getTile` with `Tile.getNeighbour`', () => {
		expect(board.getTile(...tiles[0].getNeighbour(Tile.Direction.SOUTH))).toBe(tiles[4]);
	});

	it('gives all tiles with matching `number` property', () => {
		expect(board.getTilesByNumber(5)).toEqual([tiles[4], tiles[5]]);
	});
});
