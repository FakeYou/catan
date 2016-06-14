/* eslint-disable no-new */

jest.disableAutomock();

import Game from '../Game';
import Board from '../Board';
import Tile from '../Tile';
import Edge from '../Edge';
import Corner from '../Corner';
import Player from '../Player';
import Road from '../pieces/Road';

let game;
let board;
let tiles;
let player;

describe('Board', () => {
	beforeEach(() => {
		game = new Game();
		player = new Player(null, 'test', Player.Color.RED);
		board = Board.generateBeginnerBoard(game);

		game.board = board;
		game.addPlayer(player);
	});

	it('constructs with a `tiles` property', () => {
		expect(board.tiles).toEqual(jasmine.any(Object));
		expect(Object.values(board.tiles).length).toBe(37);
	});

	it('gives the correct `Tile` when calling `getTile`', () => {
		expect(board.getTile(3, 6)).toEqual(new Tile(3, 6, Tile.Terrain.WATER));
		expect(board.getTile(3, 3)).toEqual(new Tile(3, 3, Tile.Terrain.DESERT));
	});

	it('gives the correct `Edge` when calling `getEdge`', () => {
		expect(board.getEdge(5, 2, Edge.Position.NORTH)).toBe(Object.values(board.edges)[13]);
		expect(board.getEdge(3, 3, Edge.Position.WEST)).toBe(Object.values(board.edges)[38]);
	});

	it('gives the correct `Corner` when calling `getCorner`', () => {
		expect(board.getCorner(2, 2, Corner.Position.RIGHT)).toBe(Object.values(board.corners)[5]);
		expect(board.getCorner(4, 2, Corner.Position.LEFT)).toBe(Object.values(board.corners)[18]);
	});

	it('gives the correct `Tile` when calling `getTile` with `Tile.getNeighbour`', () => {
		expect(board.getTile(...board.getTile(3, 4).getNeighbour(Tile.Direction.SOUTH))).toBe(board.getTile(3, 5));
	});

	it('gives all tiles with matching `number` property', () => {
		expect(board.getTilesByNumber(5)).toEqual([
			board.getTile(5, 2),
			board.getTile(3, 5),
		]);
	});

	xit('has a method `placeRoad`', () => {
		expect(board.placeRoad(0, 0, Edge.Position.NORTH, player)).toBe(true);

		expect(board.getEdge(0, 0, Edge.Position.NORTH))
			.toEqual(new Road(player, 0, 0, Edge.Position.NORTH));
	});

	describe('placeRoad', () => {
		it('throws an error when placed between two water tiles', () => {
			expect(() => board.placeRoad(1, 6, Edge.Position.EAST)).toThrow();
		});

		it('throws an error when placed on another road', () => {
			let road = new Road(player, 3, 3, Edge.Position.NORTH);
			board.edges[road.key] = road;

			expect(() => board.placeRoad(3, 3, Edge.Position.NORTH)).toThrow();
		});

		xit('throws an error when placed without any connections', () => {
			expect(() => board.placeRoad(2, 2, Edge.Position.WEST)).toThrow();
		});

	})
});
