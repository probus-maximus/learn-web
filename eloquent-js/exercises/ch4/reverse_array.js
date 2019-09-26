function ReverseArray(array) {
    let val = [];
    for(let elem of array) {
        val.unshift(elem);
    }
    return val;
}

//Note, I did not come up with solution. I implemented it based on the book. 
//I was close but couldn't quite crack it.
function ReverseArrayInPlace(array) {
    for(let i = 0; i < Math.floor(array.length / 2); i++) {
        let save = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = save;
    }
}

let testCase = [1, 2, 4, 3, 5, 2, 10];

console.log("ReversArray test. Start = ", testCase, "\nEnd = ", ReverseArray(testCase));

let testCase2 = [4, 5, 6, 7, 8, 9, 10, 1, 2];

console.log("ReverseArrayInPlace test. Start = ", testCase2);

ReverseArrayInPlace(testCase2);

console.log("End = ", testCase2);