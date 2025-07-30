// stack

const stack = []

stack.push(21)
stack.push(22)
stack.push(47)

console.log(stack)

const lastElement = stack.pop();
console.log(lastElement)
console.log(stack)


// queue

const queue = []

queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue)

const firstElement = queue.shift();
console.log(firstElement);
console.log(queue);


// linear list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }


    addToTail(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    addToHead(value) {
        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.size++;
    }


    removeFromHead() {
        if (!this.head) return null;  // return nothing if list is empty

        const removedValue = this.head.value
        this.head = this.head.next;

        if (!this.head) {
            this.tail = null;
        }

        this.size--;
        return removedValue;
    }

    find(value) {
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next
        }

        return null;
    }


    print() {
        let currentNode = this.head;
        const values = [];

        while (currentNode) {
            values.push(currentNode.value)
            currentNode = currentNode.next;
        }

        console.log(values.join(" -> "));
    }
}


const list = new LinkedList();

list.addToTail(10);
list.addToTail(20);
list.addToHead(5);

list.print();

console.log(list.find(10));

list.removeFromHead();
list.print();
// list.removeFromTail();
list.print();



class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addToTail(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    addToHead(value) {
        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }

        this.size++;
    }

    removeFromHead() {
        if (!this.head) return null;  // return nothing if list is empty

        const removedValue = this.head.value


        if (!this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.size--;
        return removedValue;
    }

    removeFromTail() {
    if (!this.tail) return null;

    const removedValue = this.tail.value;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.size--;
    return removedValue;
  }
}

list.addToTail(10);
list.addToTail(20);
list.addToHead(5);

list.print();

console.log(list.find(10));

list.removeFromHead();
list.print();
list.removeFromTail();
list.print();



// Sets (delta)

function delta(setA, setB) {
    const result = new Set()

    for (const item in setA) {
        if (!setB.has(item)) {
            result.add(item);
        }
    }

    for (const item in setB) {
        if (!setA.has(item)) {
            result.add(item);
        }
    }


    return result
}

const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);

console.log(delta(setA, setB));



// graphs 

const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A'],
    'D': ['B'],
    'E': ['B']
};


function bfsShortestPath(graph, start, end) {
    const queue = [[start]];
    const visited = new Set([start]);

    while (queue.length > 0) {
        const path = queue.shift();
        const node = path[path.length - 1]; 

        if (node === end) return path;

        for (const neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([...path, neighbor]);
            }
        }
    }

    return null;
}


console.log(bfsShortestPath(graph, 'A', 'D'));
console.log(bfsShortestPath(graph, 'A', 'E'));
console.log(bfsShortestPath(graph, 'C', 'D'));
