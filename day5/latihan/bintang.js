// membuat bintang
let garis = ''
// for(let i = 0; i<10; i++){
//     for(let a = 0; a<5; a++){
//         garis += '*'
//     }
//     garis += '\n'
// }
// console.log(garis)

//segititga sama kaki
// for(let i = 0; i<10; i++){
//     for(let j = 10; j > i; j--){
//         garis += " "
//     }
//     for(let x = 0; x<=i; x++){
//         garis += "*"
//     }
//     for(let y = 0; y<i; y++ ){
//         garis += "*"
//     }
//     garis += "\n"
// }
// segitiga siku siku
// for(let i = 0; i<=10; i++){
//     for(let j = 0; j<i; j++){
//         garis += "*"
//     }
//     garis += "\n"
// }
// segitiga siku siku terbalik
// for(let i = 0; i<=10; i++){
//     for(let j = 10; j>i; j--){
//         garis += "*"
//     }
//     garis += "\n"
// }
// segitiga siku siku terbalik di kanan
// for(let i = 0; i<= 10; i++){
//     for(let j = 0; j<i; j++){
//         garis += " "
//     }
//     for(let x = 10; x>i; x--){
//         garis += "*"
//     }
//     garis += "\n"
// }
// segitiga siku siku di kanan
// for(let i = 0; i<= 10; i++){
//     for(j = 10; j>i; j--){
//         garis += " "
//     }
//     for(y = 0; y<= i; y++){
//         garis += "*"
//     }
//     garis += "\n"
// }
// tengah kosong 
// belah ketupat
// for(let i = 0; i<10; i++){
//     for(let j = 10; j>i ; j--){
//         garis += " "
//     }
//     for(let x = 0; x<= i; x++){
//         garis += "*"
//     }
//     for(y = 0; y< i; y++){
//         garis += "*"
//     }
//     garis += "\n"
// }
// for(let k = 0; k<=10; k++){
//     for(l = 0; l<= k ; l++){
//         garis += " "
//     }
//     for(s = 10; s>k; s--){
//         garis += "*"
//     }
//     for(d = 9; d>k; d--){
//         garis += "*"
//     }
//     garis += "\n"
// }

// catur
for(let i = 0; i<=5; i++){
    for(let j = 0; j<10; j++){
        if(j%2 === 0){
            garis+="#"
        }else{
            garis += " "
        }
    }
    garis += "\n"
    for(let d = 0; d<10; d++){
        if(d%2===1){
            garis += "#"
        }else{
            garis += " "
        }
    }
    garis += "\n"
}
console.log(garis)