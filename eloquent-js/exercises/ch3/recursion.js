function isEven(num) {
    if(num === 0) {
        return true;
    }
    else if(num === 1) {
        return false
    }
    else {
        return isEven(num - 2);
    }
}

console.log("75 is ", isEven(75));
console.log("50 is ", isEven(50));