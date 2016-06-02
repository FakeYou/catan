import Location from './utils/Location';

export default class Edge extends Location {
	constructor(q, r, position) {
		super(q, r);

		// Check if a valid `position` was given.
		if (!(position in Edge.Position)) {
			throw new Error(`Invalid position, should one of ${Object.keys(Edge.Position)}`);
		}
		this.position = position;
	}

	get key() {
		return Edge.key(this.q, this.r, this.position);
	}

	static key(q, r, position) {
		return `${q},${r} ${position.substr(0, 1)}`;
	}
}

Edge.Position = {
	NORTH: 'NORTH',
	EAST: 'EAST',
	WEST: 'WEST',
};
