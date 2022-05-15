import { Queue } from './queue';

class Graph {
  private AdjList: any;

  constructor() {
    this.AdjList = new Map();
  }

  public addVertex(v: string, value: number): void {
    this.AdjList.set({ point: v, value }, []);
  }

  public addEdge(value: string, w: string): void {
    this.AdjList.get({ point: value }).push(w);
    this.AdjList.get({ point: w }).push(value);
  }

  public removeVertex(v: string) {
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

  public getEdge(v: string): string {
    const edges = this.AdjList.get(v);

    return `${v} -> ${edges.join(', ')}`;
  }

  public removeEdge(v: string, w: string): void {
    this.AdjList.get({ point: v }).splice(w, 1);
    this.AdjList.get({ point: w }).splice(v, 1);
  }

  public clearVertexes(): void {
    this.AdjList.clear();
  }

  public clearEdges(): void {
    let keys = this.AdjList.keys();

    for (let k of keys) {
      let values = this.AdjList.get(k);

      values.splice(0, values.length);
    }
  }

  public hasVertex(key: string): boolean {
    return this.AdjList.has({ point: key }) ? true : false;
  }

  public hasEdge(v: string, w: string): boolean {
    const first = this.AdjList.get(v).find((val: string) => val === w);
    const second = this.AdjList.get(w).find((val: string) => val === v);

    return first && second ? true : false;
  }

  public depthFirstSearch(startingNode: string) {
    const visited = {};

    this.DFSUtil(startingNode, visited);
  }

  private DFSUtil(vert: string, visited: any) {
    visited[vert] = true;
    console.log(visited);

    const get_neighbours = this.AdjList.get(vert);

    for (let i in get_neighbours) {
      let get_elem = get_neighbours[i];
      if (!visited[get_elem]) this.DFSUtil(get_elem, visited);
    }

    return vert;
  }

  public breadthFirstSearch(startingNode: any): void {
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

  public findShortPath(first: string, second: string) {
    const costs = {};
    const processed = [];
    const neighbors = {};

    return this.AdjList.keys();
  }

  public getSize(): number {
    return this.AdjList.size;
  }

  public clear(): void {
    this.AdjList.clear();
  }

  public isEmpty(): boolean {
    return this.getSize() === 0;
  }

  public print(): any | undefined {
    const get_keys = this.AdjList.keys();

    for (let i of get_keys) {
      const get_values = this.AdjList.get(i);
      let conc = '';

      for (const j of get_values) conc += j + ', ';

      console.log(`${i} -> ${conc}`);
    }
  }
}

const graph = new Graph();

graph.addVertex('A', 120);
graph.addVertex('B', 130);
graph.addVertex('C', 50);

console.log(graph.findShortPath('A', 'B'));
console.log(graph.hasVertex('A'));

export { Graph };
