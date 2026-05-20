class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// ======================================
// Membuat Linked List dari Array
// Big O: O(n)
// ======================================
function createLinkedList(arr) {

    if (arr.length === 0) {
        return null;
    }

    let head = new Node(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }

    return head;
}

// ======================================
// Menampilkan Linked List
// Big O: O(n)
// ======================================
function printList(head) {

    let current = head;
    let result = "";

    while (current) {
        result += current.data + " -> ";
        current = current.next;
    }

    console.log(result + "null");
}

// ======================================
// 1. palindromLL(head)
// Mengecek apakah linked list palindrom
// Big O: O(n)
// ======================================
function palindromLL(head) {

    let arr = [];
    let current = head;

    // masukkan semua data ke array
    while (current) {
        arr.push(current.data);
        current = current.next;
    }

    // cek palindrom
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {

        if (arr[left] !== arr[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

// ======================================
// 2. hapusNDariAkhir(head, n)
// Menghapus node ke-n dari akhir
// Big O: O(n)
// ======================================
function hapusNDariAkhir(head, n) {

    let dummy = new Node(0);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    // maju n+1 langkah
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // gerak bersama
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    // hapus node
    slow.next = slow.next.next;

    return dummy.next;
}

// ======================================
// 3. tengahLinkedList(head)
// Mengambil node tengah
// Jika genap ambil tengah kedua
// Big O: O(n)
// ======================================
function tengahLinkedList(head) {

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

// ======================================
// PENGUJIAN PALINDROM
// ======================================

console.log("=== UJI PALINDROM ===");

let list1 = createLinkedList([1, 2, 3, 2, 1]);
printList(list1);
console.log(palindromLL(list1));

console.log();

let list2 = createLinkedList([1, 2, 2, 1]);
printList(list2);
console.log(palindromLL(list2));

console.log();

let list3 = createLinkedList([1, 2, 3]);
printList(list3);
console.log(palindromLL(list3));

// ======================================
// PENGUJIAN HAPUS N DARI AKHIR
// ======================================

console.log("\n=== UJI HAPUS N DARI AKHIR ===");

let list4 = createLinkedList([1, 2, 3, 4, 5]);
printList(list4);

list4 = hapusNDariAkhir(list4, 2);

printList(list4);

console.log();

let list5 = createLinkedList([10, 20, 30, 40]);
printList(list5);

list5 = hapusNDariAkhir(list5, 1);

printList(list5);

console.log();

let list6 = createLinkedList([7, 8, 9]);
printList(list6);

list6 = hapusNDariAkhir(list6, 3);

printList(list6);

// ======================================
// PENGUJIAN TENGAH LINKED LIST
// ======================================

console.log("\n=== UJI TENGAH LINKED LIST ===");

let list7 = createLinkedList([1, 2, 3, 4, 5]);
printList(list7);

console.log(
    "Node tengah:",
    tengahLinkedList(list7).data
);

console.log();

let list8 = createLinkedList([10, 20, 30, 40]);
printList(list8);

console.log(
    "Node tengah:",
    tengahLinkedList(list8).data
);

console.log();

let list9 = createLinkedList([100, 200, 300]);
printList(list9);

console.log(
    "Node tengah:",
    tengahLinkedList(list9).data
);