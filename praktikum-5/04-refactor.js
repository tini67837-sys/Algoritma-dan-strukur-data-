// 05-refactor.js — Refactoring kode berperforma buruk
// ═══════════════════════════════════════════════
// SKENARIO 1: Cek duplikat dalam array
// ═══════════════════════════════════════════════

// BURUK: O(n2) — nested loop
function adaDuplikatLambat(arr) {
  for (let i = 0; i < arr.length; i++)
    for (let j = i+1; j < arr.length; j++)
       if (arr[i] === arr[j]) return true;
  return false;
}

// BAIK: O(n) — gunakan Set
function adaDuplikatCepat(arr) {
  const seen = new Set();
  for (const x of arr) {
    if (seen.has(x)) return true;
    seen.add(x);
  }
  return false;
}

// ═══════════════════════════════════════════════
// SKENARIO 2: Frekuensi kemunculan elemen
// ═══════════════════════════════════════════════

// BURUK: O(n2) — indexOf di dalam loop
function frekuensiLambat(arr) {
  const unik = [];
  const hitung = [];
  for (const x of arr) {
    const idx = unik.indexOf(x); // O(n) di dalam loop O(n)
    if (idx === -1) { unik.push(x); hitung.push(1); }
    else hitung[idx]++;
  }
  return Object.fromEntries(unik.map((u,i) => [u, hitung[i]]));
}

// BAIK: O(n) — gunakan object/Map sebagai counter
function frekuensiCepat(arr) {
  const counter = {};
  for (const x of arr) counter[x] = (counter[x] || 0) + 1;
  return counter;
}

// ── Benchmark ──────────────────────────────
const besar = Array.from({length: 20000}, () => Math.floor(Math.random() * 1000));

let t = Date.now();
adaDuplikatLambat(besar);
console.log('Duplikat LAMBAT O(n2):', Date.now()-t, 'ms');

t = Date.now();
adaDuplikatCepat(besar);
console.log('Duplikat CEPAT O(n) :', Date.now()-t, 'ms');

const kata = ['a','b','a','c','b','a','d'];
console.log('\nFrekuensi:', frekuensiCepat(kata));


// ===============================
// LATIHAN 3: CARI PASANGAN ANGKA
// ===============================


// =====================================
// 1. Versi Lambat (Nested Loop)
// =====================================
function cariPasanganLambat(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
}

// Big O Time: O(n^2)
// Alasan: nested loop (bandingkan semua pasangan)
// Big O Space: O(1)
// Alasan: tidak pakai struktur tambahan



// =====================================
// 2. Versi Cepat (Menggunakan Set)
// =====================================
function cariPasanganCepat(arr, target) {
  const seen = new Set();

  for (let num of arr) {
    const pasangan = target - num;

    if (seen.has(pasangan)) {
      return [pasangan, num];
    }

    seen.add(num);
  }

  return null;
}

// Big O Time: O(n)
// Alasan: hanya 1 loop
// Big O Space: O(n)
// Alasan: menyimpan elemen di Set



// =====================================
// 3. UJI CONTOH KECIL
// =====================================
const arrKecil = [2, 7, 11, 15];
const targetKecil = 9;

console.log("Lambat:", cariPasanganLambat(arrKecil, targetKecil)); // [2,7]
console.log("Cepat:", cariPasanganCepat(arrKecil, targetKecil));   // [2,7]



// =====================================
// 4. UJI PERFORMA (50.000 DATA)
// =====================================

// buat array acak
const arrBesar = Array.from({ length: 50000 }, () =>
  Math.floor(Math.random() * 100000)
);

// target yang kemungkinan tidak ada
const targetBesar = -1;


// fungsi ukur waktu
function ukurWaktu(fn, arr, target, label) {
  const start = Date.now();
  const hasil = fn(arr, target);
  const end = Date.now();

  console.log(`${label} → waktu: ${end - start} ms, hasil:`, hasil);
}


// jalankan
console.log("\n===== UJI PERFORMA =====");

// ⚠️ ini sangat lambat!
ukurWaktu(cariPasanganLambat, arrBesar, targetBesar, "Lambat");

// ini cepat
ukurWaktu(cariPasanganCepat, arrBesar, targetBesar, "Cepat");



// =====================================
// 5. DISKUSI
// =====================================

// Fungsi lebih baik: cariPasanganCepat
// karena:
// - Time Complexity lebih kecil (O(n) vs O(n^2))
// - jauh lebih cepat untuk data besar

// Trade-off:
// - Versi cepat pakai memori tambahan (O(n))
// - Versi lambat hemat memori tapi sangat lambat

// Kesimpulan:
// Pilih sesuai kebutuhan:
// - Data kecil → boleh pakai yang lambat
// - Data besar → wajib pakai yang cepat