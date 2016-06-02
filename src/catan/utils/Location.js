export default class Location {
	constructor(q, r) {
		this.q = q;
		this.r = r;
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
}