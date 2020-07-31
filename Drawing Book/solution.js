function pageCount(n, p) {
    /*
     * Write your code here.
     */
    // find out the middle page of book
    let mid = n / 2;
    // if p, i.e the page number to turn to is greator than mid then the page turn will start from the last page of the book i.e from backside of the book
    //check if n is even, if it is then add 1 to the n and subtract p from it and then divide the result by 2 else (n-p)/2 
    if (p > mid) {
        return n % 2 == 0 ? parseInt((n + 1 - p) / 2) : parseInt((n - p) / 2);

    }
    //else start from first page of the book i.e from front of the book
    else {

        return parseInt(p / 2);
        // time complexity for this program is O(1)
    // space complexity for this programe is O(1)
    }
}
