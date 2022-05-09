type dataStructureType =
  | 'STACK'
  | 'GRAPH'
  | 'QUEUE'
  | 'HEAP'
  | 'LINKED-LIST'
  | 'TREE'
  | 'HASH-TABLE'
  | 'BLOOM-FILTER'
  | 'PRIORITY-QUEUE';

interface priorityQueue {
  element: any;
  priority: number;
}

export { dataStructureType, priorityQueue };
