export default class Edge {
	constructor(q, r, position) {
		this.q = q;
		this.r = r;

		// Check if a valid `position` was given.
		if (!(position in Edge.Position)) {
			throw new Error(`Invalid position, should one of ${Object.keys(Edge.Position)}`);
		}
		this.position = position;
	}
}

Edge.Position = {
	NORTH: 'NORTH',
	EAST: 'EAST',
	WEST: 'WEST',
};
