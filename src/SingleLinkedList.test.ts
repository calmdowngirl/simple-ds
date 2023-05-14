import SingleLinkedList from './SingleLinkedList'

const ll = new SingleLinkedList<number>()
afterEach(() =>
  console.log(
    `size: ${ll.size}; first: ${JSON.stringify(
      ll.first
    )}; last: ${JSON.stringify(ll.last)}\n${ll.toString}`
  )
)
describe('SingleLinkedList', () => {
  it('should create an empty linked list', () => {
    expect(ll.size).toBe(0)
    expect(ll.toString).toBe('Empty')
  })

  it('should let me append multiple nodes to the list', () => {
    ll.append([1, 2])
    expect(ll.size).toBe(2)
    expect(ll.findFirst(1)?.data).toBe(1)
    expect(ll.findFirst(1)?.next?.data).toBe(2)
  })

  it('should let me insert node to the list', () => {
    ll.insertAfterValue(null, 0)
    ll.insertAfterValue(1, 5)
    expect(ll.size).toBe(4)
    expect(ll.findFirst(0)).not.toBeNull
    expect(ll.findFirst(5)).not.toBeNull
    ll.insertAfterPosition(ll.size - 1, 3)
    expect(ll.size).toBe(5)
    expect(ll.findFirst(3)).not.toBeNull
  })

  it('should give me the third node', () => {
    const node = ll.findAt(3)
    expect(node?.data).toBe(2)
  })

  it('should be able to remove node by position or value from the list', () => {
    ll.removeNextByPosition(2)
    ll.removeNextByValue(5)
    ll.removeNextByPosition(ll.size - 2) // remove tail
    expect(ll.size).toBe(ll.count())
    expect(ll.size).toBe(2)
    expect(ll.findFirst(5)).toBeNull
    expect(ll.findFirst(2)).toBeNull
    expect(ll.findFirst(3)).toBeNull
  })

  it('should remove the first node from the list', () => {
    ll.removeNextByValue(null) // remove first
    expect(ll.size).toBe(1)
    expect(ll.size).toBe(ll.count())
    expect(ll.findFirst(null)?.next?.data).toBe(ll.findAt(0)?.data)
  })

  it('should clear the list', () => {
    ll.clear()
    expect(ll.findFirst(null)?.next).toBeNull
    expect(ll.size).toBe(0)
  })
})
