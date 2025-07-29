# JAVASCRIPT DASAR
javascript merupakan bahasa pemograman yang di mana engine nya sudah berada di browser 

## MENJALANKAN JAVASCRIPT BISA DENGAN 4 CARA
1. Menjalankan javascipt dari browser
2. Menjalankan javascript menggunakan inline javascript
3. Menjalankan javascript menggunakan tag script
4. Menjalankan javascript menggunakan external javascript

### CONTOH MENJALANKAN JAVSCRIPT 
1. Menjalankan javascript dari browser <br>
dapat di lihat di gambar bawah ini kita dapat menambahkan script javascript di console browser
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