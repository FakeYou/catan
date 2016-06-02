import faker from 'faker';

import Board from './Board';
import Player from './Player';

export default class Catan {
	constructor(numberOfPlayers = 3) {
		this.numberOfPlayers = numberOfPlayers;
		this.players = [];

		this.board = Board.generateBeginnerBoard();

		for (let i = 0; i < numberOfPlayers; i++) {
			const name = faker.internet.domainWord();
			const color = Object.values(Player.Color)[i];

			const player = new Player(name, color);

			this.players.push(player);
		}
	}
}
