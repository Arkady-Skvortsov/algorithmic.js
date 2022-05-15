class Queue {
  private readonly queue: any[];

  constructor() {
    this.queue = [];
  }

  public enqueue(elem: any): void {
    this.queue.push(elem);
  }

  public dequeue(): void {
    this.queue.shift();
  }

  public first(): any {
    return this.queue[0];
  }

  public clear(): void {
    this.queue.length = 0;
  }

  public has(elem: any): boolean {
    return this.queue.find((q: any) => q === elem) ? true : false;
  }

  public peek(): any {
    return this.queue[this.queue.length - 1];
  }

  public getSize(): number {
    return this.queue.length;
  }

  public isEmpty(): boolean {
    return this.getSize() === 0;
  }

  public print(): any[] {
    return this.queue;
  }
}

export { Queue };
