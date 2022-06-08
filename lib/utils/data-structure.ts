import { BinaryTree } from './data-structures/binary-tree';
import { DoubleLinkedList } from './data-structures/double-linked-list';
import { Graph } from './data-structures/graph';
import { HashTable } from './data-structures/hash-table';
import { Heap } from './data-structures/heap';
import { LinkedList } from './data-structures/linked-list';
import { PriorityQueue } from './data-structures/priority-queue';
import { Queue } from './data-structures/queue';
import { RedBlackTree } from './data-structures/red-black-tree';
import { SplayTree } from './data-structures/splay-tree';
import { Stack } from './data-structures/stack';

class DataStructure {
  public binaryTree(): BinaryTree {
    return new BinaryTree();
  }

  public stack(): Stack {
    return new Stack();
  }

  public linkedList(): LinkedList {
    return new LinkedList();
  }

  public doubleLinkedList(): DoubleLinkedList {
    return new DoubleLinkedList();
  }

  public graph(): Graph {
    return new Graph();
  }

  public priorityQueue(): PriorityQueue {
    return new PriorityQueue();
  }

  public hashTable(): HashTable {
    return new HashTable();
  }

  public queue(): Queue {
    return  new Queue();
  }

  public splayTree(): SplayTree {
    return new SplayTree();
  }

  public redBlackTree(): RedBlackTree {
    return new RedBlackTree();
  }

  public heap(): Heap {
    return new Heap();
  }
}

export { DataStructure };
