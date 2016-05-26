/* eslint-disable no-new */

jest.unmock('../../pieces/Settlement');
jest.unmock('../../Corner');
jest.unmock('../../entities/Player');

import Settlement from '../../pieces/Settlement';
import Corner from '../../Corner';
import Player from '../../entities/Player';

let player;

describe('Settlement', () => {
	beforeEach(() => {
		player = new Player('test', Player.Color.RED);
	});

	xit('constructs with `q`, `r`, `position` and `player` property', () => {
		const settlement = new Settlement(1, 3, Corner.Position.RIGHT, player);

		expect(settlement.q).toBe(1);
		expect(settlement.r).toBe(3);
		expect(settlement.position).toBe(Corner.Position.RIGHT);
		expect(settlement.player).toBe(player);
	});

	it('extends `Corner`', () => {
		const settlement = new Settlement(0, 0, Corner.Position.RIGHT, player);

		expect(settlement instanceof Corner).toBeTruthy();
	});
});
