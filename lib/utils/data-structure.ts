import { Stack } from './data-structures/stack';
import { Queue } from './data-structures/queue';
import { dataStructureType } from './interfaces/data-structure.enum';
import { LinkedList } from './data-structures/linked-list';
import { PriorityQueue } from './data-structures/priority-queue';
import { BinaryTree } from './data-structures/tree';

class DataStructure {
  constructor() {}

  public create(type: dataStructureType) {
    if (type === 'STACK') return new Stack();
  }
}

export { DataStructure };
