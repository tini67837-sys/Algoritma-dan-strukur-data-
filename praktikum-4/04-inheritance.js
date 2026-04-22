// 04-inheritance.js
// ================================================
// INHERITANCE: EXTENDS, SUPER, OVERRIDE
// ================================================
// --- Parent Class ---
class Kendaraan {
    constructor(merk, model, tahun) {
        this.merk = merk;
        this.model = model;
        this.tahun = tahun;
        this.kecepatanSaatIni = 0;
    }
    
    akselerasi(tambahan) {
        this.kecepatanSaatIni += tambahan;
        console.log(`${this.merk} ${this.model}: kecepatan ${this.kecepatanSaatIni} km/h`);
    }
    
    rem() {
        this.kecepatanSaatIni = 0;
        console.log(`${this.merk} ${this.model}: berhenti.`);
    }
    
    info() {
        return `${this.tahun} ${this.merk} ${this.model}`;
    }
}

// --- Child Class: Mobil ---
class Mobil extends Kendaraan {
    constructor(merk, model, tahun, jumlahPintu) {
        super(merk, model, tahun); // WAJIB: panggil constructor parent
        this.jumlahPintu = jumlahPintu; // property tambahan
        }
        
        // Method baru (tidak ada di parent)
        bunyikanKlakson() {
            console.log(`${this.merk}: Beep beep!`);
        }
        
        // Override method info() dari parent
        info() {
            const infoParent = super.info(); // ambil hasil parent
            return `${infoParent} (${this.jumlahPintu} pintu)`;
        }
}

// --- Child Class: Motor ---
class Motor extends Kendaraan {
    constructor(merk, model, tahun, jenisMotor) {
        super(merk, model, tahun);
        this.jenisMotor = jenisMotor;
    }
 
    wheelie() {
        if (this.kecepatanSaatIni > 50) {
            console.log(`${this.merk}: Wheelie!`);
        } else {
            console.log('Kecepatan terlalu rendah untuk wheelie.');
        }
    }
    
    info() {
        return `${super.info()} [${this.jenisMotor}]`;
    }
}

// --- Membuat instance ---
const mobil = new Mobil('Toyota', 'Avanza', 2022, 4);
const motor = new Motor('Honda', 'CBR600RR', 2021, 'Sport');

console.log('=== Info Kendaraan ===');
console.log(mobil.info());
console.log(motor.info());

console.log('\n=== Aksi ===');
mobil.akselerasi(60); // method dari parent
mobil.bunyikanKlakson(); // method child

motor.akselerasi(80);
motor.wheelie();
motor.rem();

// --- instanceof: cek tipe object ---
console.log('\n=== instanceof ===');
console.log('mobil instanceof Mobil :', mobil instanceof Mobil); // true
console.log('mobil instanceof Kendaraan :', mobil instanceof Kendaraan); // true!
console.log('motor instanceof Mobil :', motor instanceof Mobil); // false

// --- Polymorphism: method info() berbeda untuk tiap class ---
console.log('\n=== Polymorphism ===');
const semuaKendaraan = [mobil, motor];
semuaKendaraan.forEach(k => console.log(k.info()));


// ========================================
// LATIHAN 4: HIERARKI CLASS HEWAN
// ========================================

// 2. Parent class
class Hewan {
  constructor(nama, suara) {
    this.nama = nama;
    this.suara = suara;
  }

  bersuara() {
    console.log(`${this.nama} berkata: ${this.suara}`);
  }

  info() {
    console.log(`Nama hewan: ${this.nama}`);
  }
}


// ========================================
// 3. Child class Anjing
// ========================================
class Anjing extends Hewan {
  constructor(nama, suara) {
    super(nama, suara);
  }

  fetch() {
    console.log(`${this.nama} mengambil bola!`);
  }

  // override method info
  info() {
    console.log(`Nama hewan: ${this.nama} (jenis: anjing)`);
  }
}


// ========================================
// 4. Child class Kucing
// ========================================
class Kucing extends Hewan {
  constructor(nama, suara) {
    super(nama, suara);
  }

  cakarSofa() {
    console.log(`${this.nama} mencakar sofa!`);
  }

  // override method bersuara
  bersuara() {
    super.bersuara();
    console.log("Purrr...");
  }
}


// ========================================
// 5. Membuat instance
// ========================================
const anjing1 = new Anjing("Bobby", "Guk guk");
const anjing2 = new Anjing("Rocky", "Woof woof");

const kucing1 = new Kucing("Mimi", "Meong");
const kucing2 = new Kucing("Luna", "Miaw");


// ========================================
// 6. Polymorphism dengan array
// ========================================
const semuaHewan = [anjing1, anjing2, kucing1, kucing2];

console.log("===== SEMUA HEWAN =====");

semuaHewan.forEach(hewan => {
  hewan.bersuara();
  hewan.info();
  console.log("-------------------");
});


// ========================================
// Tambahan uji method khusus
// ========================================
console.log("\n===== METHOD KHUSUS =====");

anjing1.fetch();
kucing1.cakarSofa();