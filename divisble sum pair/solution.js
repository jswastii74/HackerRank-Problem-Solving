function divisibleSumPairs(n, k, ar) {
    var a;
    var count =0;
        for(let i=0; i<n; i++){
            for(let j=1; j<n; j++){
                if (i < j){
                    a = ar[i] + ar[j];
                if (a % k == 0){
                    count++;
                }}
            }
        }
    return count;
}