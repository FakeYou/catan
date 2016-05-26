/* eslint-disable no-new */

jest.unmock('../../pieces/Road');
jest.unmock('../../Edge');
jest.unmock('../../entities/Player');

import Road from '../../pieces/Road';
import Edge from '../../Edge';
import Player from '../../entities/Player';

let player;

describe('Road', () => {
	beforeEach(() => {
		player = new Player('test', Player.Color.RED);
	});

	it('constructs with `q`, `r`, `position` and `player` property', () => {
		const road = new Road(1, 3, Edge.Position.NORTH, player);

		expect(road.q).toBe(1);
		expect(road.r).toBe(3);
		expect(road.position).toBe(Edge.Position.NORTH);
		expect(road.player).toBe(player);
	});

	it('extends `Edge`', () => {
		const road = new Road(0, 0, Edge.Position.NORTH, player);

		expect(road instanceof Edge).toBeTruthy();
	});
});
