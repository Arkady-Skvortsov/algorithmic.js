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
  public abstract print(): string;
}

export {
  dataStructureType,
  priorityQueue,
  graph,
  IdataStructure,
  side,
  heapType,
};
