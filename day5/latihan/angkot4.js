let jumlahAngkot = 10
let noAngkot = 1
let angkotBeroperasi = 6

for(noAngkot;noAngkot<=jumlahAngkot;noAngkot++){
    if(noAngkot<=angkotBeroperasi){
        console.log(`angkot no ${noAngkot} sedang beroperasi`)
    }else if(noAngkot === 8 || noAngkot === 10){
        console.log(`angkot no ${noAngkot} sedang lembuar`)
    }else{
        console.log(`angkot no ${noAngkot} tidak beroperasi`)
    }
}