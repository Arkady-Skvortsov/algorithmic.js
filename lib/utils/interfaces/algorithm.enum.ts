type algorithmType =
  | 'LINEAR-SORT'
  | 'BINARY-SORT'
  | 'SELECTION-SORT'
  | 'BUBBLE-SORT'
  | 'QUICK-SORT'
  | 'MERGE-SORT'
  | 'SHELL-SORT'
  | 'HEAP-SORT'
  | 'SMOOTH-SORT'
  | 'FIBONACCI-NUMBERS'
  | 'PATIENCE-SORT'
  | 'RADIX-SORT'
  | 'COUNTING-SORT'
  | 'INSERTION-SORT'
  | 'BUCKET-SORT'
  | 'CYCLE-SORT'
  | 'DIJKSTRAS-ALGORITHM'
  | 'RECURSIVE-TRAVERSAL-BINARY-TREE'
  | 'DIFFIE-HELLMAN-KEY-EXCHANGE'
  | 'FOURIER-TRANSFORM'
  | 'HYPER-LOG-LOG'
  | 'HASH-FUNCTION';

interface algorithmPayload {
  array: any[];
  count: number;
}

abstract class IAlgorithm {
  abstract getSize(): number;
  abstract print(): string;
}

export { algorithmType, algorithmPayload };
