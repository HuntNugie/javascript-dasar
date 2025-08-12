// belajar membuat function
// function mempunyai 2 jenis untuk membuat
// deklarasi function dan expressi function

// deklarasi function
function hello(nama){
    return `Hello ${nama}`
}
console.log(hello("Nugie kurniawan"))

// expressi function
let hallo = function(){
    return "Hello dunia"
}
console.log(hallo())

let coba = ()=>{
    return "hallo world"
}
console.log(coba())