/* eslint-disable no-new */

jest.disableAutomock();

import Board from '../Board';
import Tile from '../Tile';
import Edge from '../Edge';
import Corner from '../Corner';
import Player from '../Player';
import Road from '../pieces/Road';

let board;
let tiles;
let player;

describe('Board', () => {
	beforeEach(() => {
		tiles = [
			new Tile(0, 0, Tile.Terrain.DESERT),
			new Tile(0, -1, Tile.Terrain.FOREST, 2),
			new Tile(1, -1, Tile.Terrain.PASTURE, 3),
			new Tile(1, 0, Tile.Terrain.FIELD, 4),
			new Tile(0, 1, Tile.Terrain.HILL, 5),
			new Tile(-1, 1, Tile.Terrain.MOUNTAIN, 5),
			new Tile(-1, 0, Tile.Terrain.WATER),
		];

		board = new Board(tiles);
		player = new Player(null, 'test', Player.Color.RED);
	});

	it('constructs with a `tiles` property', () => {
		expect(board.tiles).toEqual(jasmine.any(Object));
		expect(Object.values(board.tiles).length).toBe(tiles.length);
	});

	it('gives the correct `Tile` when calling `getTile`', () => {
		expect(board.getTile(0, 0)).toBe(tiles[0]);
		expect(board.getTile(0, 1)).toBe(tiles[4]);
	});

	it('gives the correct `Edge` when calling `getEdge`', () => {
		expect(board.getEdge(0, 0, Edge.Position.NORTH)).toBe(Object.values(board.edges)[0]);
		expect(board.getEdge(2, -1, Edge.Position.WEST)).toBe(Object.values(board.edges)[14]);
	});

	it('gives the correct `Corner` when calling `getCorner`', () => {
		expect(board.getCorner(0, 0, Corner.Position.RIGHT)).toBe(Object.values(board.corners)[0]);
		expect(board.getCorner(0, -1, Corner.Position.LEFT)).toBe(Object.values(board.corners)[7]);
	});

	it('gives the correct `Tile` when calling `getTile` with `Tile.getNeighbour`', () => {
		expect(board.getTile(...tiles[0].getNeighbour(Tile.Direction.SOUTH))).toBe(tiles[4]);
	});

	it('gives all tiles with matching `number` property', () => {
		expect(board.getTilesByNumber(5)).toEqual([tiles[4], tiles[5]]);
	});

	xit('has a method `placeRoad`', () => {
		expect(board.placeRoad(0, 0, Edge.Position.NORTH, player)).toBe(true);

		expect(board.getEdge(0, 0, Edge.Position.NORTH))
			.toEqual(new Road(player, 0, 0, Edge.Position.NORTH));
	});
});
