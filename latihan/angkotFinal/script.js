// objek angkot nya
let angkot = {
    sopir : "Nugie kurniawan",
    jurusan : "Cicaheum-sumedang",
    kas : 0,
    penumpang : {
        isiPenumpang : [],
        tambahPenumpang : function(nama){
            let penumpang = this.isiPenumpang
            if(penumpang.length == 0){
                penumpang.unshift(nama)
            }else{
                // cek apakah ada undefined jika ada isi dulu dan jangan sampai namanya sama
                let index = penumpang.findIndex((e) => e == undefined)
                // jika ada nama yang sama maka tolak
                if(penumpang.includes(nama)){
                    console.log(`${nama} sudah berada dalam angkot`)
                }else if(penumpang.includes(undefined) && !penumpang.includes(nama)){
                    penumpang.splice(index,1,nama)
                }else{
                    penumpang.push(nama)
                }
            }
            return penumpang
        },
        turunPenumpang : function(nama,uang){
            let penumpang = this.isiPenumpang
            if(penumpang.length == 0){
                console.log(`dalam angkot ${angkot.sopir} tidak ada isinya`)
            }else{
                // jika ada isinya
                let index = penumpang.findIndex((e) => e == nama)
                if(penumpang.includes(nama)){
                    penumpang.splice(index,1,undefined)
                    angkot.kas += uang
                    console.log(`${nama} sudah turun di angkot ${angkot.sopir} dengan memberikan uang Rp.${uang}`)
                }else{
                    console.log(`${nama} tidak ada di dalam angkot ${angkot.sopir}`)
                }
            }
            return penumpang
        }
    },
    displayKas : function(){
        return `uang kas angkot ${this.sopir} adalah ${this.kas}`
    }

}

// menggunakan constructor
function Angkot(sopir,jurusan){
    this.sopir = sopir
    this.jurusan = jurusan
    this.penumpang = []
    this.kas = 0

    this.fungsi = {
        tambah : (nama)=>{
            let penumpang = this.penumpang
            if(penumpang.length == 0){
                penumpang.unshift(nama)
            }else{
                // cek apakah ada undefined jika ada isi dulu dan jangan sampai namanya sama
                let index = penumpang.findIndex((e) => e == undefined)
                // jika ada nama yang sama maka tolak
                if(penumpang.includes(nama)){
                    console.log(`${nama} sudah berada dalam angkot`)
                }else if(penumpang.includes(undefined) && !penumpang.includes(nama)){
                    penumpang.splice(index,1,nama)
                }else{
                    penumpang.push(nama)
                }
            }
            return penumpang
        },
        turun : (nama,uang)=>{
            let penumpang = this.penumpang
            if(penumpang.length == 0){
                console.log(`dalam angkot ${angkot.sopir} tidak ada isinya`)
            }else{
                // jika ada isinya
                let index = penumpang.findIndex((e) => e == nama)
                if(penumpang.includes(nama)){
                    penumpang.splice(index,1,undefined)
                    this.kas += uang
                    console.log(`${nama} sudah turun di angkot ${angkot.sopir} dengan memberikan uang Rp.${uang}`)
                }else{
                    console.log(`${nama} tidak ada di dalam angkot ${angkot.sopir}`)
                }
            }
            return penumpang
        }
    }
}
let angkot1 = new Angkot("nadin","bandung-sumedang")