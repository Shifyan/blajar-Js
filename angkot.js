let angkot = []

function tambahPenumpang (nama, angkot){
    if (angkot.length == 0){
        angkot.push(nama)
        return angkot
    }else{
        for (i=0; i<angkot.length; i++){
            if(angkot[i]==undefined){
                angkot[i] = nama
                return angkot
            }else if(angkot[i]==nama){
                console.log(`Nama ${nama} Sudah Terdaftar di Dalam Angkot!`)
                return angkot
            }else if(i == angkot.length-1){
                angkot.push(nama)
                return angkot
            }
        }
    }
}

function hapusPenumpang (nama, angkot){
    if(angkot.length == 0 ){
        console.log(`Nama ${nama} tidak ada, Karena Angkot Sedang Kosong`)
        return angkot
    }else{
        for (let i = 0; i<angkot.length; i++){
            if(angkot[i]==nama){
                delete angkot[i]
                return angkot
            }else if(i==angkot.length-1){
                console.log(`Nama ${nama} Tidak ada di dalam daftar penumpang`)
                return angkot
            }
        }
    }
}
