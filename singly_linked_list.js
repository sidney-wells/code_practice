// SinglyLinkedList needs a 1) head 2) tail and 3) length

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
            const newNode = new Node(val);
            if (this.length === 0) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.length++;
            return this;
        }
        // left off here in the vid
    pop() {}
}
const list = new SinglyLinkedList();
list.push("hi");
list.push(" you");

console.log(list);