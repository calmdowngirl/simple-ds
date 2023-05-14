import Stack from './Stack'

const stack = new Stack<number>()
afterEach(() => console.log(`size: ${stack.size}; ${stack.toString}`))

describe('stack', () => {
  it('should let me push items to the stack', () => {
    stack.push(0)
    expect(stack.peek).toBe(0)
    stack.push(1)
    expect(stack.peek).toBe(1)
    expect(stack.size).toBe(2)
  })

  it('should let me pop an item', () => {
    const item = stack.pop()
    expect(item).toBe(1)
    expect(stack.peek).toBe(0)
    expect(stack.size).toBe(1)
  })

  it('should clear the stack', () => {
    stack.clear()
    expect(stack.peek).toBeNull
    expect(stack.size).toBe(0)
  })
})
