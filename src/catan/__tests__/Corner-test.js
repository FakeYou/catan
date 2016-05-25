/* eslint-disable no-new */

jest.unmock('../Corner');

import Corner from '../Corner';

describe('Corner', () => {
	it('constructs with `q`, `r` and `position` property', () => {
		const edge = new Corner(1, 3, Corner.Position.RIGHT);

		expect(edge.q).toBe(1);
		expect(edge.r).toBe(3);
		expect(edge.position).toBe(Corner.Position.RIGHT);
	});

	it('throws an error when constructed with an incorrect `position`', () => {
		expect(() => new Corner(0, 0, undefined)).toThrow();
	});

	it('has a `key` property', () => {
		expect(new Corner(0, 0, Corner.Position.RIGHT).key).toEqual('0,0 R');
		expect(new Corner(-8, -10, Corner.Position.LEFT).key).toEqual('-8,-10 L');
	});
});
