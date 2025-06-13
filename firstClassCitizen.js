function multiplier(x){
    return function(num){
        return x * num;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10));
console.log(triple(11));