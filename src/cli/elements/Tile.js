import blessed, { Element } from 'blessed';
import clc from 'cli-color';

import { hexToPosition } from '../utils';
import Tile from '../../catan/Tile';

export default class TileElement extends Element {
	constructor(tile) {
		super({
			shrink: true,
			tags: false,
			style: {
				bg: 'default',
				fg: 'default',
			}
		});

		this.tile = tile;
	}

	render() {
		let [x, y] = hexToPosition(this.tile.q, this.tile.r);
		let color = (i) => i;
		let number = this.tile.number;

		if(!number) {
			number = '  ';
		}
		else if(number < 10) {
			number = number + ' ';
		}

		// number = this.tile.q + ',' + this.tile.r;

		switch (this.tile.resource) {
			case Tile.Terrain.FOREST:
				color = clc.whiteBright.bgGreen;
				break;
			case Tile.Terrain.PASTURE:
				color = clc.black.bgGreenBright;
				break;
			case Tile.Terrain.FIELD:
				color = clc.black.bgYellowBright;
				break;
			case Tile.Terrain.HILL:
				color = clc.whiteBright.bgRed;
				break;
			case Tile.Terrain.MOUNTAIN:
				color = clc.black.bgBlackBright;
				break;
			case Tile.Terrain.DESERT:
				color = clc.bgWhite;
				break;
			case Tile.Terrain.WATER:
				color = clc.bgCyan;
				break;
			default:
				color = clc.black.bgMagentaBright;
				break;
		}

		this.setContent([
			` ${color('   ')} `,
			color(`  ${number} `),
			` ${color('   ')} `,
		].join('\n'))

		// console.log(this.content);

		this.rleft = x - 2;
		this.rtop = y - 1;

		return super.render();
	}
}


		// case Tile.Terrain.FOREST:
		// 	return clc.whiteBright.bgGreen;
		// case Tile.Terrain.PASTURE:
		// 	return clc.black.bgGreenBright;
		// case Tile.Terrain.FIELD:
		// 	return clc.black.bgYellowBright;
		// case Tile.Terrain.HILL:
		// 	return clc.whiteBright.bgRed;
		// case Tile.Terrain.MOUNTAIN:
		// 	return clc.black.bgBlackBright;
		// case Tile.Terrain.DESERT:
		// 	return clc.bgWhite;
		// case Tile.Terrain.WATER:
		// 	return clc.bgCyan;
		// default:
		// 	return clc.black.bgMagentaBright;