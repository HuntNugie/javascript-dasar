// rekursif merupakan pemanggilan function di dalam function yang akan menghasilkan looping

// ketentuan 
// harus bisa berhenti
// harus menghasilkan nilai

function rekursif(n){
    console.log(n)
    if(n===0)return; //base case tempat rekursif untuk berhenti
    return rekursif(n-1)
}

rekursif(5)
console.log("LATIHAN")
function rekursif(n) {
    console.log(n); // cetak saat turun
    if (n === 0) return; // base case, berhenti di 0
    rekursif(n - 1); // turun
    console.log(n); // cetak saat naik kembali
}

rekursif(5);
