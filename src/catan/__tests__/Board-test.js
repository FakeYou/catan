jest.unmock('../Board');

import Board from '../Board';

describe('Board', () => {
	it('constructs with `height` and `width` properties', () => {
		const board = new Board(4, 3);
		expect(board.width).toBe(4);
		expect(board.height).toBe(3);
	})
})