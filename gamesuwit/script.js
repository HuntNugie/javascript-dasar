// ngetes math dulu

// console.log(Math.floor(Math.random() * 10))

// alert selamat datang
alert("Selamat datang di game suwit jawa")
do{
        // mengambil nilai dari user
    let user = parseInt(prompt("Masukan pilihan anda(1-3) \n1.Gajah \n2.semut \n3.Manusia \nMasukkan pilihan anda : "))
    switch(user){
        case 1:
            user = "gajah"
        break;
        case 2:
            user = "semut"
        break;
        case 3:
            user = "manusia"
        break;
        default :
            alert("Anda tidak memasukkan dengan benar")
            ulang = false
        break;
    }

    // mengambil nilai komputer
    let comp = Math.floor(Math.random()*10)
    if(comp <= 3){
        comp = "gajah"
    }else if(comp <=6){
        comp = "semut"
    }else{
        comp = "manusia"
    }

    // membandingkan nilai dari user dan computer
    if(user == comp){
        alert(`pilihan anda adalah ${user} pilihan komputer adalah ${comp} \n hasil akhirnya adalah imbang`)
        ulang = confirm("apakah anda mau mengulang game ? ")
    }else if(user == "gajah"){
        if(comp == "semut"){
            alert(`pilihan anda adalah ${user} pilihan komputer adalah ${comp} \n hasil akhirnya adalah computer menang`)
            ulang = confirm("apakah anda mau mengulang game ? ")
        }else if(comp == "manusia"){
            alert(`pilihan anda adalah ${user} pilihan komputer adalah ${comp} \n hasil akhirnya adalah user menang`)
            ulang = confirm("apakah anda mau mengulang game ? ")
        }
    }else if(user == "semut"){
        if(comp == "gajah"){
            alert(`pilihan anda adalah ${user} pilihan komputer adalah ${comp} \n hasil akhirnya adalah user menang`)
            ulang = confirm("apakah anda mau mengulang game ? ")
        }else if(comp == "manusia"){
            alert(`pilihan anda adalah ${user} pilihan komputer adalah ${comp} \n hasil akhirnya adalah computer menang`)
            ulang = confirm("apakah anda mau mengulang game ? ")
        }
    }else if(user == "manusia"){
        if(comp == "gajah"){
           alert(`pilihan anda adalah ${user} pilihan komputer adalah ${comp} \n hasil akhirnya adalah computer menang`)
            ulang = confirm("apakah anda mau mengulang game ? ")
        }else if(comp == "semut"){
            alert(`pilihan anda adalah ${user} pilihan komputer adalah ${comp} \n hasil akhirnya adalah user menang`)
            ulang = confirm("apakah anda mau mengulang game ? ")
        }
    }else{
        ulang = confirm("Apakah anda mau mengulang game ?")
    }
}while(ulang)





