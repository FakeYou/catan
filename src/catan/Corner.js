export default class Corner {
	constructor(q, r, position) {
		this.q = q;
		this.r = r;

		// Check if a valid `position` was given.
		if (!(position in Corner.Position)) {
			throw new Error(`Invalid position, should one of ${Object.keys(Corner.Position)}`);
		}
		this.position = position;
	}

	get key() {
		return Corner.key(this.q, this.r, this.position);
	}

	static key(q, r, position) {
		return `${q},${r} ${position.substr(0, 1)}`;
	}
}

Corner.Position = {
	RIGHT: 'RIGHT',
	LEFT: 'LEFT',
};
