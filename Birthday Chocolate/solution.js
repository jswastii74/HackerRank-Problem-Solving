function birthday(s, d, m) {
    let combos = 0;
    // s = chocolate array
    // d = target sum (birth date)
    // m = segment length (birthday month)
    //loop through the array 
    for (let i=0; i<s.length; i++) {
        let total = 0;
        
        for(let x=i; x < i + m; x++){
            total += s[x];
        }
        //check if total is equal to birth date if it is then add 1 to it 
        if (total === d) {
            combos += 1;
        }
    }
    // and return the combos i.e total number of pairs matched
    return combos;
    // time complexity for this program is O(n^2)
    // space complexity for this programe is O(1)
}