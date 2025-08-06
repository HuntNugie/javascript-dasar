// belajar switch case di javascript
alert("Selamat anda memasuki mistery gift : ")
// menggunakan parseInt untuk konversi nilai dari prompt nya yang asalnya string menjadi integer
let angka = parseInt(prompt("Masukan angka 1-10 : "))

switch(angka){
    case 1 : 
        alert("Selamat anda mendapatkan sebuah hp samsung s25 ultra")
    break;
    case 2 : 
        alert("Selamat anda mendapatkan sebuah mechanical keyboard")
    break;
    case 3 :
        alert("Selamat anda mendapatkan sebuah mouse wireless logitech")
    break;
    case 4 :
        alert("Selamat anda mendapatkan sebuah laptop hp zbook 17 G5")
    break;
    case 5 :
        alert("Anda zoonk tidak mendapatkan apapun ")
    break;
    case 6 :
        alert("Selamat anda mendapatkan uang 100 Ribu rupiah")
    break;
    case 7 :
        alert("anda zoonk tidak mendapatkan apapun ")
    break;
    case 8 :
        alert("Selamat anda memenangkan lotre 1 miliar rupiah")
    break;
    case 9 :
        alert("Anda zoonk tidak mendapatkan apapun")
    break;
    case 10 :
        alert("Selamat anda mendapatkan cewe yang anda cintai")
    break;
    default :
        alert("Anda tidak memasukkan angka yang sudah di tetapkan")
    break;
}

