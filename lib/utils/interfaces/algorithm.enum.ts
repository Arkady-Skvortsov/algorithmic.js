enum algorithmEnum {
  'LINEAR-SORT',
  'BINARY-SORT',
  'SELECTION-SORT',
  'BUBBLE-SORT',
  'QUICK-SORT',
  'MERGE-SORT',
  'SHELL-SORT',
  'HEAP-SORT',
  'SMOOTH-SORT',
  'PATIENCE-SORT',
  'RADIX-SORT',
  'COUNTING-SORT',
  'DIJKSTRAS-ALGORITHM',
  'RECURSIVE-TRAVERSAL-BINARY-TREE',
  'DIFFIE-HELLMAN-KEY-EXCHANGE',
  'FOURIER-TRANSFORM',
  'HYPER-LOG-LOG',
  'HASH-FUNCTION',
}

abstract class IAlgorithm {
  abstract getSize(): number;
  abstract print(): string;
}

export { algorithmEnum };
