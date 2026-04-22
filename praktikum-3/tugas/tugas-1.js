// ========================================
// TUGAS 1: SISTEM NILAI MAHASISWA
// ========================================

// 2. Data mahasiswa
const dataMahasiswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 70 },
  { nama: "Citra", nilai: 92 },
  { nama: "Dina", nilai: 60 },
  { nama: "Eka", nilai: 78 },
  { nama: "Fajar", nilai: 55 }
];


// ========================================
// 3. Fungsi hitung statistik (reduce)
// ========================================
function hitungStatistik(arrMahasiswa) {
  const hasil = arrMahasiswa.reduce((acc, mhs, index, arr) => {
    acc.total = arr.length;
    acc.jumlahNilai += mhs.nilai;

    if (mhs.nilai > acc.tertinggi) acc.tertinggi = mhs.nilai;
    if (mhs.nilai < acc.terendah) acc.terendah = mhs.nilai;

    return acc;
  }, {
    total: 0,
    jumlahNilai: 0,
    tertinggi: -Infinity,
    terendah: Infinity
  });

  hasil.rataRata = hasil.jumlahNilai / hasil.total;
  delete hasil.jumlahNilai;

  return hasil;
}


// ========================================
// 4. Filter mahasiswa lulus
// ========================================
function filterLulus(arrMahasiswa, batasLulus) {
  return arrMahasiswa.filter(mhs => mhs.nilai >= batasLulus);
}


// ========================================
// 5. Tambah grade (map)
// ========================================
function tambahGrade(arrMahasiswa) {
  return arrMahasiswa.map(mhs => {
    let grade;

    if (mhs.nilai >= 85) grade = "A";
    else if (mhs.nilai >= 75) grade = "B";
    else if (mhs.nilai >= 65) grade = "C";
    else if (mhs.nilai >= 50) grade = "D";
    else grade = "E";

    return { ...mhs, grade };
  });
}


// ========================================
// 6. PEMANGGILAN & OUTPUT
// ========================================
console.log("===== DATA MAHASISWA =====");
dataMahasiswa.forEach((mhs, i) => {
  console.log(`${i + 1}. ${mhs.nama} - Nilai: ${mhs.nilai}`);
});

// Statistik
const statistik = hitungStatistik(dataMahasiswa);
console.log("\n===== STATISTIK =====");
console.log(`Total Mahasiswa: ${statistik.total}`);
console.log(`Rata-rata Nilai: ${statistik.rataRata.toFixed(2)}`);
console.log(`Nilai Tertinggi: ${statistik.tertinggi}`);
console.log(`Nilai Terendah: ${statistik.terendah}`);

// Filter lulus
const lulus = filterLulus(dataMahasiswa, 75);
console.log("\n===== MAHASISWA LULUS (>=75) =====");
lulus.forEach(mhs => {
  console.log(`${mhs.nama} - ${mhs.nilai}`);
});

// Tambah grade
const denganGrade = tambahGrade(dataMahasiswa);
console.log("\n===== DATA DENGAN GRADE =====");
denganGrade.forEach(mhs => {
  console.log(`${mhs.nama} - Nilai: ${mhs.nilai} - Grade: ${mhs.grade}`);
});