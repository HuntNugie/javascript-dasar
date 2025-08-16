// memanipulasi array
// menambah, menghapus, menampilkan array

// menambah array dari array kosong
let arr = []
arr[0] = "Nugie kurniawan"
arr[1] = "Muhammad nadin nugraha"

console.log(arr[0])

// menghapus array (merubah isi array menjadi nilai default yaitu undifined) manual
arr[1] = undefined
arr[2] = "Muhammad nadin nugraha"
console.log(arr)

// menampilkan seluruh array
for(let i = 0; i<arr.length;i++){
    console.log(`mahasiswa ke ${i+1} ${arr[i]}`)
}


// method di array ada banyak
// join untuk menampilkan seluruh isi array dalam bentuk string text

console.log(arr.join())

// push dan pop
// push berfungsi untuk menambahkan di element terakhir array
// push dapat menambahkan lebih dari satu data saja
arr.push("Raka sagraha")
console.log(arr.join("-"))

// pop berfungsi untuk menghapus di element terakhir array
arr.pop();
console.log(arr.join("-"))

// unshift dan shift 
// unshift berfungsi untuk menambahkan di element pertama array
arr.unshift("alexander kurniawan")
console.log(arr.join("-"))

// shift berfungsi untuk menghapus di element pertama array
arr.shift()
console.log(arr.join("-"))

let mahasiswa = ["Nugie","kurniawan","alexander","nadin","nugraha"]
// splice dan slice
// splice untuk menambahkan/menghapus/mengganti element array di index tertentu yang di pilih
// splice(index awal mulai,mau berapa yang di hapus,datanya)
// jika tidak ada yang di hapus akan menambahkan data nya sebelum index awal yang di pilih
// jika ada yang mau di hapus maka yang pertama yang di hapus adalah dimulai dari index awal yang di pilih
console.log(mahasiswa.join())
mahasiswa.splice(2,0,"alexandria") // di mulai dari alexander karna tidak ada yang mau di hapus maka element baru akan di sisipkan sebelum alexander
console.log(mahasiswa.join())

// slice
// slice(index awal, index terakhir) index awal akan di ambil dan index terakhir tidak akan di ambil menjadi array yang baru
// slice berfungsi untuk menyalin element array yang di pilih dan di jadikan array baru sehingga slice itu akan menghasilkan array baru yang telah di pilih
let baru = mahasiswa.slice(1,3) // ini akan menghasilkan array baru yang hanya mengambil dari element array mahasiswa dari index 1-2 karna element terakhir yang di set itu tidak akan kebawa jadi dalam kasus ini tidak akan mengambil index ke 3 hanya mengambil index ke 1 dan 2
console.log(baru.join("-")) 