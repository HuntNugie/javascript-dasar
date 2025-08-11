// menebak angka(jika tebakan di bawah angka tersebut di kasih tahu bahwa terlalu rendah dan jika sebaliknya tebakan nya di atas dari angka nya maka di kasih tahu bahwa terlalu tinggi) game ini ada kesempatan bermain jika kesempatan tersebut habis maka akan memunculkan hasil dari angka nya dan confirm untuk menanyakan di ulang jika bener sama angka tebakan nya maka akan menampilkan langsung dari hasilnya

// angka random 1-10
// menggunakan match floor yang berfungsi untuk membulatkan ke bawah
// menggunakan match random untuk mendapatkan nilai random nya
// di kali dengan 10 agar bisa mendapatkan hasil dari 0-10

// kesempatan
let kesempatan = 3

// selamat datang
alert("Selamat datang di game tebak angka 1-10")
// angka random 1-10
let random = Math.floor(Math.random() * 10) + 1
let hasil = false
// menangkap pilihan dari player
while(kesempatan>0){
    let player = parseInt(prompt("tebak angka (1-10)\nKesempatan yang masih anda punya adalah "+kesempatan+"\nMasukkan angka anda : "))

    // rule angka nya
    if(player === random){
        alert(`Hasil tebakan anda : Benar \nAnda memilih angka ${player} dan angka yang harus di tebak ${random}`)
        kesempatan = 0
    }else if(player < random && kesempatan!=0){
        alert("Tebakan anda masih rendah!!!")
        kesempatan--
        if(kesempatan == 0){
            alert(`Maaf kesempatan anda sudah habis : ${kesempatan} \nAnda memilih angka ${player} dan angka yang harus di tebak ${random}`)
        }
    }else if(player > random && kesempatan != 0){
        alert("Tebakan anda masih tinggi!!!")
        kesempatan--
        if(kesempatan == 0){
            alert(`Maaf kesempatan anda sudah habis : ${kesempatan} \nAnda memilih angka ${player} dan angka yang harus di tebak ${random}`)
        }
    }else{
        alert("Mohon masukkan angka yang benar")
    }
}
alert("Terima kasih")



