function min(num1, num2) {
    if(num1 < num2) {
        return num1;
    }
    else if(num2 < num1) {
        return num2;
    }
    else {
        return false;
    }
}

console.log("3 vs 10: ", min(3, 10));
console.log("420 vs 2: ", min(420, 2));
console.log("1 vs 1: ", min(1, 1));