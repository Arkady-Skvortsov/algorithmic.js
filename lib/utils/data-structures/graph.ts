import { Queue } from './queue';

class Graph {
  private AdjList: any;

  constructor() {
    this.AdjList = new Map();
  }

  public addVertex(v: any) {
    this.AdjList.set(v, []);
  }

  public addEdge(v: any, w: any) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }

  public removeVertex(v: any) {
    this.AdjList.splice(v, 1);
  }

  public removeEdge() {}

  public clear() {}

  public clearEdge() {}

  public dfs(startingNode: any) {
    const visited = {};

    this.DFSUtil(startingNode, visited);
  }

  private DFSUtil(vert: any, visited: any) {
    visited[vert] = true;
    console.log(vert);

    const get_neighbours = this.AdjList.get(vert);

    for (let i in get_neighbours) {
      let get_elem = get_neighbours[i];
      if (!visited[get_elem]) this.DFSUtil(get_elem, visited);
    }
  }

  public bfs(startingNode: any) {
    let visited: any = {};

    let q = new Queue();

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

  public getSize() {
    return this.AdjList.size;
  }

  public isEmpty() {
    return this.getSize() === 0;
  }

  public print() {
    const get_keys = this.AdjList.keys();

    for (let i of get_keys) {
      const get_values = this.AdjList.get(i);
      let conc = '';

      for (const j of get_values) conc += j + ' ';

      console.log(`${i} -> ${conc}`);
    }
  }
}

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

export { Graph };
