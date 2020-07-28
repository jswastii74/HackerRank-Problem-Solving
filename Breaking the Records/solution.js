function breakingRecords(scores) {
    // scores = an array representing the total score for each match played
    let maxScore = scores[0]; 
    let minScore = scores[0];
    let maxTotal = 0;
    let minTotal = 0;
    // loop over the array and check if maxScore is less than the current score i.e the current element of the array, if it is then assign maxScore to that current element and increment maxTotal by one
    // if minScore is less than the current score i.e the current element of the array, if it is then assign minScore to that current element and increment minTotal by one
    for (let i = 0; i < scores.length; i++) {
        if (maxScore < scores[i]) {
            maxScore = scores[i];
            maxTotal++;
        }
        if (minScore > scores[i]) {
            minScore = scores[i];
            minTotal++;
        }
    }
    return [maxTotal, minTotal]; // return the maxTotal and minTotal in array form

}