/* eslint-disable no-new */

jest.unmock('../Player');

import Player from '../Player';

describe('Player', () => {
	xit('constructs with `name` and `color` property', () => {
		const player = new Player('test', Player.Color.RED);

		expect(player.name).toEqual('test');
		expect(player.r).toBe(Player.Color.RED);
	});

	it('throws an error when constructed with an incorrect `color`', () => {
		expect(() => new Player('test', undefined)).toThrow();
	});
});
