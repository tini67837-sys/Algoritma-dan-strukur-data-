// Class Pasien
class Pasien {
    constructor(id, nama, prioritas, waktuDaftar) {
        this.id = id;
        this.nama = nama;
        this.prioritas = prioritas; // darurat atau biasa
        this.waktuDaftar = waktuDaftar;
    }
}

// Class AntrianRS
class AntrianRS {
    constructor() {
        this.antrianDarurat = [];
        this.antrianBiasa = [];
    }

    // Mendaftarkan pasien
    daftar(pasien) {
        if (pasien.prioritas === "darurat") {
            this.antrianDarurat.push(pasien);
        } else {
            this.antrianBiasa.push(pasien);
        }
    }

    // Melayani pasien
    layani() {
        let pasien;

        if (this.antrianDarurat.length > 0) {
            pasien = this.antrianDarurat.shift();
        } else if (this.antrianBiasa.length > 0) {
            pasien = this.antrianBiasa.shift();
        } else {
            console.log("Tidak ada pasien dalam antrian.");
            return;
        }

        console.log(
            `Melayani Pasien: ID=${pasien.id}, Nama=${pasien.nama}, Prioritas=${pasien.prioritas}`
        );
    }

    // Menampilkan antrian
    tampilkanAntrian() {
        console.log("\n=== ANTRIAN DARURAT ===");
        this.antrianDarurat.forEach(p =>
            console.log(`${p.id} - ${p.nama}`)
        );

        console.log("\n=== ANTRIAN BIASA ===");
        this.antrianBiasa.forEach(p =>
            console.log(`${p.id} - ${p.nama}`)
        );
    }
}

// Simulasi
const rs = new AntrianRS();

const namaPasien = [
    "Andi", "Budi", "Citra", "Dina", "Eko",
    "Fajar", "Gina", "Hani", "Indra", "Joko"
];

// Daftarkan 10 pasien secara acak
for (let i = 0; i < 10; i++) {
    let prioritas = Math.random() < 0.3 ? "darurat" : "biasa";

    let pasien = new Pasien(
        i + 1,
        namaPasien[i],
        prioritas,
        new Date().toLocaleTimeString()
    );

    rs.daftar(pasien);
}

// Tampilkan antrian awal
console.log("STATUS ANTRIAN AWAL");
rs.tampilkanAntrian();

// Layani semua pasien
console.log("\n=== PROSES PELAYANAN ===");
while (
    rs.antrianDarurat.length > 0 ||
    rs.antrianBiasa.length > 0
) {
    rs.layani();
}

console.log("\nSemua pasien telah dilayani.");