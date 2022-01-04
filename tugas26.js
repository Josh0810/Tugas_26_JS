function Tugas26(){
    var a = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
     a.forEach((i) => {
        let c = isFinite(a);
        if (c === true){
            console.log("Angka",i,"Infinity");
        }else{
            console.log("Angka",i,"NOT Infinity");
        }
    });
}
Tugas26()