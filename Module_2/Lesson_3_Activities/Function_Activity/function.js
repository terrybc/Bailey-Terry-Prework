

function square(num) {
    return num * num;
}

function fullName(first, last) {
    return last + ", " +  first;
}

function evenOrOdd(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log("The square of 8 is: " + square(8));
console.log("My name in formal writing is: " + fullName("Bailey", "Terry"));
console.log("The number 9 is even: " + evenOrOdd(9));
console.log("The number 8 is even: " + evenOrOdd(8));

