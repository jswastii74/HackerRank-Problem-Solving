function beautifulDays(i, j, k) {
    // i = the starting day number
    // j = the ending day number
    // k = the divisor
    let reversed;
    let diff;
    let total = 0;
    // loop over the array and initialize x with i till or equal to j
    for(let x = i; x <= j; x++) {
        reversed = +x.toString().split('').reverse().join(''); // since x is a digit so, firstly convert it into a string then split it then reverse it and lastly join it
        diff = x - reversed; // subtract the non-reversed digit with reversed digit
        if(diff % k === 0) { // if the total from the substraction is divisible by k then increment total by 1
            total++;
        }
    }
    return total; // return total;
    
}