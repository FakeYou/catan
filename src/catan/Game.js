import EventEmitter from 'events';
import faker from 'faker';

import Board from './Board';
import Player from './Player';

export default class Game extends EventEmitter {
	constructor() {
		super();

		this.state = Game.Phases.SETUP;
		this.maxPlayers = 4;
		this.players = [];
		this.board = null;
	}

	addPlayer(player) {
		if(this.players.length < this.maxPlayers) {
			this.players.push(player);
		}
		else {
			throw new Error(`Maximum of ${this.maxPlayers} players allowed.`);
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
