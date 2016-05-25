export default class Edge {
	constructor(q, r, edge) {
		this.q = q;
		this.r = r;
		this.edge = edge;
	}
}

Edge.Directions = {
	NORTH: 'NORTH',
	EAST: 'EAST',
	WEST: 'WEST',
};
