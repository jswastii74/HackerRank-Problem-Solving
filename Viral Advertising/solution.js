function viralAdvertising(n) {
    // n = the integer number of days
    // the output will be an integer
    let total = 0;
        let shared = 5;
        let liked = 0;

        for (var i = 0; i < n; i++) { // loop till the n number of days
                liked = Math.floor(shared / 2); 
                total += liked; // assign and add the output of liked to total variable
                shared = liked * 3; // multiply the output of liked from 3
        }

        return total; // return total
        // time complexity for this program is O(n)
        // space complexity for this programe is O(1)

}