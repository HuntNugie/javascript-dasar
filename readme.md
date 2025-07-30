# JAVASCRIPT DASAR
javascript merupakan bahasa pemograman yang di mana engine nya sudah berada di browser 

## MENJALANKAN JAVASCRIPT BISA DENGAN 4 CARA
1. Menjalankan javascipt dari browser
2. Menjalankan javascript menggunakan inline javascript
3. Menjalankan javascript menggunakan tag script
4. Menjalankan javascript menggunakan external javascript

### CONTOH MENJALANKAN JAVSCRIPT 
1. Menjalankan javascript dari browser <br>
dapat di lihat di gambar bawah ini kita dapat menambahkan script javascript di console browser <br>
<img src="img/menjalankan-browser.png" width="300px" height="350px" >

2. Menjalankan javascript menggunakan inline javascript <br>
salah satu contoh javascript inline merupakan inline event seperti onclick 
```html 
<li>dapat menjalani javascript di inline : <button onclick="alert('saya di klik')">klik saya</button></li> 
```

3. Menjalankan javascript menggunakan tag script <br>
```js 
   <!-- menggunakan tag script -->
    <script>
        console.log("Menjalankan javscript di tag script");
    </script>
 ```

4. Menjalankan javascript menggunakan external javascript <br>
**Membuat file javascript dengan format .js** <br>
<img src="img/menjalankan-external.png"> <br>
**Serta panggil file tersebut di tag script**
```html
<!-- menggunakan external javascript -->
    <script src="script.js"></script>
```
> catatan tambahan : Jika ingin menggunakan tag script harus di pasang di dalam sebelum tutup body


## VARIABEL
di dalam pemograman variabel bisa di bayangkan adalah tempat wadah menyimpan nya suatu data 

### Pembuatan variabel di javascript ada 3 cara
1. var
2. let
3. const

### Var
Var merupakan keyword di javascript yang di gunakan unutk membuat variabel. <br>
variabel yang di buat dengan keyword var akan bersifat global scope bahkan jika **variabel tersebut ada di dalam sebuah local scope**

#### Cara penggunaan
```js
// membuat variabel
var names = "Muhmmad Nadin Nugraha"
// Sifat kelakuan dari var
{
    var names = "Alexandria kurniawati"
    // console yang ini akan menampilkan alexandria kurniawati
    console.log(names)
}
// console yang ini juga akan menampilkan alexandria kurniawati
console.log(names)
```

#### hasil
```
Alexandria kurniawati
Alexandria kurniawati
```
> Catatan : Jika ingin membuat variabel jangan menggunakan var lagi karena sulit unutk di maintenence dan sudah jadul
### Let
Let merupakan sebuah  keyword di javascript yang di gunakan untuk membuat variabel. <br>
variabel yang menggunakna keyword let akan bersifat **lebih di dahulukan local scope daripada global scope** jadi ketika ada variabel di scope maka variabel tersebuat yang akan di gunakan terlebih dahulu

#### Cara penggunaan
```js
// membuat variabel
let nama = "Nugie kurniawan"
// Sifat kelakuan dari let
{
    let nama = "Alexander kurniawan"
    // console yang ini akan menampilkan alexander kurniawan
    console.log(nama);
}
// console yang ini akan menampilkan Nugie kurniawan
console.log(nama)
```
#### Hasil : 
```
Alexander kurniawan
Nugie kurniawan
```
> Catatan : Lebih di rekomendasikan jika membuat varibel menggunakan let di bandingkan Var karena agar mudah di maintenence serta agar tidak menimbulkan error ke depannya

### Const
Const merupakan salah satu dari 3 pembuatan varibel di javascript yang di gunakan untuk menampung nilai constanta(**tidak berubah**)

#### Cara Penggunaan 
```js
const TAHUN = "2004"
console.log(TAHUN)
```

#### Hasil
```
2004
```

> Catatan : Const ini di peruntukan jika data nya tidak akan pernah di ubah ubah jika data nya di tengah program di ubah maka akan menghasilkan error, serta penulisan variabel Const itu biasanya menggunakan huruf besar sebagai penanda bahwa variabel ini merupakan variabel constanta.

## TIPE DATA
Tipe data dalam pemograman merupakan tipe dari values sebuah nilai. <br>
kita bisa mengecek tipe data menggunakan typeof(typeof merupakan sebuah fitur di javascript agar bisa mengecek tipe data yang di gunakan itu tipe data apa)
### Tipe Data dalam javascript ada 4
1. String
2. Number
3. Boolean
4. Undifined

