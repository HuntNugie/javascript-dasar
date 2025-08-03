// latihan 1-6 beroperasi 7-10 tidak beroperasi
let jumlahAngkot = 10
let angkotBeropareasi = 6
let noAngkot = 1


// cara 1
// angkot beroperasi menggunakan while
while(noAngkot <= angkotBeropareasi){
    console.log("angkot No "+noAngkot+" Sedang beroperasi ")
    noAngkot++
}
// angkot tidak beroperasi menggunakan for
for(let angkot = noAngkot;angkot > angkotBeropareasi && angkot<=jumlahAngkot; angkot++){
        console.log("angkot No "+angkot+" Tidak beroperasi")
}

console.log("Cara ke dua")
// cara 2
while(noAngkot <= jumlahAngkot){
    if(noAngkot > angkotBeropareasi){
        console.log(`angkot no ${noAngkot} tidak beroperasi dengan baik`)
    }else{
        console.log(`angkot no ${noAngkot} beroperasi dengan baik`)
    }
    noAngkot++
}

