type algorithmType =
  | 'LINEAR-SEARCH'
  | 'BINARY-SEARCHs'
  | 'SELECTION-SORT'
  | 'BUBBLE-SORR'
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
  | 'DIJKSTRAS-ALGORITHM';

interface algorithmPayload {
  array: any[];
  count: number;
}

abstract class IAlgorithm {
  abstract getSize(): number;
  abstract print(): string;
}

export { algorithmType, algorithmPayload };
