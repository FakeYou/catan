/* eslint-disable no-new */

jest.unmock('../../pieces/Road');
jest.unmock('../../Edge');
jest.unmock('../../Player');
jest.unmock('../../utils/Location');

import Game from '../../Game';
import Edge from '../../Edge';
import Player from '../../Player';
import Road from '../../pieces/Road';

let player;

describe('Road', () => {
	beforeEach(() => {
		player = new Player(new Game(), 'test', Player.Color.RED);
	});

	it('constructs with a `player` property', () => {
		const road = new Road(player);

		expect(road.player).toBe(player);
	});

	it('constructs with an undefined `edge` property when no extra parameters are given', () => {
		const road = new Road(player);

		expect(road.edge).toBeNull();
	});

	it('constructs with a `edge` property when given extra parameters', () => {
		const road = new Road(player, 2, 5, Edge.Position.NORTH);

		expect(road.edge.q).toBe(2);
		expect(road.edge.r).toBe(5);
		expect(road.edge.position).toBe(Edge.Position.NORTH);
	});

	it('has a `setEdge` method', () => {
		const road = new Road(player);

		road.setEdge(5, 8, Edge.Position.EAST);

		expect(road.edge.q).toBe(5);
		expect(road.edge.r).toBe(8);
		expect(road.edge.position).toBe(Edge.Position.EAST);
	});
});
