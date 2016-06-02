/* eslint-disable no-new */

jest.unmock('../../pieces/Settlement');
jest.unmock('../../Corner');
jest.unmock('../../Player');
jest.unmock('../../utils/Location');

import Settlement from '../../pieces/Settlement';
import Corner from '../../Corner';
import Player from '../../Player';

let player;

describe('Settlement', () => {
	beforeEach(() => {
		player = new Player('test', Player.Color.RED);
	});

	it('constructs with a `player` property', () => {
		const settlement = new Settlement(player);

		expect(settlement.player).toBe(player);
	});

	it('constructs with an undefined `corner` property when no extra parameters are given', () => {
		const settlement = new Settlement(player);

		expect(settlement.corner).toBeNull();
	});

	it('constructs with a `corner` property when given extra parameters', () => {
		const settlement = new Settlement(player, 2, 5, Corner.Position.LEFT);

		expect(settlement.corner.q).toBe(2);
		expect(settlement.corner.r).toBe(5);
		expect(settlement.corner.position).toBe(Corner.Position.LEFT);
	});

	it('has a `setCorner` method', () => {
		const settlement = new Settlement(player);

		settlement.setCorner(5, 8, Corner.Position.RIGHT);

		expect(settlement.corner.q).toBe(5);
		expect(settlement.corner.r).toBe(8);
		expect(settlement.corner.position).toBe(Corner.Position.RIGHT);
	});
});
