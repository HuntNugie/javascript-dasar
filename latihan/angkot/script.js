// juragan angkot

let penumpang = []

// function tambahPenumpang(nama,array){
//     // jika array ksoong
//     if(array.length == 0){
//         array.unshift(nama)
//         return array
//     }

//     // jika ada isinya
//     // array.forEach(function(e,i,array){
//     //     // jika nilai nya undifined
//     //     if(e == undefined){
//     //         array.splice(i,1,nama)
//     //         console.log(array)
//     //     }
//     //     // jika nilai nya sama dengan nilai yang sudah ada
//     //     else if(e == nama){
//     //         console.log(`nama dengan ${nama} sudah berada di dalam angkot`)
//     //     }else{
//     //         array.push(nama)
//     //         console.log(array)
//     //     }        
//     // })

//     for(let i = 0; i<array.length;i++){
//        if(array[i] == undefined){
//             array.splice(i,1,nama)
//             return array
//        }
//     //    cek jika nama nya sama
//        if(array[i] == nama){
//         return `nama dengan ${nama} sudah berada di dalam angkot`
//        }
//     }

  
//     // jika di atas sudah
//     array.push(nama)
//     return array
   
// }

// versi 2

function tambahPenumpang(nama,array){
    // cek jika tidak ada sama sekali penumpang
    if(array.length == 0){
        array.unshift(nama)
        return array
    }else if(array.includes(undefined) || array.includes(nama)){
        let tolak = false;
        array.forEach((e,i,arr) =>{
            // cek jika ada nilai yang sama maka tolak
            if(e == nama){
                console.log(`nama ${nama} telah berada di angkot`)
                tolak = true;
            }
            // cek jika ada nilai undefined maka di isi terlebih dahulu
            if(e == undefined && !tolak){
                arr.splice(i,1,nama)
            }
            
        })
        return array
    }else{
        array.push(nama)
        return array
    }
    
}