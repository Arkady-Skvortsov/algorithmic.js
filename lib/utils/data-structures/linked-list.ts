class Nodes {
  public element: any;
  public next: any;

  constructor(element: any) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  private head: any;
  private size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  public add(element: any): void {
    let node = new Nodes(element);
    let current;

    if (this.head == null) this.head = node;
    else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  public peek(): any {
    let curr = this.head;

    while (curr.next !== null) {
      curr = curr.next;

      if (curr === null) return curr.element;
    }

    if (curr === null) return curr.element;
  }

  public next() {
    let curr = this.head;

    if (curr.next !== null) {
      curr = curr.next;

      this.head = curr;
    }

    return this;
  }

  public has(element: any): boolean {
    return this.find(element) ? true : false;
  }

  public first(): any {
    let idx = 0;
    let curr = this.head;

    if (idx === 0) {
      this.head = curr.next;
    }

    return curr.element;
  }

  public find(element: any): any | boolean {
    let head = this.head;

    while (head.element !== element) {
      head = head.next;

      if (head.element === element) {
        return element;
      }

      return false;
    }

    if (head.element === element) {
      return element;
    }
  }

  public append(element: any, idx: number): any {
    if (idx < 0 || idx > this.size) return 'Please enter a valid index';
    else {
      let node = new Nodes(element);
      let curr, prev;

      curr = this.head;

      if (idx == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        let it = 0;

        while (it < idx) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  public remove(element: any) {
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

        return current.element;
      }

      prev = current;
      current = current.next;
    }

    return -1;
  }

  public isEmpty(): boolean {
    return this.getSize() === 0;
  }

  public clear(): void {
    this.head = null;
  }

  public getSize(): number {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  public print(): string {
    let curr = this.head;
    let str = '';

    while (curr) {
      str += curr.element + ' ';
      curr = curr.next;
    }

    return str;
  }
}

export { LinkedList };
