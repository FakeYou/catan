/* eslint-disable no-new */

jest.unmock('../../pieces/City');
jest.unmock('../../Corner');
jest.unmock('../../Player');
jest.unmock('../../utils/Location');

import Game from '../../Game';
import Corner from '../../Corner';
import Player from '../../Player';
import City from '../../pieces/City';

let player;

describe('City', () => {
	beforeEach(() => {
		player = new Player(new Game(), 'test', Player.Color.RED);
	});

	it('constructs with a `player` property', () => {
		const city = new City(player);

		expect(city.player).toBe(player);
	});

	it('constructs with an undefined `corner` property when no extra parameters are given', () => {
		const city = new City(player);

		expect(city.corner).toBeNull();
	});

	it('constructs with a `corner` property when given extra parameters', () => {
		const city = new City(player, 2, 5, Corner.Position.LEFT);

		expect(city.corner.q).toBe(2);
		expect(city.corner.r).toBe(5);
		expect(city.corner.position).toBe(Corner.Position.LEFT);
	});

	it('has a `setCorner` method', () => {
		const city = new City(player);

		city.setCorner(5, 8, Corner.Position.RIGHT);

		expect(city.corner.q).toBe(5);
		expect(city.corner.r).toBe(8);
		expect(city.corner.position).toBe(Corner.Position.RIGHT);
	});
});
