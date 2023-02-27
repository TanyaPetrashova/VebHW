function send(){
    var chat = document.getElementById('chat').value;
    console.log(`${chat}`);
    document.getElementById('chat').value = "";
}


function go(){
    var height = document.getElementById('height').value
    var weight = document.getElementById('weight').value
    var imt = (weight / height ** 2) * 10000

    switch (true){
        case imt < 16:  str = 'Выраженный дефицит массы тела'
        break
        case imt >= 16 && imt < 18.5:  str = 'Недостаточная масса тела'
        break
        case imt >= 18.5 && imt < 25:  str = 'Нормальная масса тела'
        break
        case imt >= 25 && imt < 30:  str = 'Избыточная масса тела (предожирение)'
        break
        case imt >= 30 && imt < 35:  str = 'Ожирение 1-ой степени'
        break
        case imt >= 35 && imt < 40:  str = 'Ожирение 2-ой степени'
        break
        case imt >= 40:  str = 'Ожирение 3-ой степени'
        break
    }
    document.getElementById('textIMT').innerText = str;
    document.getElementById('IMT').innerText = imt;
}       

    
    // второй вариант решения:
    //var str = `Your IMT is ${imt}` + "<br>";
            
            //if (imt >= 0 && imt < 16) {
                //str = str + ' Выраженный дефицит массы тела'
            //}
           // if (imt >= 16 && imt < 18.5) {
               // str = str + ' Недостаточная масса тела'
           // }
           // if (imt >= 18.5 && imt < 25) {
               // str = str + ' Нормальная масса тела'
           // }
            //if (imt >= 25 && imt < 30) {
               // str = str + ' Избыточная масса тела (предожирение)'
            //}
            //if (imt >= 30 && imt < 35) {
               // str = str + ' Ожирение 1-ой степени'
           // }
            //if (imt >= 35 && imt < 40) {
             //   str = str + ' Ожирение 2-ой степени'
           // }
           // if (imt >= 40) {
              //  str = str + ' Ожирение 3-ой степени'
            //}

            
