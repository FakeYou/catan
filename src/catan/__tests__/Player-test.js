/* eslint-disable no-new */

jest.unmock('lodash');
jest.unmock('../Player');

import Game from '../Game';
import Player from '../Player';
import City from '../pieces/City';
import Road from '../pieces/Road';
import Settlement from '../pieces/Settlement';

let game;

describe('Player', () => {
	beforeEach(() => {
		game = new Game();
	});

	it('constructs with `name` and `color` properties', () => {
		const player = new Player(game, 'test', Player.Color.RED);

		expect(player.name).toEqual('test');
		expect(player.color).toBe(Player.Color.RED);
	});

	it('starts with 15 roads, 5 settlements and 4 cities', () => {
		const player = new Player(game, 'test', Player.Color.RED);

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
});
