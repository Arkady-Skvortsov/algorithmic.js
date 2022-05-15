import { Stack } from './data-structures/stack';
import { Queue } from './data-structures/queue';
import { dataStructureType } from './interfaces/data-structure.enum';
import { LinkedList } from './data-structures/linked-list';
import { PriorityQueue } from './data-structures/priority-queue';

class DataStructure {
  constructor() {}

  public create(type: dataStructureType) {
    switch (type) {
      case 'STACK':
        return new Stack();
      case 'QUEUE':
        return new Queue();
    }
  }
}

export { DataStructure };
