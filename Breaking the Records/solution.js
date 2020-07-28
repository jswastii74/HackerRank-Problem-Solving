function breakingRecords(scores) {
    let maxScore = scores[0];
    let minScore = scores[0];
    let maxTotal = 0;
    let minTotal = 0;
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
    return [maxTotal, minTotal];

}