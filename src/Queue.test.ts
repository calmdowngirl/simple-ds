import Queue from './Queue'

const q = new Queue<number>()
afterEach(() => console.log(`size: ${q.size}; ${q.toString}`))

describe('Queue', () => {
  it('should enqueue', () => {
    expect(q.size).toBe(0)
    q.enqueue(0)
    expect(q.size).toBe(1)
    expect(q.first).toBe(0)
    q.enqueue(1)
    expect(q.size).toBe(2)
    expect(q.first).toBe(0)
    expect(q.peekAt(0)).toBe(0)
    expect(q.peekAt(1)).toBe(1)
    q.enqueue(2)
  })

  it('should dequeue', () => {
    expect(q.size).toBe(3)
    q.dequeue()
    expect(q.size).toBe(2)
    expect(q.first).toBe(1)
    q.dequeue()
    expect(q.size).toBe(1)
    expect(q.first).toBe(2)
  })

  it('should clear the queue', () => {
    q.clear()
    expect(q.first).toBeNull
    expect(q.size).toBe(0)
  })
})
