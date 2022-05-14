import { priorityQueue } from '../interfaces/data-structure.enum';

class QElement {
  public element: any;
  public priority: number;

  constructor(element: any, priority: number) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  private items: priorityQueue[];

  constructor() {
    this.items = [];
  }

  public enqueue(element: any, priority: number) {
    let qElement = new QElement(element, priority);
    let contain = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }

    if (!contain) {
      this.items.push(qElement);
    }
  }

  public first(): priorityQueue {
    return { ...this.items[0] };
  }

  public peek(): priorityQueue {
    return { ...this.items[this.items.length - 1] };
  }

  public dequeue() {
    this.items.shift();
  }

  public clear() {
    this.items.length = 0;
  }

  public has(element: any) {
    return this.items.find((item) => item === element) ? true : false;
  }

  public getSize(): number {
    return this.items.length;
  }

  public isEmpty(): boolean {
    return this.getSize() === 0;
  }

  public print() {
    let str = '';

    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i].element + ' ';
    }

    return str;
  }
}

export { PriorityQueue };
