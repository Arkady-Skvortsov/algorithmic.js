"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;
const queue_1 = require("./queue");
class Graph {
    AdjList;
    constructor() {
        this.AdjList = new Map();
    }
    addVertex(v) {
        this.AdjList.set(v, []);
    }
    addEdge(first, second) {
        !this.hasEdge(first, second)
            ? (this.AdjList.get(first).push(second),
                this.AdjList.get(second).push(first))
            : console.log('You already have that edge');
    }
    removeVertex(v) {
        if (this.AdjList.has(v)) {
            const values = this.AdjList.keys();
            for (let value of values) {
                const get_values = this.AdjList.get(value);
                for (let i = 0; i < get_values.length; i++) {
                    get_values.splice(i, 1);
                }
                this.AdjList.delete(v);
            }
        }
        return false;
    }
    first() {
        const [first] = this.AdjList.keys();
        return first;
    }
    peek() {
        return [...this.AdjList][this.AdjList.size - 1][0];
    }
    getEdge(v) {
        const edges = this.AdjList.get(v);
        return { vertex: v, edges: edges.join(', ') };
    }
    removeEdge(first, second) {
        this.AdjList.get(second).splice(second, 1);
        this.AdjList.get(first).splice(first, 1);
    }
    clearVertexes() {
        this.AdjList.clear();
    }
    next(vertex) {
        let edge = this.getEdge(vertex);
        let count = -1;
        const edges = edge.edges.split(', ');
        if (count <= edges.length) {
            count++;
            edge = this.getEdge(edges[count]);
        }
        return this;
    }
    clearEdges() {
        let keys = this.AdjList.keys();
        for (let k of keys) {
            let values = this.AdjList.get(k);
            values.splice(0, values.length);
        }
    }
    hasVertex(vertex) {
        return this.AdjList.has(vertex) ? true : false;
    }
    hasEdge(v, w) {
        const first = this.AdjList.get(v).find((val) => val === w);
        const second = this.AdjList.get(w).find((val) => val === v);
        return first && second ? true : false;
    }
    depthFirstSearch(startingNode) {
        const visited = {};
        this.DFSUtil(startingNode, visited);
    }
    DFSUtil(vert, visited) {
        visited[vert] = true;
        console.log(visited);
        const get_neighbours = this.AdjList.get(vert);
        for (let i in get_neighbours) {
            let get_elem = get_neighbours[i];
            if (!visited[get_elem])
                this.DFSUtil(get_elem, visited);
        }
        return vert;
    }
    breadthFirstSearch(startingNode) {
        let visited = {};
        let q = new queue_1.Queue();
        visited[startingNode] = true;
        q.enqueue(startingNode);
        while (!q.isEmpty()) {
            let getQueueElement = q.dequeue();
            let get_List = this.AdjList.get(getQueueElement);
            for (let i in get_List) {
                let neigh = get_List[i];
                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.enqueue(neigh);
                }
            }
            console.log(getQueueElement);
        }
    }
    findShortPath(first, second) { }
    getSize() {
        return this.AdjList.size;
    }
    clear() {
        this.AdjList.clear();
    }
    isEmpty() {
        return this.getSize() === 0;
    }
    print() {
        const get_keys = this.AdjList.keys();
        for (let i of get_keys) {
            const get_values = this.AdjList.get(i);
            let conc = '';
            for (const j of get_values)
                conc += j + ', ';
            console.log(`${i} -> ${conc}`);
        }
    }
}
exports.Graph = Graph;
//# sourceMappingURL=graph.js.map