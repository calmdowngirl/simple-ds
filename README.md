# Simple Data Structure

Single linked list, stack and queue implemented on single linked list

## Install

npm i simple-ds

## Example

```javascript
import { SingleLinkedList, Queue, Stack } from 'simple-ds'

console.log('------- Single Linked List ---------')
const ll = new SingleLinkedList()
console.log(
  `size: ${ll.size}; first: ${JSON.stringify(ll.first)}; last: ${JSON.stringify(
    ll.last
  )}\n${ll.toString}`
)

ll.append([1, 2])
console.log(
  `size: ${ll.size}; first: ${JSON.stringify(ll.first)}; last: ${JSON.stringify(
    ll.last
  )}\n${ll.toString}`
)

ll.insertAfterValue(null, 0)
ll.insertAfterValue(1, 5)
ll.insertAfterPosition(ll.size - 1, 3)
console.log(
  `size: ${ll.size}; first: ${JSON.stringify(ll.first)}; last: ${JSON.stringify(
    ll.last
  )}\n${ll.toString}`
)

console.log(`Data at position 3: ${ll.findAt(3).data}`)

ll.removeNextByPosition(2)
ll.removeNextByValue(5)
ll.removeNextByPosition(ll.size - 2) // remove tail
console.log(
  `size: ${ll.size}; first: ${JSON.stringify(ll.first)}; last: ${JSON.stringify(
    ll.last
  )}\n${ll.toString}`
)

ll.removeNextByValue(null) // remove first
console.log(
  `size: ${ll.size}; first: ${JSON.stringify(ll.first)}; last: ${JSON.stringify(
    ll.last
  )}\n${ll.toString}`
)

ll.clear()
console.log(
  `size: ${ll.size}; first: ${JSON.stringify(ll.first)}; last: ${JSON.stringify(
    ll.last
  )}\n${ll.toString}`
)

console.log('------- Queue ---------')
const q = new Queue()
q.enqueue(0)
q.enqueue(1)
q.enqueue(2)
console.log(`size: ${q.size}; ${q.toString}`)
console.log(`dequeued: ${q.dequeue()}`)
console.log(`size: ${q.size}; ${q.toString}`)
console.log(`dequeued: ${q.dequeue()}`)
console.log(`size: ${q.size}; ${q.toString}`)
q.clear()
console.log(`size: ${q.size}; ${q.toString}`)

console.log('------- Stack ---------')
const stack = new Stack()
stack.push(0)
stack.push(1)
stack.push(2)
console.log(`size: ${stack.size}; ${stack.toString}`)
console.log(`popped: ${stack.pop()}`)
console.log(`size: ${stack.size}; ${stack.toString}`)
console.log(`popped: ${stack.pop()}`)
console.log(`size: ${stack.size}; ${stack.toString}`)
stack.clear()
console.log(`size: ${stack.size}; ${stack.toString}`)
```
