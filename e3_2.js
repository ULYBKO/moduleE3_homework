//ЗАДАНИЕ 2

function chislo(num) {

    if (num > 1 && num <= 1000) {
             if (num % 2 === 0) {
                console.log('Простое');
            } else {
              console.log('Сложное');
            }
        
        
 } else { 
        console.log('Данные неверны');
    }
}
chislo (33)
