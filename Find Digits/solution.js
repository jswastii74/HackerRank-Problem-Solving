function findDigits(n) {
    // n = an integer to analyze
    // firstly convert the digit(int) into a string, then seperate it using split method
    let sepearte = n.toString().split('');
    let count = 0;
    // iterate over the created array 
    for (let i = 0; i < +sepearte.length; i++) {
        if (n % sepearte[i] === 0) { // check if each digit is divisble by the n
            count++; // if yes, the increase count by 1
        }
    }
    return count; // return count
    // time complexity for this program is O(n)
    // space complexity for this programe is O(n)
}