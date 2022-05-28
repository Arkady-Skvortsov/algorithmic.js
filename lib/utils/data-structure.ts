import { Stack } from './data-structures/stack';
import { Queue } from './data-structures/queue';
import { dataStructureType } from './interfaces/data-structure.enum';
import { LinkedList } from './data-structures/linked-list';
import { PriorityQueue } from './data-structures/priority-queue';
import {
  ElementaryDataStructure,
  someDataStructures,
} from './interfaces/types';
import { Graph } from './data-structures/graph';

class DataStructure {
  public create(
    type: dataStructureType,
  ): ElementaryDataStructure<someDataStructures> {
    if (type === 'STACK') {
      return new Stack() as ElementaryDataStructure<'STACK'>;
    } else {
      return new Queue() as ElementaryDataStructure<'QUEUE'>;
    }
  }
}

export { DataStructure };
