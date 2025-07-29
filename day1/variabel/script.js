// belajar tentang variabel

let nama = "Nugie kurniawan"
var names = "Muhmmad Nadin Nugraha"
const tahun = "2004"
console.log(nama)
console.log(names)

// memiliki kelakuan berbeda 

// untuk let
{
    let nama = "Alexander kurniawan"
    // console yang ini akan menampilkan alexander kurniawan
    console.log(nama);
}
// console yang ini akan menampilkan Nugie kurniawan
console.log(nama)

// untuk var
{
    var names = "Alexandria kurniawati"
    // console yang ini akan menampilkan alexandria kurniawati
    console.log(names)
}
// console yang ini juga akan menampilkan alexandria kurniawati
console.log(names)
// intinya di untuk var itu global scope, dan untuk let itu tergantung scope nya dimana di global atau di local dan akan lebih dahulukan local

// untuk const tidak bisa di ubah atau tidak bakalan error

console.log(tahun)
