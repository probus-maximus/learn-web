function countB(string) {
    count = 0;
    for(i = 0; i < string.length; i++) {
        if(string[i] === "B") {
            count++;
        }
    }

    return count;
}

function countChar(string, char) {
    count = 0;
    for(i = 0; i < string.length; i++) {
        if(string[i] === char) {
            count ++;
        }
    }
    return count;
}

console.log("count for Behave: ", countB("Behave"));
console.log("count for HaBBy: ", countB("HaBBy"));

console.log("count for a in assumputiona: ", countChar("assumputiona", "a"));