class FactorialTime {
    constructor() {}

    private factorial(n: number): any {
        return n === 1 ? 1 : n * this.factorial(n - 1);
    }

    public check(time: number): number {
        return this.factorial(time);
    }
}

export { FactorialTime }