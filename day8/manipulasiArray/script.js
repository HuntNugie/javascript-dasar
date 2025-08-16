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

