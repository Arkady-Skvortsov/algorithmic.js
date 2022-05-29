import { graph } from '../interfaces/data-structure.enum';
import { Queue } from './queue';

class Graph {
  private AdjList: any;

  constructor() {
    this.AdjList = new Map();
  }

  public addVertex(v: string): void {
    this.AdjList.set(v, []);
  }

  public addEdge(first: string, second: string): void {
    !this.hasEdge(first, second)
      ? (this.AdjList.get(first).push(second),
        this.AdjList.get(second).push(first))
      : console.log('You already have that edge');
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

  public first(): any {
    const [first] = this.AdjList.keys();

    return first;
  }

  public peek() {
    return [...this.AdjList][this.AdjList.size - 1][0];
  }

  public getEdge(v: string): any {
    const edges = this.AdjList.get(v);

    return { vertex: v, edges: edges.join(', ') };
  }

  public removeEdge(first: string, second: string): void {
    this.AdjList.get(second).splice(second, 1);
    this.AdjList.get(first).splice(first, 1);
  }

  public clearVertexes(): void {
    this.AdjList.clear();
  }

  public next(vertex: string) {
    let edge = this.getEdge(vertex);
    let count = -1;
    const edges = edge.edges.split(', ');

    if (count <= edges.length) {
      count++;

      edge = this.getEdge(edges[count]);
    }

    return this;
  }

  public clearEdges(): void {
    let keys = this.AdjList.keys();

    for (let k of keys) {
      let values = this.AdjList.get(k);

      values.splice(0, values.length);
    }
  }

  public hasVertex(vertex: string): boolean {
    return this.AdjList.has(vertex) ? true : false;
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

  public findShortPath(first: string, second: string) {}

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

export { Graph };
