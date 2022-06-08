class LinearithmicTime {
    constructor() {}

    public check(time: number): number {
        return time * Math.log(time);
    }
}

export { LinearithmicTime }