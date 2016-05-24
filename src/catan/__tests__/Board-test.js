jest.unmock('../Board');
jest.unmock('../Tile');

import Board from '../Board';
import Tile from '../Tile';

describe('Board', () => {
	it('constructs with `tiles` property', () => {
		const board = new Board([
			new Tile(0, 0, 0, Tile.Resources.WATER)
		]);

		expect(board.tiles).toEqual(jasmine.any(Object));
		expect(Object.values(board.tiles).length).toBe(1);
	});

	it('gives the correct `Tile` when using `getTile`', () => {
		const tile = new Tile(3, 2, 1, Tile.Resources.WATER);

		const board = new Board([tile]);

		expect(board.getTile(3, 2, 1)).toBe(tile);
	});

	it('gives the correct `Tile` when using `getTile` with `Tile.getNeighbour`', () => {
		const center = new Tile(0, 0, 0, Tile.Resources.WATER);
		const south = new Tile(0, -1, 1, Tile.Resources.WATER);

		const board = new Board([center, south]);

		expect(board.getTile(...center.getNeighbour(Tile.Directions.SOUTH))).toBe(south);
	})
})