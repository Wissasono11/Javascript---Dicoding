function addOne(x){
    return x + 1;
}

function square(x){
    return x * x;
}

function compose(f, g){
    return (x) => {
        return f(g(x));
    }
}

const addOneThenSquare = compose(square, addOne);

console.log(addOneThenSquare(2)); // 9
console.log(addOneThenSquare(3)); // 16