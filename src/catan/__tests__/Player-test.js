/* eslint-disable no-new */

jest.disableAutomock();

import Game from '../Game';
import Player from '../Player';
import Edge from '../Edge';
import Corner from '../Corner';
import City from '../pieces/City';
import Road from '../pieces/Road';
import Settlement from '../pieces/Settlement';

let game;
let player;

describe('Player', () => {
	beforeEach(() => {
		game = new Game();
		player = new Player(game, 'test', Player.Color.RED);
	});
	});

	it('constructs with `name` and `color` properties', () => {
		expect(player.name).toEqual('test');
		expect(player.color).toBe(Player.Color.RED);
	});

	it('starts with 15 roads, 5 settlements and 4 cities', () => {
		expect(player.roads.length).toBe(15);
		expect(player.cities.length).toBe(4);
		expect(player.settlements.length).toBe(5);

		expect(player.roads[0]).toEqual(jasmine.any(Road));
		expect(player.cities[0]).toEqual(jasmine.any(City));
		expect(player.settlements[0]).toEqual(jasmine.any(Settlement));
	});

	it('throws an error when constructed with an incorrect `color`', () => {
		expect(() => new Player(game, 'test', undefined)).toThrow();
	});

	it('can place a road by calling `placeRoad`', () => {
		player.placeRoad(1, 4, Edge.Position.WEST);

		// check that the edge on the board was updated
		expect(game.board.getEdge(1, 4, Edge.Position.WEST))
			.toEqual(new Road(player, 1, 4, Edge.Position.WEST));

		// check that the road in the players inventory was updated
		expect(player.roads[0].edge.q).toBe(1);
		expect(player.roads[0].edge.r).toBe(4);
		expect(player.roads[0].edge.position).toBe(Edge.Position.WEST);
	});

	it('can place only 15 roads', () => {

	});

	it('can place a settlement by calling `placeSettlement`', () => {
		player.placeSettlement(2, 3, Corner.Position.LEFT);

		// check that the corner on the board was updated
		expect(game.board.getCorner(2, 3, Corner.Position.LEFT))
			.toEqual(new Settlement(player, 2, 3, Corner.Position.LEFT));

		// check that the settlement in the players inventory was updated
		expect(player.settlements[0].corner.q).toBe(2);
		expect(player.settlements[0].corner.r).toBe(3);
		expect(player.settlements[0].corner.position).toBe(Corner.Position.LEFT);
	});

	it('can place only 5 settlements', () => {

	});

	it('can place a city by calling `placeCity`', () => {
		player.placeCity(1, 2, Corner.Position.RIGHT);

		// check that the corner on the board was updated
		expect(game.board.getCorner(1, 2, Corner.Position.RIGHT))
			.toEqual(new City(player, 1, 2, Corner.Position.RIGHT));

		// check that the city in the players inventory was updated
		expect(player.cities[0].corner.q).toBe(1);
		expect(player.cities[0].corner.r).toBe(2);
		expect(player.cities[0].corner.position).toBe(Corner.Position.RIGHT);
	});

	it('can place only 4 cities', () => {

	});
});
