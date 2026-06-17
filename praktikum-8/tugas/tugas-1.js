class HashMapLinearProbing {
    constructor(capacity = 8) {
        this.capacity = capacity;
        this.size = 0;
        this.table = new Array(capacity).fill(null);

        // Tombstone marker
        this.DELETED = { deleted: true };
    }

    // Fungsi hash
    hash(key) {
        let hash = 0;
        const str = String(key);

        for (let i = 0; i < str.length; i++) {
            hash += str.charCodeAt(i);
        }

        return hash % this.capacity;
    }

    // Menambahkan data
    set(key, value) {

        // Resize jika load factor > 0.7
        if ((this.size + 1) / this.capacity > 0.7) {
            this.resize();
        }

        let index = this.hash(key);

        // Linear Probing
        while (
            this.table[index] !== null &&
            this.table[index] !== this.DELETED &&
            this.table[index].key !== key
        ) {
            index = (index + 1) % this.capacity;
        }

        if (
            this.table[index] === null ||
            this.table[index] === this.DELETED
        ) {
            this.size++;
        }

        this.table[index] = { key, value };
    }

    // Mengambil data
    get(key) {
        let index = this.hash(key);
        let start = index;

        while (this.table[index] !== null) {

            if (
                this.table[index] !== this.DELETED &&
                this.table[index].key === key
            ) {
                return this.table[index].value;
            }

            index = (index + 1) % this.capacity;

            if (index === start) break;
        }

        return undefined;
    }

    // Menghapus data menggunakan Tombstone Marker
    delete(key) {
        let index = this.hash(key);
        let start = index;

        while (this.table[index] !== null) {

            if (
                this.table[index] !== this.DELETED &&
                this.table[index].key === key
            ) {
                this.table[index] = this.DELETED;
                this.size--;
                return true;
            }

            index = (index + 1) % this.capacity;

            if (index === start) break;
        }

        return false;
    }

    // Resize otomatis
    resize() {
        const oldTable = this.table;

        this.capacity *= 2;
        this.table = new Array(this.capacity).fill(null);
        this.size = 0;

        for (const item of oldTable) {
            if (item !== null && item !== this.DELETED) {
                this.set(item.key, item.value);
            }
        }
    }

    // Menampilkan isi tabel
    print() {
        console.log(this.table);
    }
}

// ======================
// Pengujian Program
// ======================

const map = new HashMapLinearProbing();

map.set("nama", "Tini");
map.set("umur", 19);
map.set("kelas", "TI-1C");

console.log("Nama :", map.get("nama"));
console.log("Umur :", map.get("umur"));

map.delete("umur");

console.log("Setelah delete umur:");
console.log("Umur :", map.get("umur"));

map.print();