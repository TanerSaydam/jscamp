function Prime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let prime = "Asal Sayı Değil"
        if (numbers[i]>=1) {
            for (let j = 2; j <= numbers[i]/2; j++){
                if (numbers[i]%j!=0) {
                    prime = "Asal Sayı"
                }
            }
        }
        
        console.log(numbers[i] + " " + prime)
    }
}

Prime(2,5,8,21, 13)