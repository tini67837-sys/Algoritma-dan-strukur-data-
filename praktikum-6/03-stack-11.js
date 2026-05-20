class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // tambah data di depan
    prepend(data) {
        const newNode = new Node(data);

        newNode.next = this.head;
        this.head = newNode;

        this.length++;
    }

    // hapus data depan
    removeHead() {
        if (!this.head) {
            return null;
        }

        const removed = this.head.data;
        this.head = this.head.next;

        this.length--;

        return removed;
    }

    // lihat data teratas
    peekHead() {
        if (!this.head) {
            return null;
        }

        return this.head.data;
    }

    // cek kosong
    isEmpty() {
        return this.head === null;
    }

    // ukuran list
    size() {
        return this.length;
    }

    // tampilkan isi
    print() {
        let current = this.head;
        let result = "";

        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }

        console.log(result + "null");
    }
}


// =======================
// CLASS STACK
// =======================

class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    // push = tambah ke atas stack
    push(data) {
        this.list.prepend(data);
    }

    // pop = hapus data teratas
    pop() {
        return this.list.removeHead();
    }

    // lihat data teratas
    peek() {
        return this.list.peekHead();
    }

    // cek kosong
    isEmpty() {
        return this.list.isEmpty();
    }

    // ukuran stack
    size() {
        return this.list.size();
    }

    // tampilkan stack
    print() {
        this.list.print();
    }
}


// =======================
// DEMO STACK
// =======================

const stack = new Stack();

console.log("Apakah stack kosong?");
console.log(stack.isEmpty());


// simulasi aksi
const actions = [
    "Menulis A",
    "Menulis B",
    "Menulis C",
    "Menghapus teks",
    "Menambah gambar"
];

console.log("\nPush semua aksi:");

for (let action of actions) {
    console.log("Push:", action);
    stack.push(action);
}

console.log("\nIsi Stack:");
stack.print();

console.log("\nData teratas:");
console.log(stack.peek());

console.log("\nUkuran Stack:");
console.log(stack.size());


// simulasi undo
console.log("\n=== Undo ===");

console.log("Undo:", stack.pop());
console.log("Undo:", stack.pop());

console.log("\nIsi Stack setelah undo:");
stack.print();

console.log("\nUkuran Stack sekarang:");
console.log(stack.size());