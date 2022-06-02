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

const BLACK: boolean = false;
const RED: boolean = true;

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

class BinaryNode {
  public element: any;
  public left: null;
  public right: null;

  constructor(element: any) {
    this.element = element;
    this.left = null;
    this.right = null;
  }
}

class RedBlackNode extends BinaryNode {
    public key: any;
    public color: boolean;
  
    constructor(key: any, element: any) {
      super(element);

      this.key = key;
      this.color = BLACK;
    }
}

class SplayNode extends BinaryNode {
  public key: any;

  constructor(key: any, element: any) {
    super(element);

    this.key = key;
  }
}

export {
  dataStructureType,
  priorityQueue,
  graph,
  IdataStructure,
  side,
  rbtType,
  heapType,
  BinaryNode,
  RedBlackNode,
  SplayNode,
  RED,
  BLACK,
};
