// 01-object-literal.js
// ================================================
// OBJECT LITERAL: PROPERTY, METHOD, DAN THIS
// ================================================
// --- 1. Membuat object literal ---
const mahasiswa = {
    nama : 'Budi Santoso',
    umur : 20,jurusan : 'Teknik Informatika',
    ipk : 3.75,
    aktif : true,
};

// --- 2. Mengakses property ---
console.log('=== Akses Property ===');
console.log('Nama :', mahasiswa.nama); // dot notation
console.log('Jurusan :', mahasiswa['jurusan']); // bracket notation

// Bracket notation berguna jika key disimpan di variabel
const keyYangDicari = 'ipk';
console.log('IPK :', mahasiswa[keyYangDicari]); // berguna!

// --- 3. Menambah dan mengubah property ---
mahasiswa.email = 'budi@email.com'; // tambah property baru
mahasiswa.umur = 21; // ubah nilai yang ada

console.log('\nSetelah diubah:', mahasiswa);

// --- 4. Menghapus property ---
delete mahasiswa.aktif;
console.log('Setelah delete:', mahasiswa);

// --- 5. Menambahkan method ke object ---
const dosen = {
    nama : 'Dr. Ahmad Fauzi',
    mataKuliah : 'Struktur Data',
    pengalaman : 10, // tahun

    // method: function di dalam object
    perkenalan() {
      // 'this' merujuk ke object dosen itu sendiri
       return `Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.`;
    },
    
    statusSenior() {
        if (this.pengalaman >= 10) {
            return `${this.nama} adalah dosen senior.`;
        }
        return `${this.nama} adalah dosen junior.`;
    }
};

console.log('\n=== Method Object ===');
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());

// --- 6. Iterasi key-value dengan for...in ---
console.log('\n=== Iterasi Object ===');
for (const key in dosen) {
    if (typeof dosen[key] !== 'function') { // skip method
    console.log(` ${key}: ${dosen[key]}`);
    }
}

// Object.keys(), Object.values(), Object.entries()
console.log('Keys :', Object.keys(mahasiswa));
console.log('Values:', Object.values(mahasiswa));

// ========================================
// LATIHAN 1: OBJECT BUKU & PERPUSTAKAAN
// ========================================

// 2. Object buku
const buku = {
  judul: "Laskar Pelangi",
  pengarang: "Andrea Hirata",
  tahunTerbit: 2005,
  harga: 80000,
  tersedia: true,

  // 3. Method info
  info() {
    return `${this.judul} karya ${this.pengarang} (${this.tahunTerbit}) - Harga: Rp${this.harga}`;
  },

  // 4. Method diskon
  diskon(persen) {
    return this.harga * (1 - persen / 100);
  }
};

// Uji object buku
console.log("Info Buku:");
console.log(buku.info());
console.log(`Harga setelah diskon 10%: Rp${buku.diskon(10)}`);


// ========================================
// 5. Array koleksi buku
// ========================================
const koleksiBuku = [
  {
    judul: "Laskar Pelangi",
    pengarang: "Andrea Hirata",
    tahunTerbit: 2005,
    harga: 80000,
    tersedia: true,
    info() {
      return `${this.judul} karya ${this.pengarang} (${this.tahunTerbit}) - Rp${this.harga}`;
    }
  },
  {
    judul: "Naruto Vol 1",
    pengarang: "Masashi Kishimoto",
    tahunTerbit: 1999,
    harga: 50000,
    tersedia: false,
    info() {
      return `${this.judul} karya ${this.pengarang} (${this.tahunTerbit}) - Rp${this.harga}`;
    }
  },
  {
    judul: "Atomic Habits",
    pengarang: "James Clear",
    tahunTerbit: 2018,
    harga: 120000,
    tersedia: true,
    info() {
      return `${this.judul} karya ${this.pengarang} (${this.tahunTerbit}) - Rp${this.harga}`;
    }
  }
];


// ========================================
// 6. Tampilkan semua buku
// ========================================
console.log("\n===== SEMUA BUKU =====");
koleksiBuku.forEach(b => {
  console.log(b.info());
});


// ========================================
// 7. Filter buku tersedia
// ========================================
const bukuTersedia = koleksiBuku.filter(b => b.tersedia === true);

console.log("\n===== BUKU TERSEDIA =====");
bukuTersedia.forEach(b => {
  console.log(b.info());
});