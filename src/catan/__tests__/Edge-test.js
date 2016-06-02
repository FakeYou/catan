/* eslint-disable no-new */

jest.unmock('../Edge');
jest.unmock('../utils/Location');

import Edge from '../Edge';

describe('Edge', () => {
	it('constructs with `q`, `r` and `position` properties', () => {
		const edge = new Edge(1, 3, Edge.Position.NORTH);

		expect(edge.q).toBe(1);
		expect(edge.r).toBe(3);
		expect(edge.position).toBe(Edge.Position.NORTH);
	});

	it('throws an error when constructed with an incorrect `position`', () => {
		expect(() => new Edge(0, 0, undefined)).toThrow();
	});

	it('has a `key` property', () => {
		expect(new Edge(0, 0, Edge.Position.NORTH).key).toEqual('0,0 N');
		expect(new Edge(-1, 3, Edge.Position.EAST).key).toEqual('-1,3 E');
		expect(new Edge(-8, -10, Edge.Position.WEST).key).toEqual('-8,-10 W');
	});
});
