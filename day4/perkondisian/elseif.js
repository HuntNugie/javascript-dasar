// else if 

// semisalnya kita buat untuk melihat apakah bilangan tersebut bilangan bulat atau bukan dengan inputan yang bisa saja memasukkan huruf

let input = prompt("Masukkan angka : ")

if(input%2==0){
    console.log("Bilangan genap")
}else if(input%2==1){
    console.log("Bilangan ganjil")
}else{
    console.log("Yang anda masukkan bukan lah angka")
}