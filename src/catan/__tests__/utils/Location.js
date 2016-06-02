/* eslint-disable no-new */

jest.unmock('../../utils/Location');

import Location from '../../utils/Location';

describe('Location', () => {
	it('constructs with `q` and `r` properties', () => {
		const location = new Location(1, 3);

		expect(location.q).toBe(1);
		expect(location.r).toBe(3);
	});

	it('has a `cube` property that converts the tiles axial coords to cube coords', () => {
		expect(new Location(0, 0).cube).toEqual([0, 0, 0]);
		expect(new Location(1, -2).cube).toEqual([1, 1, -2]);
	});

	it('has a `offset` property that converts the tiles axial coords to offset coords', () => {
		expect(new Location(0, 0).offset).toEqual([0, 0]);
		expect(new Location(1, -2).offset).toEqual([1, -1]);
	});
});
