// variabel scope
// di javascript menganut function scope
// scope merupakan sebuah istilah untuk ruang lingkup dari suatu program dalam hal ini variabel
let a = 1 // ini adalah variable global
function tes(){
     a = 10 // ini adalah variable lokal khusus untuk function ini saja
}
tes() 
console.log(a) // ini akan menghasilkan nilai 1