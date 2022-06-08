"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heap = void 0;
;
class Heap {
    heap;
    constructor() {
        this.heap = [];
    }
    add(element) {
        this.heap.push(element);
    }
    maxHeapify(arr, n, i) {
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
    minHeapify(arr, n, i) {
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
    getRootOfHeap() {
        return this.heap[0];
    }
    remove(element) {
        const size = this.heap.length;
        let i;
        for (i = 0; i < size; i++) {
            if (this.heap[i] === element) {
                break;
            }
        }
        [this.heap[i], this.heap[size - 1]] = [this.heap[size - 1], this.heap[i]];
        this.heap.splice(size - 1);
    }
    findSmallestHeapNode() {
        return Math.min(...this.heap);
    }
    findBiggestHeapNode() {
        return Math.max(...this.heap);
    }
    removeSmallestTreeNode() {
        this.heap.splice(0, this.findSmallestHeapNode());
    }
    removeBiggestTreeNode() {
        console.log(this.findBiggestHeapNode());
    }
    find(element) {
        return this.heap.filter(h => h === element).join();
    }
    peek() {
        return this.heap[this.heap.length - 1];
    }
    clear() {
        this.heap = [];
    }
    turnIn(options) {
        for (let i = parseInt(String(this.heap.length / 2 - 1)); i >= 0; i--) {
            if (options === 'max') {
                this.maxHeapify(this.heap, this.heap.length, i);
            }
            this.minHeapify(this.heap, this.heap.length, i);
        }
        return this;
    }
    has(element) {
        return this.find(element) ? true : false;
    }
    getSize() {
        return this.heap.length;
    }
    isEmpty() {
        return this.getSize() === 0;
    }
    print() {
        return { ...this.heap };
    }
}
exports.Heap = Heap;
const heap = new Heap();
heap.add(100);
heap.add(20);
heap.add(50);
console.log(heap.turnIn("max").getRootOfHeap());
//# sourceMappingURL=heap.js.map