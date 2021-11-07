function friendNumbers(num1,num2) {
    let sonuc = "Arkadaş Sayı Değiller"
    let t1=1
    let t2=1
    let b = num2
    let i=2
    if(num1>num2){
        b=number1
    }

    while(i<=b/2){
        if(num1%i==0){
            t1=t1+i
        }
        if(num2%i==0){
            t2=t2+i
        }
        i++
    }
    if(num1==t2 && num2==t1){
        sonuc = "Arkadaş Sayı"
    }
        
    console.log(sonuc)
}

friendNumbers(5,10)
friendNumbers(17296,18416)
friendNumbers(220,284)