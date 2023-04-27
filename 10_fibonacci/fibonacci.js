const fibonacci = function(count) {
    if (count < 1) {
        return "OOPS";
    }
    let fib1 = 0;
    let fib2 = 1;
    for (let i = 1; i < count; i++) {
        let tmp = fib1 + fib2;
        fib1 = fib2;
        fib2 = tmp;
    }
    return fib2;
};

// Do not edit below this line
module.exports = fibonacci;
