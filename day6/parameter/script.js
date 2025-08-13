// parameter dan arguments berbeda
function tambah(a,b){ // yang ada di dalam kurung disini merupakan parameter
return a+b
}
console.log(tambah(10,20)) // yang ada di dalam kurung disini merupakan arguments

// jika memiliki lebih banyak arguments di banding parameter nya
function kurang(a,b){
    return a-b
}

console.log(kurang(7,8,9)) //maka arguments yang lebih nya akan di abaikan

// jika memiliki banyak parameter nya di banding arguments nya
function kali(a,b,c){
    return a*b*c
}

console.log(kali(5,6)) // maka nilai parameter nya akan menjadi nilai default undifined

// nilai apapun yang dikirim kan ke parameter akan di tampung ke dalam variabel khusus yaitu arguments yang mirip sekali dengan array
function tambahLagi(){
    let hasil = 0
    for(let i = 0; i<=arguments.length-1;i++){
      hasil+= arguments[i]
    }
    return hasil
}
console.log(tambahLagi(1,2,3))
