import EventEmitter from 'events';
import faker from 'faker';

import Board from './Board';
import Player from './Player';

export default class Game extends EventEmitter {
	constructor(numberOfPlayers = 3) {
		this.numberOfPlayers = numberOfPlayers;
		this.players = [];

		this.board = Board.generateBeginnerBoard(this);
		this.state = Game.Phases.SETUP;

		this.emitter = new Emitter();

		for (let i = 0; i < numberOfPlayers; i++) {
			const name = faker.internet.domainWord();
			const color = Object.values(Player.Color)[i];

			const player = new Player(this, name, color);

			this.players.push(player);
		}
	}
}

Game.Phases = {
	SETUP: 'SETUP',
	TURN_START: 'TURN_START',
	TRADE: 'TRADE',
	BUILD: 'BUILD',
	TURN_END: 'TURN_END'
};
