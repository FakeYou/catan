import Corner from '../Corner';

export default class City {
	constructor(player, q, r, position) {
		this.player = player;

		if (q === undefined || r === undefined || position === undefined) {
			this.corner = null;
		}
		else {
			this.corner = new Corner(q, r, position);
		}
	}

	setCorner(q, r, position) {
		if (this.corner) {
			this.corner.q = q;
			this.corner.r = r;
			this.corner.position = position;
		}
		else {
			this.corner = new Corner(q, r, position);
		}
	}

	get key() {
		if(this.corner) {
			return this.corner.key;
		}
	}
}
