class Nodes {
  public element: any;
  public next: any;
  public prev: any;

  constructor(element: any) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  private head: any;
  private tail: any;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = this.head;
    this.size = 0;
  }

  public add(element: any): void {
    let newNode = new Nodes(element);

    if (this.tail) {
      this.tail.next = newNode;

      newNode.prev = this.tail;

      this.tail = newNode;
    }

    this.head = this.tail = newNode;

    this.size++;
  }

  public remove(element: any): any {
    let current = this.head;
    let prev = null;

    while (current != null) {
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }

        this.size--;
      }

      prev = current;
      current = current.next;
    }

    return -1;
  }

  public find(element: any): any {
    let head = this.head;

    while (head.element !== element) {
      head = head.next;

      if (head.element === element) {
        return element;
      }
    }

    if (head.element === element) {
      return element;
    }
  }

  public first(): any {
    return this.head.element;
  }

  public peek(): any {
    return this.tail.element;
  }

  public clear(): void {
    this.head = null;
  }

  public has(element: any): boolean {
    return this.find(element) ? true : false;
  }

  public getSize(): number {
    return this.size;
  }

  public isEmpty(): boolean {
    return this.getSize() === 0;
  }

  public next(): Object {
    let curr = this.head;

    if (curr.next !== null) {
      curr = curr.next;

      this.head = curr;
    }

    return this;
  }

  public prev(): Object {
    let curr = this.head;

    if (curr.prev !== null) {
      curr = curr.prev;

      this.head = curr;
    }

    return this;
  }

  public print(): string {
    let array = [];
    let currentList = this.head;

    while (currentList !== null) {
      array.push(currentList.element);
      currentList = currentList.next;
    }

    return array.join(' ');
  }
}

export { DoubleLinkedList };
