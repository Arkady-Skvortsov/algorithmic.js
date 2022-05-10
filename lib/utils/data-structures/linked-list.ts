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

  public append(element: any) {
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

  public next() {
    let head = this.head !== null ? this.head : null;
    let node = new Nodes(head);

    console.log(head, node);
  }

  public prev() {}

  public peek() {
    let index = this.size - 1;
    let curr, prev;

    curr = this.head;

    // add the element to the
    // first index
    curr = this.head;

    // iterate over the list to find
    // the position to insert

    prev = curr;
    curr = curr.next;

    return [index, prev.next, curr.next];
  }

  public first() {
    let index = 0;
    let curr, prev;

    curr = this.head;
    prev = curr;

    if (index === 0) {
      this.head = curr.next;
    }

    return curr.element;
  }

  public find(element: any) {}

  public insertAfter(element: any, index: number) {
    if (index < 0 || index > this.size) return 'Please enter a valid index';
    else {
      let node = new Nodes(element);
      let curr, prev;

      curr = this.head;

      // add the element to the
      // first index
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        let it = 0;

        // iterate over the list to find
        // the position to insert
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // adding an element
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  public removeByIndex(index: number) {
    if (index < 0 || index >= this.size) return 'Please Enter a valid index';

    let curr,
      prev,
      it = 0;
    curr = this.head;
    prev = curr;

    if (index === 0) {
      this.head = curr.next;
    } else {
      while (it < index) {
        it++;
        prev = curr;
        curr = curr.next;
      }

      prev.next = curr.next;
    }

    this.size--;
    return curr.element;
  }

  public isEmpty() {
    return this.size === 0;
  }

  public getSize() {
    return this.size;
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
