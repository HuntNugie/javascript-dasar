// belajar membuat object di javascript
// object merupakan struktur data yang berupa pasangan key dan value

let mhs = {
    nama:"Nugie kurniawan",
    kelas : "A2024",
    prodi : "Teknik informatika D3",
    semester : 3,
    ips : [3.67,4.0],
    alamat : {
        rumah : "Perumahan bumi sangkuriang 4 block C3",
        kec : "tanjungsari",
        kab : "kab sumedang",
        provinsi : "jawa barat"
    },
    ipkAkumulatif : function(){
        let hasil = 0
        this.ips.forEach((e) => {
            hasil += e
        })
        return hasil / this.ips.length
    }
}
