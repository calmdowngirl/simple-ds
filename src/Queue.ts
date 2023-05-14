import SingleLinkedList from './SingleLinkedList'

class Queue<T> {
  #queue: SingleLinkedList<T>
  constructor() {
    this.#queue = new SingleLinkedList<T>()
  }

  get size(): number {
    return this.#queue.size
  }

  get toString(): string {
    return this.#queue.toString
  }

  get first(): T | null {
    return this.#queue.findFirst(null)?.next?.data ?? null
  }

  peekAt(pos: number): T | null {
    return this.#queue.findAt(pos)?.data ?? null
  }

  enqueue(value: T): void {
    this.#queue.append([value])
  }

  dequeue(): T | null {
    return this.#queue.removeNextByValue(null)
  }

  clear(): void {
    this.#queue.clear()
  }
}

export default Queue
