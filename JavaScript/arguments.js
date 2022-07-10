function findMax() {
    
    let arguments = [1, 2, 3, 6, 90];
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments [i];
        }
    }

    return max;
}

console.log(arguments);