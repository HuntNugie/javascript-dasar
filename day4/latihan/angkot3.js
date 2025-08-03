// angkot dengan no 8 lembur
let jumlahAngkot = 10,
    noAngkot = 1,
    angkotBeroperasi = 6,
    noAngkotLembur = 8

for(noAngkot;noAngkot <= jumlahAngkot;noAngkot++){
    if(noAngkot < angkotBeroperasi){
        console.log(`angkot no ${noAngkot} sedang beroperasi`)
    }else if(noAngkot === noAngkotLembur){
        console.log(`angkot no ${noAngkot} sedang lembur`)
    }else{
        console.log(`angkot no ${noAngkot} sedang tidak beroperasi`)
    }
}
