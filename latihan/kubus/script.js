// mencari nilai volume dari 2 kubus

function volume(sisi){
    let hasil = sisi*sisi*sisi;
    return hasil
}

function jumlahTotalKubus(a,b){
    let hasil = a+b;
    return hasil;
}

let kubusA = volume(8)
let kubusB = volume(3)

console.log(jumlahTotalKubus(kubusA,kubusB))