#### String
Tipe data String merupakan tipe data huruf, bisa berbentuk apapun selama ada kutip("")

#### Contoh penggunaan
```js
let string = "Ini adalah string" //ini adalah tipe data string yaitu huruf dengan tanda quotes di atas
console.log(typeof string)
```

#### Hasil
```
string
```
> Catatan : Dalam javascript jika ingin membuat string wajib menggunakan kutip

#### Number
Tipe data number merupakan tipe data yang berisi kumpulan kumpulan angka

#### Contoh penggunaan
```js
let number = 99 // ini adalah tipe data number yaitu tipe data untuk angka
console.log(typeof number)
```

#### Hasil
```
number
```

> Catatan : Dalam javascript membuat tipe data number tidak boleh menggunakan kutip karna jika memakai kutip akan di anggap sebagai string

#### Boolean
Tipe data boolean merupakan tipe data yang berisi hanya 2 nilai yaitu true or false biasanya operasi ini di gunakan dalam perkondisian, pengulangan

#### Cara Penggunaan
```js
let boolean = true // ini adalah tipe data boolean dimana hanya terdapat 2 nilai saja yaitu true dan false
console.log(typeof boolean)
```

#### Hasil
```
boolean
```

> Catatan : Tipe data boolean hanya bisa di isi true or false saja 

#### Undefined
Tipe data undifined merupakan tipe data yang tidak memiliki isi tetapi tetap ada sebagai penanda bahwa variabel tersebut tidak mempunyai data apapun di dalamnya

#### Cara Penggunaan
```js
let undefineds; //ini adalah tipe data undifined dimana artinya variabel tersebut belum mempunyai values atau nilai
console.log(typeof undefineds)
```

#### Hasil
```
undefined
```

> Catatan : tipe data undefined bisa sebagai penanda jika di dalamnya tidak terdapat apa apa serta tipe data undifined berbeda dengan tipe data null

## Operasi Aritmatika
operasi aritmatika adalah operasi matematika dasar yang menjumlahkan antara 2 atau lebih angka
bisa pertambahan, pengurangan, pembagian, perkalian, dan modulus

### Pertambahan(+)
dalam javascript dan kebanyakan bahasa pemograman lainnya untuk operasi pertambahan itu menggunakan tanda plus(+) 

#### Cara Penggunaan
```js
let a = 50
let b = 5

let c = a+b

console.log("Hasil pertambahan dari "+a+" dan "+b+" adalah "+c)
```

#### Hasil
```console
Hasil pertambahan dari 50 dan 5 adalah 55 
```

### Pengurangan(-)
dalam javascript dan kebanyakan bahasa pemograman lainnya untuk operasi pengurangan itu menggunakan tanda min(-)

#### Cara Penggunaan
```js
let a = 50
let b = 5

let c = a-b

console.log("Hasil pengurangan dari "+a+" dan "+b+" adalah "+c)
```

#### Hasil
```console
Hasil pengurangan dari 50 dan 5 adalah 45
```

### Pembagian(/)
dalam javascript dan kebanyakan bahasa pemograman lainnya untuk operasi pembagian itu menggunakan tanda slash(/)

#### Cara Penggunaan
```js
let a = 50
let b = 5

let c = a/b

console.log("Hasil pembagian dari "+a+" dan "+b+" adalah "+c)
```

#### Hasil
```console
Hasil pembagian dari 50 dan 5 adalah 10
```

### Perkalian(*)
dalam javascript dan kebanyakan bahasa pemograman lainnya untuk operasi perkalian itu menggunakan tanda bintang(*)

#### Cara Penggunaan
```js
let a = 50
let b = 5

let c = a*b

console.log("Hasil perkalian dari "+a+" dan "+b+" adalah "+c)
```

#### Hasil
```console
Hasil perkalian dari 50 dan 5 adalah 250
```

### Modulus(%)
Modulus merupakan operasi aritmatika yang akan menghasilkan sisa bagi dan menggunakan tanda persen(%) untuk operasinya

#### Cara Penggunaan
```js
let a = 50
let b = 5

let c = a%b

console.log("Hasil modulus dari "+a+" dan "+b+" adalah "+c)
```

#### Hasil
```console
Hasil modulus dari 50 dan 5 adalah 0
```

> Catatan : Untuk operasi aritmatika ini sama seperti matematika dasar pada umumnya yaitu urutan nya berdasarkan kukabataku(kurung, kali, bagi, tambah, kurang) jadi hirarki nya kurung akan lebih di utamakan terlebih dahulu