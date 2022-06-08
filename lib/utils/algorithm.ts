import { BinarySearch } from "./algorithms/binary-search";
import { BubbleSort } from "./algorithms/bubble-sort";
import { BucketSort } from "./algorithms/bucket-sort";
import { CountingSort } from "./algorithms/counting-sort";
import { CycleSort } from "./algorithms/cycle-sort";
import { DijstrasAlgorithm } from "./algorithms/dijstras-algorithm";
import { Fibonacci } from "./algorithms/fibonacci";
import { HeapSort } from "./algorithms/heap-sort";
import { InsertionSort } from "./algorithms/insertion-sort";
import { LinearSearch } from "./algorithms/linear-search";
import { MergeSort } from "./algorithms/merge-sort";
import { PatienceSort } from "./algorithms/patience-sort";
import { QuickSort } from "./algorithms/quick-sort";
import { RadixSort } from "./algorithms/radix-sort";
import { SelectionSort } from "./algorithms/selection-sort";
import { ShellSort } from "./algorithms/shell-sort";

class Algorithm {
  constructor() {}

  public binarySearch(): BinarySearch {
    return new BinarySearch();
  }

  public bubbleSort(): BubbleSort {
    return new BubbleSort();
  }

  public bucketSort(): BucketSort {
    return new BucketSort();
  }

  public countingSort(): CountingSort {
    return new CountingSort();
  }

  public cycleSort(): CycleSort {
    return new CycleSort();
  }

  public dijstrasAlgorithm(): DijstrasAlgorithm {
    return new DijstrasAlgorithm();
  }

  public fibonacci(): Fibonacci {
    return new Fibonacci();
  }

  public heapSort(): HeapSort {
    return new HeapSort();
  }

  public insertionSort(): InsertionSort {
    return new InsertionSort();
  }

  public linearSearch(): LinearSearch {
    return new LinearSearch();
  }

  public mergeSort(): MergeSort {
    return new MergeSort();
  }

  public patienceSort(): PatienceSort {
    return new PatienceSort();
  }

  public quickSort(): QuickSort {
    return new QuickSort();
  }

  public radixSort(): RadixSort {
    return new RadixSort();
  }

  public selectionSort(): SelectionSort {
    return new SelectionSort();
  }

  public shellSort(): ShellSort {
    return new ShellSort();
  }
}

export { Algorithm };
