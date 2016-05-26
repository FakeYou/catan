/* eslint-disable no-new */

jest.unmock('../../pieces/City');
jest.unmock('../../Corner');
jest.unmock('../../entities/Player');

import City from '../../pieces/City';
import Corner from '../../Corner';
import Player from '../../entities/Player';

let player;

describe('City', () => {
	beforeEach(() => {
		player = new Player('test', Player.Color.RED);
	});

	it('constructs with `q`, `r`, `position` and `player` property', () => {
		const city = new City(1, 3, Corner.Position.RIGHT, player);

		expect(city.q).toBe(1);
		expect(city.r).toBe(3);
		expect(city.position).toBe(Corner.Position.RIGHT);
		expect(city.player).toBe(player);
	});

	it('extends `Corner`', () => {
		const city = new City(0, 0, Corner.Position.RIGHT, player);

		expect(city instanceof Corner).toBeTruthy();
	});
});
