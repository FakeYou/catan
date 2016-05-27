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

	get key() {
		return Edge.key(this.q, this.r, this.position);
	}

	get cube() {
		// For the `y` value when `q` and `r` are both `0` the resulting `y` would be `-0`.
		// To prevent this behaviour and always return a postive zero we use `-q - z + 0`.
		return [this.q, -this.q - this.r + 0, this.r];
	}

	get offset() {
		const [x, y, z] = this.cube;
		return [x, z + (x + (x & 1)) / 2];
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
