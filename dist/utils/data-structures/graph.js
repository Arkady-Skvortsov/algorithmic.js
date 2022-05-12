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
        this.AdjList.splice(v, 1);
    }
    removeEdge() { }
    clear() { }
    clearEdge() { }
    dfs(startingNode) {
        const visited = {};
        this.DFSUtil(startingNode, visited);
    }
    DFSUtil(vert, visited) {
        visited[vert] = true;
        console.log(vert);
        const get_neighbours = this.AdjList.get(vert);
        for (let i in get_neighbours) {
            let get_elem = get_neighbours[i];
            if (!visited[get_elem])
                this.DFSUtil(get_elem, visited);
        }
    }
    bfs(startingNode) {
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
    isEmpty() {
        return this.getSize() === 0;
    }
    print() {
        const get_keys = this.AdjList.keys();
        for (let i of get_keys) {
            const get_values = this.AdjList.get(i);
            let conc = '';
            for (const j of get_values)
                conc += j + ' ';
            console.log(`${i} -> ${conc}`);
        }
    }
}
exports.Graph = Graph;
const graph = new Graph();
const vertex = ['A', 'B', 'C', 'D', 'E', 'F'];
for (let i = 0; i < vertex.length; i++) {
    graph.addVertex(vertex[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('E', 'C');
graph.addEdge('C', 'F');
console.log(graph.getSize());
console.log(graph.isEmpty());
graph.print();
//# sourceMappingURL=graph.js.map