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
  | 'SPLAY-TREE';

interface priorityQueue {
  element: any;
  priority: number;
}

export { dataStructureType, priorityQueue };
