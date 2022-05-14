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
    addEdge(v, w) {
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
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
    getEdge(v) {
        const edges = this.AdjList.get(v);
        return `${v} -> ${edges.join(', ')}`;
    }
    removeEdge(v, w) {
        this.AdjList.get(v).splice(w, 1);
        this.AdjList.get(w).splice(v, 1);
    }
    clearVertexes() {
        this.AdjList.clear();
    }
    clearEdges() {
        let keys = this.AdjList.keys();
        for (let k of keys) {
            let values = this.AdjList.get(k);
            values.splice(0, values.length);
        }
    }
    hasVertex(key) {
        return this.AdjList.has(key) ? true : false;
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
            console.log(getQueueElement);
            let get_List = this.AdjList.get(getQueueElement);
            for (let i in get_List) {
                let neigh = get_List[i];
                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.enqueue(neigh);
                }
            }
        }
    }
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