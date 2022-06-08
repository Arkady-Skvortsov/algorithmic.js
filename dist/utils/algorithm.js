"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Algorithm = void 0;
const binary_search_1 = require("./algorithms/binary-search");
const bubble_sort_1 = require("./algorithms/bubble-sort");
const bucket_sort_1 = require("./algorithms/bucket-sort");
const counting_sort_1 = require("./algorithms/counting-sort");
const cycle_sort_1 = require("./algorithms/cycle-sort");
const dijstras_algorithm_1 = require("./algorithms/dijstras-algorithm");
const fibonacci_1 = require("./algorithms/fibonacci");
const heap_sort_1 = require("./algorithms/heap-sort");
const insertion_sort_1 = require("./algorithms/insertion-sort");
const linear_search_1 = require("./algorithms/linear-search");
const merge_sort_1 = require("./algorithms/merge-sort");
const patience_sort_1 = require("./algorithms/patience-sort");
const quick_sort_1 = require("./algorithms/quick-sort");
const radix_sort_1 = require("./algorithms/radix-sort");
const selection_sort_1 = require("./algorithms/selection-sort");
const shell_sort_1 = require("./algorithms/shell-sort");
class Algorithm {
    constructor() { }
    binarySearch() {
        return new binary_search_1.BinarySearch();
    }
    bubbleSort() {
        return new bubble_sort_1.BubbleSort();
    }
    bucketSort() {
        return new bucket_sort_1.BucketSort();
    }
    countingSort() {
        return new counting_sort_1.CountingSort();
    }
    cycleSort() {
        return new cycle_sort_1.CycleSort();
    }
    dijstrasAlgorithm() {
        return new dijstras_algorithm_1.DijstrasAlgorithm();
    }
    fibonacci() {
        return new fibonacci_1.Fibonacci();
    }
    heapSort() {
        return new heap_sort_1.HeapSort();
    }
    insertionSort() {
        return new insertion_sort_1.InsertionSort();
    }
    linearSearch() {
        return new linear_search_1.LinearSearch();
    }
    mergeSort() {
        return new merge_sort_1.MergeSort();
    }
    patienceSort() {
        return new patience_sort_1.PatienceSort();
    }
    quickSort() {
        return new quick_sort_1.QuickSort();
    }
    radixSort() {
        return new radix_sort_1.RadixSort();
    }
    selectionSort() {
        return new selection_sort_1.SelectionSort();
    }
    shellSort() {
        return new shell_sort_1.ShellSort();
    }
}
exports.Algorithm = Algorithm;
//# sourceMappingURL=algorithm.js.map