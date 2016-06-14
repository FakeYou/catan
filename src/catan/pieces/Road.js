import Edge from '../Edge';

export default class Road {
	constructor(player, q, r, position) {
		this.player = player;

		if (q === undefined || r === undefined || position === undefined) {
			this.edge = null;
		}
		else {
			this.edge = new Edge(q, r, position);
		}
	}

	setEdge(q, r, position) {
		if (this.edge) {
			this.edge.q = q;
			this.edge.r = r;
			this.edge.position = position;
		}
		else {
			this.edge = new Edge(q, r, position);
		}
	}

	get key() {
		if(this.edge) {
			return this.edge.key;
		}
	}
}
