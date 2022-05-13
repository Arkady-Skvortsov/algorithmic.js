class Nodes {
  public element: any;
  public next: any;
  public prev: any;

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

  public add(element: any) {
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
  }

  public peek() {
    let curr = this.head;

    while (curr.next !== null) {
      curr = curr.next;

      if (curr === null) return curr.element;
    }

    if (curr === null) return curr.element;
  }

  public has(element: any) {
    let curr = this.head;

    if (curr.element !== element) {
      curr = curr.next;

      if (curr.next.element === element) {
        return true;
      }

      return false;
    } else {
      return true;
    }
  }

  public first() {
    let idx = 0;
    let curr = this.head;

    if (idx === 0) {
      this.head = curr.next;
    }

    return curr.element;
  }

  public find(element: any) {
    let head = this.head;

    while (head.element !== element) {
      head = head.next;

      if (head.element === element) {
        return element;
      }

      return -1;
    }

    if (head.element === element) {
      return element;
    }
  }

  public insertAfter(element: any, idx: number) {
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

  public isEmpty() {
    return this.size === 0;
  }

  public getSize() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  public print() {
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
