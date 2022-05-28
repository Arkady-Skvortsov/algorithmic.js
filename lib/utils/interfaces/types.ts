import { Graph } from '../data-structures/graph';
import { LinkedList } from '../data-structures/linked-list';
import { PriorityQueue } from '../data-structures/priority-queue';
import { Queue } from '../data-structures/queue';
import { Stack } from '../data-structures/stack';
import { dataStructureType } from './data-structure.enum';

type someDataStructures = 'STACK' | 'QUEUE';

type ElementaryDataStructure<T extends someDataStructures> = T extends 'STACK'
  ? Stack
  : Queue;

export { ElementaryDataStructure, someDataStructures };
