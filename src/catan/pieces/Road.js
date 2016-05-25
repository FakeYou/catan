import Edge from '../Edge';

export default class Road extends Edge {
	constructor(q, r, position, player) {
		super(q, r, position);

		this.player = player;
	}
}
