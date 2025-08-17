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

// foreach
// foreach berfungsi untuk menampilkan isi dari array(tidak menghasilkan array baru) jadi murni akan menggunakan array aslinya, dan foreach tidak bisa menggunaakn return jadi tidak akan mengembalikan nilai apapun
// array.forEach(callback function(element,index,array asli))
mahasiswa.forEach(function(e){
    console.log(e)
})

// map berfungsi untuk bisa menghasilkan array baru dari array yang di gunakan serta bisa transformasi isinya, karna akan menghasilkan array baru best practice nya disimpan di variabel agar variable tersebut di isi dengan array baru serta wajib menggunaakan return agar dapat mengembalikan isi dari array nya
angka = [1,7,5,2,3,5]
let bru = angka.map(function(e){
    return e * 2
})
bru.forEach(function(e){
    console.log(e)
})

// sort berfungsi untuk mengsortir element array 
// sort akan menghasilkan 3 nilai 
// negatif akan menghasilkan nilai lebih kecil (<0)
// positif akan menghasilkan nilai yang lebih besar (>0)
// 0 akan menghasilkan nilai yang sama (0)
bru.sort(function(a,b){
    return a-b //berarti akan mengurutkan dari yang terkecil
})
console.log(bru.join())


// filter dan find

// filter berfungsi untuk mencari element array dan akan mengembalikan array baru sehingga mencari menggunakan filter itu bagus untuk mencari lebih dari satu nilai
// filter akan selalu mengembalikan array baru
let arrayBaru = angka.filter(function(e){
    return e % 2 == 1
})

console.log(arrayBaru.join())

// find berfungsi untuk mencari 1 saja element array dan jika yang di temukan nya banyak akan hanya menghasilkan element array yang pertama ditemukan sesuai urutan index array nya, dan find tidak akan mengembalikan array baru tetapi hanya akan mengembalikan 1 nilai yang di temukan saja

let cari = arrayBaru.find(function(e){
    return e === 3
})

console.log(cari)