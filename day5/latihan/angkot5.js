let jumlahAngkot = 10
let noAngkot = 1
let angkotBeroperasi = 6
let angkotLembur = [5,8,10]

for(noAngkot;noAngkot<=jumlahAngkot;noAngkot++){
    if(noAngkot<=angkotBeroperasi && angkotLembur.indexOf(noAngkot) === -1){
        console.log(`angkot no ${noAngkot} sedang beroperasi`)
    }else if(angkotLembur.indexOf(noAngkot) !== -1 ){
        console.log(`angkot no ${noAngkot} sedang lembuar`)
    }else{
        console.log(`angkot no ${noAngkot} tidak beroperasi`)
    }
}