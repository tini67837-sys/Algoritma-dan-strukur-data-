class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null; // akses node terakhir O(1)
        this.length = 0;
    }

    // =====================================
    // append(data)
    // Menambah data di akhir list
    // Big O: O(1)
    // Karena menggunakan pointer tail
    // =====================================
    append(data) {
        const newNode = new Node(data);

        // jika list kosong
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    // =====================================
    // prepend(data)
    // Menambah data di awal list
    // Big O: O(1)
    // =====================================
    prepend(data) {
        const newNode = new Node(data);

        // jika list kosong
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
    }

    // =====================================
    // insertAt(index, data)
    // Menambah data pada posisi tertentu
    // Big O: O(n)
    // =====================================
    insertAt(index, data) {

        if (index < 0 || index > this.length) {
            console.log("Index tidak valid");
            return;
        }

        // insert di awal
        if (index === 0) {
            this.prepend(data);
            return;
        }

        // insert di akhir
        if (index === this.length) {
            this.append(data);
            return;
        }

        const newNode = new Node(data);

        let current = this.head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }

        let previous = current.prev;

        previous.next = newNode;
        newNode.prev = previous;

        newNode.next = current;
        current.prev = newNode;

        this.length++;
    }

    // =====================================
    // delete(data)
    // Menghapus node berdasarkan data
    // Big O: O(n)
    // =====================================
    delete(data) {

        if (!this.head) {
            return;
        }

        let current = this.head;

        while (current) {

            if (current.data === data) {

                // hapus head
                if (current === this.head) {
                    this.head = current.next;

                    if (this.head) {
                        this.head.prev = null;
                    }
                }

                // hapus tail
                else if (current === this.tail) {
                    this.tail = current.prev;
                    this.tail.next = null;
                }

                // hapus tengah
                else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }

                this.length--;

                // jika list jadi kosong
                if (this.length === 0) {
                    this.head = null;
                    this.tail = null;
                }

                return;
            }

            current = current.next;
        }
    }

    // =====================================
    // reverse()
    // Membalik linked list
    // Big O: O(n)
    // =====================================
    reverse() {

        let current = this.head;
        let temp = null;

        while (current) {

            temp = current.prev;
            current.prev = current.next;
            current.next = temp;

            current = current.prev;
        }

        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    // =====================================
    // printForward()
    // Cetak dari depan ke belakang
    // Big O: O(n)
    // =====================================
    printForward() {

        let current = this.head;
        let result = "";

        while (current) {
            result += current.data + " <-> ";
            current = current.next;
        }

        console.log(result + "null");
    }

    // =====================================
    // printBackward()
    // Cetak dari belakang ke depan
    // Big O: O(n)
    // =====================================
    printBackward() {

        let current = this.tail;
        let result = "";

        while (current) {
            result += current.data + " <-> ";
            current = current.prev;
        }

        console.log(result + "null");
    }
}


// =====================================
// DEMO PROGRAM
// =====================================

const dll = new DoublyLinkedList();

console.log("Tambah data append:");
dll.append(10);
dll.append(20);
dll.append(30);

dll.printForward();

console.log("\nTambah data prepend:");
dll.prepend(5);

dll.printForward();

console.log("\nInsert data di index 2:");
dll.insertAt(2, 15);

dll.printForward();

console.log("\nPrint dari belakang:");
dll.printBackward();

console.log("\nHapus data 20:");
dll.delete(20);

dll.printForward();

console.log("\nReverse linked list:");
dll.reverse();

dll.printForward();

console.log("\nPrint backward setelah reverse:");
dll.printBackward();


// =====================================
// Pembuktian append O(1)
// =====================================

console.log("\nPembuktian append O(1):");
console.log(
    "Karena Doubly Linked List memiliki pointer tail, " +
    "maka penambahan node di akhir tidak perlu menelusuri " +
    "seluruh data dari head. Node baru langsung ditambahkan " +
    "ke tail sehingga append memiliki kompleksitas O(1)."
);