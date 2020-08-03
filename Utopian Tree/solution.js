function utopianTree(n) {
    // n = an integer
    // the output will also be an integer value
    // initialise var h = 1;
    let h = 1;
    // loop till n integer
    for(let i = 1; i <= n; i++){
        if(i % 2 === 0){ // check if i is divisible by 2
            h++; // if yes, then increment i by one
        } else {
            h *= 2; // else multiply it by two
        }
    }
    return h; // return h
    // time complexity for this program is O(n)
    // space complexity for this programe is O(1)
}