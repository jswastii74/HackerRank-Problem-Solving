function appendAndDelete(s, t, k) {
    // s = the initial string
    // t = the desired string
    // k = an integer that represents the number of operations
    // the output will be in a string format
        let sum = s.length + t.length
        let l = Math.min(s.length, t.length)
        if (k > sum) return 'Yes' // if the number of allowed operations is bigger than the sum of both strings, return "Yes"
        for (let i = 0; i < l; i++, sum -= 2) {
            if (s[i] !== t[i]) break //compare the letters in both strings 
            // break out of the loop if the letters aren't equal 
        }
        return sum > k || (k - sum) % 2 !== 0 ? 'No' : 'Yes'  //if the minimum number of operations is more than the allowed number return "No" else return "YES"
        // time complexity for this program is O(n)
        // space complexity for this programe is O(n)
    }