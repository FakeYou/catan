/* eslint-disable no-new */

jest.unmock('../Tile');

import Tile from '../Tile';

describe('Tile', () => {
	it('constructs with `q`, `r`, `resource` and `number` properties', () => {
		const tile = new Tile(1, 3, Tile.Resources.LUMBER, 8);

		expect(tile.q).toBe(1);
		expect(tile.r).toBe(3);
		expect(tile.resource).toBe(Tile.Resources.LUMBER);
		expect(tile.number).toBe(8);
	});

	it('to throw an error when constructed with an incorrect `number`', () => {
		expect(() => { new Tile(0, 0, Tile.Resources.ORE, 1) }).toThrow();
		expect(() => { new Tile(0, 0, Tile.Resources.ORE, -1) }).toThrow();
		expect(() => { new Tile(0, 0, Tile.Resources.ORE, 7) }).toThrow();
		expect(() => { new Tile(0, 0, Tile.Resources.ORE, 13) }).toThrow();
		expect(() => { new Tile(0, 0, Tile.Resources.ORE, 'hello') }).toThrow();
	});

	it('constructs without `number` for `desert` and `water` resources', () => {
		expect(() => { new Tile(0, 0, Tile.Resources.WATER) }).not.toThrow();
		expect(() => { new Tile(0, 0, Tile.Resources.DESERT) }).not.toThrow();
	});

	it('to throw an error when constructed with an incorrect `resource`', () => {
		expect(() => { new Tile(0, 0, Tile.Resources.UNDEFINED, 1) }).toThrow();
	});

	it('to give correct coords for neighbours', () => {
		const tile = new Tile(2, 0, Tile.Resources.WATER);

		expect(tile.getNeighbour(Tile.Directions.NORTH)).toEqual([2, -1]);
		expect(tile.getNeighbour(Tile.Directions.NORTHEAST)).toEqual([3, -1]);
		expect(tile.getNeighbour(Tile.Directions.SOUTHEAST)).toEqual([3, 0]);
		expect(tile.getNeighbour(Tile.Directions.SOUTH)).toEqual([2, 1]);
		expect(tile.getNeighbour(Tile.Directions.SOUTHWEST)).toEqual([1, 1]);
		expect(tile.getNeighbour(Tile.Directions.NORTHWEST)).toEqual([1, 0]);
	});

	it('to have a `key` property', () => {
		expect(new Tile(0, 0, Tile.Resources.WATER).key).toEqual('0,0');
		expect(new Tile(1, -3, Tile.Resources.WATER).key).toEqual('1,-3');
	});

	it('to have a `key` property that converts the tiles axial coords to cube coords', () => {
		expect(new Tile(0, 0, Tile.Resources.WATER).cube).toEqual([0, 0, 0]);
		expect(new Tile(1, -2, Tile.Resources.WATER).cube).toEqual([1, 1, -2]);
	});
});
