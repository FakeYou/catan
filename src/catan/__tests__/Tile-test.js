/* eslint-disable no-new */

jest.unmock('../Tile');
jest.unmock('../utils/Location');

import Tile from '../Tile';

describe('Tile', () => {
	it('constructs with `q`, `r`, `resource` and `number` properties', () => {
		const tile = new Tile(1, 3, Tile.Terrain.FOREST, 8);

		expect(tile.q).toBe(1);
		expect(tile.r).toBe(3);
		expect(tile.resource).toBe(Tile.Terrain.FOREST);
		expect(tile.number).toBe(8);
	});

	it('throws an error when constructed with an incorrect `number`', () => {
		expect(() => new Tile(0, 0, Tile.Terrain.MOUNTAIN, 1)).toThrow();
		expect(() => new Tile(0, 0, Tile.Terrain.MOUNTAIN, -1)).toThrow();
		expect(() => new Tile(0, 0, Tile.Terrain.MOUNTAIN, 7)).toThrow();
		expect(() => new Tile(0, 0, Tile.Terrain.MOUNTAIN, 13)).toThrow();
		expect(() => new Tile(0, 0, Tile.Terrain.MOUNTAIN, 'hello')).toThrow();
	});

	it('constructs without `number` for `desert` and `water` resources', () => {
		expect(() => new Tile(0, 0, Tile.Terrain.WATER)).not.toThrow();
		expect(() => new Tile(0, 0, Tile.Terrain.DESERT)).not.toThrow();
	});

	it('throws an error when constructed with an incorrect `resource`', () => {
		expect(() => new Tile(0, 0, undefined, 1)).toThrow();
	});

	it('gives correct coords for when calling `getNeighbour`', () => {
		const tile = new Tile(2, 0, Tile.Terrain.WATER);

		expect(tile.getNeighbour(Tile.Direction.NORTH)).toEqual([2, -1]);
		expect(tile.getNeighbour(Tile.Direction.NORTHEAST)).toEqual([3, -1]);
		expect(tile.getNeighbour(Tile.Direction.SOUTHEAST)).toEqual([3, 0]);
		expect(tile.getNeighbour(Tile.Direction.SOUTH)).toEqual([2, 1]);
		expect(tile.getNeighbour(Tile.Direction.SOUTHWEST)).toEqual([1, 1]);
		expect(tile.getNeighbour(Tile.Direction.NORTHWEST)).toEqual([1, 0]);
	});

	it('throws an error when calling `getNeighbour` with an incorrect direction', () => {
		expect(() => new Tile(0, 0, Tile.Terrain.WATER).getNeighbour(undefined)).toThrow();
	});

	it('has a `key` property', () => {
		expect(new Tile(0, 0, Tile.Terrain.WATER).key).toEqual('0,0');
		expect(new Tile(1, -3, Tile.Terrain.WATER).key).toEqual('1,-3');
	});
});
