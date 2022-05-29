type dataStructureType =
  | 'STACK'
  | 'GRAPH'
  | 'QUEUE'
  | 'HEAP'
  | 'LINKED-LIST'
  | 'HASH-TABLE'
  | 'BLOOM-FILTER'
  | 'PRIORITY-QUEUE'
  | 'BINARY-TREE'
  | 'RED-BLACK-TREE'
  | 'SPLAY-TREE'
  | 'CIRCULAR-BUFFER';
type side = 'left' | 'right';
type heapType = 'min' | 'max';
type rbtType = 'red' | 'black';

const BLACK = false;
const RED = true;

interface priorityQueue {
  element: any;
  priority: number;
}

interface graph {
  point: string;
  value: number;
}

abstract class IdataStructure {
  public abstract clear(): void;
  public abstract has(element: any): boolean;
  public abstract getSize(): number;
  public abstract first(): any;
  public abstract peek(): any;
  public abstract isEmpty(): boolean;
  public abstract print(): any;
}

export {
  dataStructureType,
  priorityQueue,
  graph,
  IdataStructure,
  side,
  rbtType,
  heapType,
  RED,
  BLACK,
};
