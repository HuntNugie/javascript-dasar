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

> Catatan : Const ini di peruntukan jika data nya tidak akan pernah di ubah ubah jika data nya di tengah program maka akan menghasilkan error, serta penulisan variabel Const itu biasanya menggunakan huruf besar sebagai penanda bahwa variabel ini merupakan variabel constanta.