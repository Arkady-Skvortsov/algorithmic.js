interface algorithmPayload {
  array: any[] | number;
  count: number;
}

abstract class IAlgorithm {
  abstract run<T extends number>(array: T[]): algorithmPayload;
}

export { algorithmPayload };
