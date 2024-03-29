
//ЗАДАНИЕ 4

function logNumbers(a, b) {
    let curTime = a;

    let timeId = setInterval(function() {
        console.log(curTime);
        if (curTime == b) {
            clearInterval(timeId);
        }
        curTime++;
    }, 1000);
}

logNumbers(1, 4);
