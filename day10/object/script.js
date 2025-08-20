// membuat objek bisa dengan 3 cara

// object literal
let mhs = {
    nama : "Nugie kurniawan",
    nim : 24010004,
    prodi : "Teknik informatika"
}

// Cara mendapatkan isinya 
console.log(mhs.nama)
// atau
console.log(mhs["nim"])

// function declaration
function createObjek(nama,nim,prodi){
    let obj = {}
    obj.nama = nama
    obj.nim = nim
    obj.prodi = prodi
    return obj
}

// membuat instance objek nya
let mhs2 = createObjek("Nadin nugraha",24010005,"Teknik komputer jaringan")

// Cara mendapatkan isinya
console.log(mhs2.nama)
// atau
console.log(mhs2["nim"])

// constructor
function Mahasiswa(nama,nim,prodi){
    this.nama = nama
    this.nim = nim
    this.prodi = prodi
}

// membuat instance objek nya
let mhs3 = new Mahasiswa("Azib almazida",24010006,"Teknik mesin")

// Cara mendapatkan isinya
console.log(mhs3.nama)
// atau
console.log(mhs3["nim"])