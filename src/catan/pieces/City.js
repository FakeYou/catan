import Corner from '../Corner';

export default class City extends Corner {
	constructor(q, r, position, player) {
		super(q, r, position);

		this.player = player;
	}
}
