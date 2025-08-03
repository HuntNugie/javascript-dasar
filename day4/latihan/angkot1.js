// latihan membuat app juragan angkot
// cetak juragan angkot 1 sampai 10
let angkot = 1
while(angkot <= 10){
    console.log(`Angkot no ${angkot} Beroperasi dengan baik`)
    angkot++
}

// mencoba dengan user yang menentukan bahwa beroperasi dengna baik atau tidak
let angka = prompt("Masukan mau berapa angkot")
let hitungan = 1
while(hitungan <= angka){
    let tanya = confirm(`Apakah angkot No ${hitungan} beroperasi dengan baik ? `)
    if(tanya){
        console.log(`Angkot no ${hitungan} beroperasi dengan baik`)
    }else{
        console.log(`Angkot no ${hitungan} tidak beroperasi dengan baik`)
    }
    hitungan++
}