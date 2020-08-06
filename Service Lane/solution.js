function serviceLane(width, cases) {
    //width = an array
    // cases = a two dimensional array of integers where each element is an array of two integers representing starting and ending indices for a segment to consider .
    // the data type of output will be an array of integer
    let answer = [] // create an empty array
    for(let i=0; i<cases.length; i++){ // loop over the cases array
        let min = width.slice(cases[i][0],cases[i][1]+1); // and from width array select a portion from cases array that you want
        answer.push(Math.min(...min)) // now push the mininmum value into the created array, answer
    }
    return answer; // return array
    // time complexity for this program is O(n)
    // space complexity for this programe is O(n)
}