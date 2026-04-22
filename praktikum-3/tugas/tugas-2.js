// ========================================
// TUGAS 2: REKURSIF PANGKAT & PALINDROM
// ========================================


// ========================================
// 2. Fungsi Rekursif Pangkat
// ========================================
function pangkat(basis, eksponen) {
  // base case
  if (eksponen === 0) return 1;

  // recursive case
  return basis * pangkat(basis, eksponen - 1);
}


// ========================================
// 3. Fungsi Rekursif Balik String
// ========================================
function balikString(str) {
  // base case
  if (str.length <= 1) return str;

  // recursive case
  return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
}


// ========================================
// 4. Fungsi Cek Palindrom
// ========================================
function cekPalindrom(str) {
  const balik = balikString(str);
  return str === balik;
}


// ========================================
// 5. PENGUJIAN
// ========================================

// Uji pangkat
console.log("===== UJI PANGKAT =====");
console.log("2^3 =", pangkat(2, 3));
console.log("5^2 =", pangkat(5, 2));
console.log("3^4 =", pangkat(3, 4));
console.log("10^0 =", pangkat(10, 0));


// Uji balik string
console.log("\n===== UJI BALIK STRING =====");
console.log("halo →", balikString("halo"));
console.log("javascript →", balikString("javascript"));


// Uji palindrom
console.log("\n===== UJI PALINDROM =====");
const kataList = ["katak", "civic", "level", "hello"];

kataList.forEach(kata => {
  console.log(`${kata} → ${cekPalindrom(kata)}`);
});