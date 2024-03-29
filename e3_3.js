//ЗАДАНИЕ 3
function getSum(a) {
    return function(b) {
        return a + b
    }
};

const sFunc = getSum(2);

const sum = sFunc(3)

console.log(sum);
