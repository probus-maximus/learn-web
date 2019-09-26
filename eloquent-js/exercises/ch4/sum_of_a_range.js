function myRange(start, end, step=1) {
    let ar = [];
    
    if(step > 0) {
        for(let i = start; i < end + 1; i+=step) {
        ar.push(i);
        }
    }
    else {
        for(let i = end; i > start - 1; i+=step) {
            ar.push(i);
        }
    }
    
    return ar;
}

function mySum(numbers) {
    let val = 0;
    for(let number of numbers) {
        val += number;
    }
    return val;
}

let numbers = myRange(1, 10);

console.log("myRange test = ", numbers);

console.log("mySum test = ", mySum(numbers));

console.log("myRange with step test = ", myRange(1, 10, 2));

console.log("myRange with step negative test = ", myRange(1, 10, -3));