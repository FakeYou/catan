import { Screen } from 'blessed';

import CornerElement from './elements/Corner';
import EdgeElement from './elements/Edge';
import TileElement from './elements/Tile';

import City from '../catan/pieces/City';
import Corner from '../catan/Corner';
import Edge from '../catan/Edge';
import Game from '../catan/Game';
import Player from '../catan/Player';
import Board from '../catan/Board';

const game = new Game();
const player = new Player(null, 'test', Player.Color.RED);
const board = Board.generateBeginnerBoard(game);

game.board = board;
game.addPlayer(player);

const screen = Screen();

console.log(game.board.edges);

Object.values(game.board.tiles).forEach(tile => {
	screen.append(new TileElement(tile));
});

Object.values(game.board.edges).forEach(edge => {
	screen.append(new EdgeElement(edge));
});

Object.values(game.board.corners).forEach(corner => {
	screen.append(new CornerElement(corner));
});

// screen.append(new EdgeElement(new Edge(10, 10, Edge.Position.NORTH)));
// screen.append(new EdgeElement(new Edge(10, 10, Edge.Position.WEST)));
// screen.append(new EdgeElement(new Edge(10, 10, Edge.Position.EAST)));
// screen.append(new EdgeElement(new Edge(10, 11, Edge.Position.NORTH)));
// screen.append(new EdgeElement(new Edge(9, 11, Edge.Position.WEST)));
// screen.append(new EdgeElement(new Edge(11, 11, Edge.Position.EAST)));

// screen.append(new CornerElement(new Corner(10, 10, Corner.Position.RIGHT)));
// screen.append(new CornerElement(new City(player, 10, 10, Corner.Position.LEFT)));

screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

screen.render();