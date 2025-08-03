// operator perkondisian if

let jumlahAngkot = 10
let noAngkot = 1
let angkotBeroperasi = 6

for(noAngkot ; noAngkot <= jumlahAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        console.log(`angkot no ${noAngkot} sedang beroperasi`)
    }else{
        console.log(`angkot no ${noAngkot} sedang tidak beroperasi`)
    }
}