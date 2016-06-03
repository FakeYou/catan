import Tile from './Tile';
import Edge from './Edge';
import Corner from './Corner';

export default class Board {
	constructor(tiles = [], edges = [], corners = []) {
		this.tiles = {};
		this.edges = {};
		this.corners = {};

		this.initTiles(tiles);
		this.initEdges(edges);
		this.initCorners(corners);
	}

	initTiles(tiles) {
		tiles.forEach(tile => {
			this.setTile(tile);
		});
	}

	initEdges(edges) {
		Object.values(this.tiles).forEach(tile => {
			const { q, r } = tile;

			if (tile.resource !== Tile.Resource.WATER) {
				this.setEdge(new Edge(q, r, Edge.Position.NORTH));
				this.setEdge(new Edge(q, r, Edge.Position.EAST));
				this.setEdge(new Edge(q, r, Edge.Position.WEST));

				this.setEdge(new Edge(...tile.getNeighbour(Tile.Direction.SOUTH), Edge.Position.NORTH));
				this.setEdge(new Edge(...tile.getNeighbour(Tile.Direction.SOUTHWEST), Edge.Position.EAST));
				this.setEdge(new Edge(...tile.getNeighbour(Tile.Direction.SOUTHEAST), Edge.Position.WEST));
			}
		});
	}

	initCorners(corners) {
		Object.values(this.tiles).forEach(tile => {
			const { q, r } = tile;

			if (tile.resource !== Tile.Resource.WATER) {
				this.setCorner(new Corner(q, r, Corner.Position.RIGHT));
				this.setCorner(new Corner(q, r, Corner.Position.LEFT));

				this.setCorner(new Corner(...tile.getNeighbour(Tile.Direction.NORTHEAST), Corner.Position.LEFT));
				this.setCorner(new Corner(...tile.getNeighbour(Tile.Direction.NORTHWEST), Corner.Position.RIGHT));
				this.setCorner(new Corner(...tile.getNeighbour(Tile.Direction.SOUTHEAST), Corner.Position.LEFT));
				this.setCorner(new Corner(...tile.getNeighbour(Tile.Direction.SOUTHWEST), Corner.Position.RIGHT));
			}
		});
	}

	getTile(q, r) {
		const key = Tile.key(q, r);

		return this.tiles[key];
	}

	getCorner(q, r, position) {
		const key = Corner.key(q, r, position);

		return this.corners[key];
	}

	getEdge(q, r, position) {
		const key = Edge.key(q, r, position);

		return this.edges[key];
	}

	getNeighbour(q, r, direction) {
		const neighbor = this.getTile(q, r).getNeighbour(direction);
		const key = Tile.key(...neighbor);

		return this.tiles[key];
	}

	getTilesByNumber(number) {
		return Object.values(this.tiles).filter(tile => tile.number === number);
	}

	setTile(tile) {
		this.tiles[tile.key] = tile;
	}

	setEdge(edge) {
		this.edges[edge.key] = edge;
	}

	setCorner(corner) {
		this.corners[corner.key] = corner;
	}

	placeRoad(q, r, position) {
		const edge = this.edges[Edge.key(q, r, position)];
	}

	static generateBeginnerBoard() {
		const tiles = [
			new Tile(3, 0, Tile.Resource.WATER),
			new Tile(2, 1, Tile.Resource.WATER),
			new Tile(1, 2, Tile.Resource.WATER),
			new Tile(0, 3, Tile.Resource.WATER),
			new Tile(0, 4, Tile.Resource.WATER),
			new Tile(0, 5, Tile.Resource.WATER),
			new Tile(0, 6, Tile.Resource.WATER),
			new Tile(1, 6, Tile.Resource.WATER),
			new Tile(2, 6, Tile.Resource.WATER),
			new Tile(3, 6, Tile.Resource.WATER),
			new Tile(4, 5, Tile.Resource.WATER),
			new Tile(5, 4, Tile.Resource.WATER),
			new Tile(6, 3, Tile.Resource.WATER),
			new Tile(6, 2, Tile.Resource.WATER),
			new Tile(6, 1, Tile.Resource.WATER),
			new Tile(6, 0, Tile.Resource.WATER),
			new Tile(5, 0, Tile.Resource.WATER),
			new Tile(4, 0, Tile.Resource.WATER),

			new Tile(3, 1, Tile.Resource.FOREST, 9),
			new Tile(4, 1, Tile.Resource.HILL, 10),
			new Tile(5, 1, Tile.Resource.MOUNTAIN, 8),
			new Tile(2, 2, Tile.Resource.PASTURE, 2),
			new Tile(3, 2, Tile.Resource.PASTURE, 4),
			new Tile(4, 2, Tile.Resource.FOREST, 3),
			new Tile(5, 2, Tile.Resource.PASTURE, 5),
			new Tile(1, 3, Tile.Resource.MOUNTAIN, 10),
			new Tile(2, 3, Tile.Resource.HILL, 6),
			new Tile(3, 3, Tile.Resource.DESERT),
			new Tile(4, 3, Tile.Resource.FIELD, 4),
			new Tile(5, 3, Tile.Resource.PASTURE, 11),
			new Tile(1, 4, Tile.Resource.FIELD, 12),
			new Tile(2, 4, Tile.Resource.FOREST, 11),
			new Tile(3, 4, Tile.Resource.MOUNTAIN, 3),
			new Tile(4, 4, Tile.Resource.FIELD, 6),
			new Tile(1, 5, Tile.Resource.FIELD, 9),
			new Tile(2, 5, Tile.Resource.FOREST, 8),
			new Tile(3, 5, Tile.Resource.HILL, 5),

		];

		return new Board(tiles);
	}
}
