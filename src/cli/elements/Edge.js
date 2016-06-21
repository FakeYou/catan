import { Element } from 'blessed';

import { hexToPosition } from '../utils';
import Edge from '../../catan/Edge';

export default class EdgeElement extends Element {
	constructor(edge) {
		super({
			shrink: true,
		});

		this.edge = edge;
	}

	render() {
		let [x, y] = hexToPosition(this.edge.q, this.edge.r);

		switch(this.edge.position) {
			case Edge.Position.NORTH:
				this.content = '---';
				x -= 1;
				y -= 2;
				break;
			case Edge.Position.EAST:
				this.content = '/';
				x -= 3;
				y -= 1;
				break;
			case Edge.Position.WEST:
				this.content = '\\';
				x += 3;
				y -= 1;
				break;
			default: this.content = '@';
		}

		this.rleft = x;
		this.rtop = y;

		return super.render();
	}
}
