import SingleLinkedList from './SingleLinkedList.js'

class Stack<T> {
  #stack: SingleLinkedList<T>
  constructor() {
    this.#stack = new SingleLinkedList()
  }

  get peek(): T | null {
    return this.#stack.findFirst(null)?.next?.data ?? null
  }

  get size(): number {
    return this.#stack.size
  }

  get toString(): string {
    return this.#stack.toString
  }

  push(value: T): void {
    this.#stack.insertAfterValue(null, value)
  }

  pop(): T | null {
    return this.#stack.removeNextByValue(null)
  }

  clear(): void {
    this.#stack.clear()
  }
}

export default Stack
