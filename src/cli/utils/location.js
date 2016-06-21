export function hexToPosition(q, r) {
	return [
		(q * 6) + 40,
		(r * 4 + (Math.abs(q + 10000 % 2) * 2)) + 20
	];

	return [
		Math.floor(q * 6) + 40,
		Math.floor(r * 4 - (q % 2) * 2) + 20,
	];
}