class SingleLinkedList<T> {
  #head = new SLLNode<T>()
  #last = this.#head
  #size = 0
  #isEqualTo: (a: T | null, b: T | null) => boolean

  constructor(
    isEqualTo: (a: T | null, b: T | null) => boolean = (
      a: T | null,
      b: T | null
    ) => a === b
  ) {
    this.#isEqualTo = isEqualTo
  }

  get size(): number {
    return this.#size
  }

  get first(): T | null {
    return this.#head.next?.data ?? null
  }

  get last(): T | null {
    return this.#last.data
  }

  count(): number {
    let myPointer = this.#head
    let counter = 0
    while (myPointer.next !== null) {
      myPointer = myPointer.next
      ++counter
    }
    return counter
  }

  get toString(): string {
    let myPointer = this.#head
    let str = myPointer.toString
    while (myPointer.next !== null) {
      myPointer = myPointer.next
      str += `${myPointer.toString} ${myPointer.next ? '--> ' : '\n'}`
    }
    return str
  }

  isEqual<T>(
    a: T | null,
    b: T | null,
    isEqualTo: (a: T | null, b: T | null) => boolean
  ): boolean {
    return isEqualTo(a, b)
  }

  append(values: T[]): void {
    for (let i = 0; i < values.length; ++i) {
      const node = new SLLNode(values[i], null)
      this.#last.next = node
      this.#last = node
      ++this.#size
    }
  }

  insertAfterValue(targetValue: T | null, value: T): boolean {
    const target = this.findFirst(targetValue)
    if (!target) return false
    const newNode = new SLLNode(value)
    newNode.next = target.next
    if (target.next === null) this.#last = newNode
    target.next = newNode
    ++this.#size
    return true
  }

  insertAfterPosition(pos: number, value: T): boolean {
    let target: SLLNode<T> | null = null
    if (pos === this.#size - 1) target = this.#last
    else target = this.findAt(pos)
    if (!target) return false
    const newNode = new SLLNode(value)
    newNode.next = target.next
    if (target.next === null) this.#last = newNode
    target.next = newNode
    ++this.#size
    return true
  }

  findFirst(value: T | null): SLLNode<T> | null {
    if (value == null) return this.#head

    let myPointer = this.#head
    while (myPointer.next !== null) {
      if (this.isEqual(myPointer.data, value, this.#isEqualTo)) return myPointer
      myPointer = myPointer.next
    }
    return null
  }

  findAt(position: number): SLLNode<T> | null {
    if (position < 0) return this.#head
    let myPointer = this.#head.next
    while (position > 0) {
      if (!myPointer?.next) return null
      myPointer = myPointer.next
      --position
    }
    return myPointer
  }

  removeNextByValue(value: T | null): T | null {
    const target = this.findFirst(value)
    if (!target || !target.next) return null
    const nodeToDelete = target.next
    const isTail = nodeToDelete.next === null
    if (isTail) this.#last = target
    target.next = target.next.next
    nodeToDelete.next = null
    --this.#size
    return nodeToDelete.data
  }

  removeNextByPosition(pos: number): T | null {
    const target = this.findAt(pos)
    if (!target || !target.next) return null
    const nodeToDelete = target.next
    const isTail = nodeToDelete.next === null
    if (isTail) this.#last = target
    target.next = target.next.next
    nodeToDelete.next = null
    --this.#size
    return nodeToDelete.data
  }

  clear(): void {
    this.#head.next = null
    this.#last = this.#head
    this.#size = 0
  }
}

class SLLNode<T> {
  data: T | null
  next: SLLNode<T> | null

  constructor(data: T | null = null, next = null) {
    this.data = data
    this.next = next
  }

  get toString(): string {
    if (this.data == null) return this.next ? 'HEAD --> ' : 'Empty'
    return `[Current: ${JSON.stringify(this.data)} Next: ${JSON.stringify(
      this.next?.data
    )}] `
  }
}

export default SingleLinkedList
