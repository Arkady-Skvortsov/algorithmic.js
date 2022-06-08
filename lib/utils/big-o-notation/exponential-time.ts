class ExponentialTime {
    constructor() {}

    public check(time: number): number {
        return 2 ** time;
    }
}

export { ExponentialTime }