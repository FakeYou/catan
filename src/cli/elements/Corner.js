import blessed, { Element, Box } from 'blessed';

import { hexToPosition } from '../utils';
import Corner from '../../catan/Corner';
import City from '../../catan/pieces/City';
import Settlement from '../../catan/pieces/Settlement';

export default class CornerElement extends Element {
	constructor(corner) {
		super({
			shrink: true,
		});

		this.corner = corner;
	}

	render() {
		let [x, y] = hexToPosition(this.corner.q, this.corner.r);

		if(this instanceof City) {
			this.content = '█';
		}
		else if(this instanceof Settlement) {
			this.content = '▲';
		}
		else {
			this.content = 'o';
		}

		switch(this.corner.position) {
			case Corner.Position.LEFT:
				x -= 4;
				break;
			case Corner.Position.RIGHT:
				x += 4;
				break;
		}

		this.rleft = x;
		this.rtop = y;

		return super.render();
	}
}


