function hurdleRace(k, height) {
    // k = an integer denoting the height Dan can jump naturally
    // height = an array of integers denoting the heights of each hurdle
    // firstly find out the max from height array and subtract it with k 
    // and then after return the max between the total i.e the subtracted value and 0 because in case if the k is greator than the max in height array

    return Math.max(0, Math.max(...height) - k);
}