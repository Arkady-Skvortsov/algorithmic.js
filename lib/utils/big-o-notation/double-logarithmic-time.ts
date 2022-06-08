class DoubleLogarithmicTime {
    constructor() {}

    public check(time: number): number {
        return Math.log(Math.log(time))
    }
}

export { DoubleLogarithmicTime }