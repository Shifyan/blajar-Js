//rekursi adalah pengulangan dimana function memanggil dirinya sendiri

//contoh rekursi

function rekursi(a){
    if(a==0){
        return;
    }
    console.log(a)
    return rekursi(a-1)
}

rekursi(10)

function faktorial (a){
    if (a==0) return 1 ;
    return a*faktorial(a-1);
}

console.log(faktorial(5))