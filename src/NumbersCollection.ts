import { Sorter } from './Sorter'

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super()
  }

  public get length(): number {
    return this.data.length
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    // If true, we need to swap the numbers / letters
    return this.data[leftIndex] > this.data[rightIndex]
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftValue = this.data[leftIndex]
    this.data[leftIndex] = this.data[rightIndex]
    this.data[rightIndex] = leftValue
  }
}
