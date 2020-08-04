function countingValleys(n, s) {
    // n = the number of steps Gary takes (an integer)
    // s =  a string describing his path
    // the output will be an integer value
    let alt = 0;
    //let belowSea = 0;
    let valley = 0;
    let spl = s.split(''); // split the string 's'
    for (let i = 0; i < spl.length; i++) { // iterate over an array 'spl'
        if (spl[i] === 'U') { // check if current element of an array is 'U', 'U' stands for an uphill movement
            alt++; // if yes then increment alt by 1 unit
            if (alt === 0) { // inside that check if alt == 0, i.e the hiker is back after covering a valley at the base from where he started
                valley++ // if yes, then increment valley by 1
            }
        } else {
            alt-- // else decrement alt by 1 unit, i.e when current element is nor 'U' neither 0 which means spl[i] === 'D'
        }
    }
    return valley; // return valley
    // time complexity for this program is O(n)
    // space complexity for this programe is O(1)
}