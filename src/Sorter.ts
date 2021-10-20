/** Bubble Sort Algorythm
Is the element on the left greater than the one on the right ?
If so swap them
Implementation note : use a double for-loop to increase speed
*/

export abstract class Sorter {
  abstract length: number
  abstract compare(leftIndex: number, rightIndex: number): boolean
  abstract swap(leftIndex: number, rightIndex: number): void

  sort(): void {
    const { length } = this
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1)
        }
      }
    }
  }
}
