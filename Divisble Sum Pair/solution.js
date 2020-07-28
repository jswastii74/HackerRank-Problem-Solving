function divisibleSumPairs(n, k, ar) {
    //n = the integer length of array ar
    //ar = an array of integers
    //k = the integer to divide the pair sum by
    var a;
    var count =0;
    // loop over the array ar
        for(let i=0; i<n; i++){
            //itereate another loop from till n
            for(let j=1; j<n; j++){
                // check if i < j, if it is then add both and store it var a
                if (i < j){
                    a = ar[i] + ar[j];
                    // check if a is evenly divided by k and increase the count by 1
                if (a % k == 0){
                    count++;
                }}
            }
        }
    return count; // return count variable
}