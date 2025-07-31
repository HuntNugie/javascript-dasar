// pop up box merupakan sebuah dialog nontifikasi yang akan muncul di halaman browser
// contohnya disini saya akan membuat sebuah program sederhana untuk membuat ktp jika masih ada beberapa yang anda tidak mengerti lanjut saja dulu
// alert
alert("Hello world")
prompt("Masukan nama anda")
confirm("Anda yakin ?")



function bikin() {
    let nama = prompt("Masukan nama anda : ");
    let umur = prompt(nama + " sekarang berapa umur anda : ");
    if (umur < 18) {
        alert("maaf umur anda tidak cukup untuk membuat ktp");
        return false;
    }
    let agama = prompt("Masukkan agama anda");
    return tampil(nama, umur, agama);
}
function tampil(nama, umur, agama) {
    alert("Berikut ktp anda");
    alert(`Nama : ${nama} \n umur : ${umur} \n agama : ${agama}`);
    return confirm("Apakah anda mau buat ktp lagi?");
}

alert("Terima kasih telah datang di pembuatan ktp");
let conp = confirm("Anda yakin mau lanjut bikin ktp ?");
while (conp) {
    conp = bikin();
}
alert("terima kasih sudah menggunakan layanan kami");
