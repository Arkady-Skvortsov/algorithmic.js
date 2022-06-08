import { heapType } from '../interfaces/data-structure.enum';;

class Heap {
  private heap: number[];

  constructor() {
    this.heap = [];
  }

  public add(element: any): void {
    this.heap.push(element);
  }

  private maxHeapify(arr: number[], n: number, i: number): void {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

     if (l < n && arr[l] > arr[largest]) {
           largest = l;
     }

     if (r < n && arr[r] > arr[largest]) {
          largest = r;
     }

     if (largest != i) {
          let temp = arr[i];
          arr[i] = arr[largest];
          arr[largest] = temp;

        this.maxHeapify(arr, n, largest); 
      }
  }

  private minHeapify(arr: number[], n: number, i: number): void {
    let smallest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

     if (l < n && arr[l] < arr[smallest]) {
           smallest = l; 
     }

     if (r < n && arr[r] < arr[smallest]) {
          smallest = r; 
     }

     if (smallest != i) { 
          let temp = arr[i]; 
          arr[i] = arr[smallest]; 
          arr[smallest] = temp; 

        this.minHeapify(arr, n, smallest); 
      } 
  }

  public getRootOfHeap(): any {
    return this.heap[0];
  }

  public remove(element: any): void {
    const size = this.heap.length;
    let i;

    for(i = 0; i < size; i++){
      if(this.heap[i] === element) {
        break;
      }
    }
    
    [this.heap[i], this.heap[size - 1]] = [this.heap[size - 1], this.heap[i]];
    this.heap.splice(size - 1);
  }

  public findSmallestHeapNode(): any {
    return Math.min(...this.heap);
  }

  public findBiggestHeapNode(): any {
    return Math.max(...this.heap);
  }

  public removeSmallestTreeNode(): void {
    this.heap.splice(0, this.findSmallestHeapNode());
  }

  public removeBiggestTreeNode(): void {
    console.log(this.findBiggestHeapNode());
  }

  public find(element: any): any {
    return this.heap.filter(h => h === element).join();
  }

  public peek(): any {
    return this.heap[this.heap.length - 1];
  }

  public clear(): void {
    this.heap = [];
  }

  public turnIn(options: heapType) {
    for (let i = parseInt(String(this.heap.length / 2 - 1)); i >= 0; i--) {
      if (options === 'max') {
        this.maxHeapify(this.heap, this.heap.length, i); 
      }

      this.minHeapify(this.heap, this.heap.length, i);
    }

    return this;
  }

  public has(element: number): boolean {
    return this.find(element) ? true : false;
  }

  public getSize(): number {
    return this.heap.length ;
  }

  public isEmpty(): boolean {
    return this.getSize() === 0;
  }

  public print(): any[] {
    return { ...this.heap };
  }
}

export { Heap };
