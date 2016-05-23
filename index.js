var clc = require('cli-color');


const resources = {
	LUMBER: 1,
	WOOL: 2,
	GRAIN: 3,
	BRICK: 4,
	ORE: 5,
	DESERT: 6,
	WATER: 7
}

const players = [
	{ name: 'red', color: clc.redBright },
	{ name: 'green', color: clc.greenBright },
	{ name: 'blue', color: clc.cyanBright },
	{ name: 'magenta', color: clc.magentaBright }
];

const map = [
	// { x: 0, y: 0, resource: resources.WATER, number: 1 },
	{ x: 0, y: 1, resource: resources.WATER, number: 1 },
	{ x: 0, y: 2, resource: resources.WATER, number: 2 },
	{ x: 0, y: 3, resource: resources.WATER, number: 3 },
	// { x: 0, y: 4, resource: resources.WATER, number: 4 },
	{ x: 1, y: 0, resource: resources.WATER, number: 1 },
	{ x: 1, y: 1, resource: resources.LUMBER, number: 1 },
	{ x: 1, y: 2, resource: resources.BRICK, number: 2 },
	{ x: 1, y: 3, resource: resources.WATER, number: 3 },
	// { x: 1, y: 4, resource: resources.WATER, number: 4 },
	{ x: 2, y: 0, resource: resources.WATER, number: 5 },
	{ x: 2, y: 1, resource: resources.GRAIN, number: 5 },
	{ x: 2, y: 2, resource: resources.DESERT, number: 6 },
	{ x: 2, y: 3, resource: resources.ORE, number: 7 },
	{ x: 2, y: 4, resource: resources.WATER, number: 8 },
	{ x: 3, y: 0, resource: resources.WATER, number: 9 },
	{ x: 3, y: 1, resource: resources.LUMBER, number: 9 },
	{ x: 3, y: 2, resource: resources.WOOL, number: 10 },
	{ x: 3, y: 3, resource: resources.WATER, number: 11 },
	// { x: 3, y: 4, resource: resources.WATER, number: 12 },
	// { x: 4, y: 0, resource: resources.WATER, number: 9 },
	{ x: 4, y: 1, resource: resources.WATER, number: 9 },
	{ x: 4, y: 2, resource: resources.WATER, number: 10 },
	{ x: 4, y: 3, resource: resources.WATER, number: 11 },
	// { x: 4, y: 4, resource: resources.WATER, number: 12 },
];

function hexToCoord(x, y) {
	return [
		Math.floor(x * 6),
		Math.floor(y * 4 + (x % 2) * 2)
	];
}

function randomPlayer(chance = 0.5) {
	if(Math.random() < chance) {
		return players[Math.floor(Math.random() * players.length)];
	}
}

function randomSettlement(chance = 0.5) {
	if(Math.random() < chance) {
		return ['▲', '■'][Math.floor(Math.random() * 2)];
	}
}

function resourceColors(resource) {
	switch(resource) {
		case resources.LUMBER:
			return clc.whiteBright.bgGreen;
		case resources.WOOL:
			return clc.black.bgGreenBright;
		case resources.GRAIN:
			return clc.black.bgYellowBright;
		case resources.BRICK:
			return clc.black.bgRedBright;
		case resources.ORE:
			return clc.whiteBright.bgBlackBright;
		case resources.DESERT:
			return clc.yellowBright.bgYellowBright;
		case resources.WATER:
			return clc.cyan.bgCyan;
	}

	return clc.black.bgMagentaBright;
}

process.stdout.write(clc.reset);

function resource(x, y, resource) {
	[x, y] = hexToCoord(x, y);

	let color = resourceColors(resource);

	process.stdout.write(clc.move.to(x + 3, y + 1) + color('   '));
	process.stdout.write(clc.move.to(x + 2, y + 2) + color('     '));
	process.stdout.write(clc.move.to(x + 3, y + 3) + color('   '));
}

function number(x, y, number, resource) {
	coord = x+','+y;
	[x, y] = hexToCoord(x, y);
	number = number.toString();
	let color = resourceColors(resource);

	if(number == '10' || number == '11' || number == '12') {
		number = number[0] + ' ' + number[1]
	}
	else {
		number = ' ' + number + ' ';
	}

	number = coord;

	process.stdout.write(clc.move.to(x + 3, y + 2) + color(number));
}

function road(x, y, edge, player) {
	[x, y] = hexToCoord(x, y);

	let color = player ? player.color : clc.whiteBright;

	switch(edge) {
		case 'n':
			process.stdout.write(clc.move.to(x + 3, y) + color('---'));
			break;
		case 'w':
			process.stdout.write(clc.move.to(x + 1, y + 1) + color('/'));
			break;
		case 'e':
			process.stdout.write(clc.move.to(x + 7, y + 1) + color('\\'));
			break;
	}
}

function settlement(x, y, vert, type, player) {
	[x, y] = hexToCoord(x, y);

	let char, color;

	if(type && player) {
		char = type ? type : 'o';
		color = player ? player.color : clc.whiteBright;
	}
	else {
		char = 'o';
		color = clc.whiteBright;
	}

	switch(vert) {
		case 'l':
			process.stdout.write(clc.move.to(x, y + 2) + color(char));
			break;
		case 'r':
			process.stdout.write(clc.move.to(x + 8, y + 2) + color(char));
			break;
	}
}

map.forEach((tile) => {
	resource(tile.x, tile.y, tile.resource);

	if(tile.resource !== resources.DESERT && tile.resource !== resources.WATER) {
		number(tile.x, tile.y, tile.number, tile.resource);
	}

	if(tile.resource !== resources.WATER) {
		road(tile.x, tile.y, 'n', randomPlayer(0));
		road(tile.x, tile.y, 'w', randomPlayer(0));
		road(tile.x, tile.y, 'e', randomPlayer(0));

		road(tile.x, tile.y + 1, 'n', randomPlayer(0));
		road(tile.x + 1, tile.y + 1, 'w', randomPlayer(0));
		road(tile.x - 1, tile.y + 1, 'e', randomPlayer(0));


		settlement(tile.x, tile.y, 'r', randomSettlement(), randomPlayer(0));
		settlement(tile.x, tile.y, 'l', randomSettlement(), randomPlayer(0));
	}
});

process.stdout.write(clc.move.lines(10))
