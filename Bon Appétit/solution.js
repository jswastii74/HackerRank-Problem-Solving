function bonAppetit(bill, k, b) {
    //bill = array representing cost of ordered items
    // k = an integer representing the zero-based index of the item Anna doesn't eat
    //b = the amount of money that Anna contributed to the bill
    // take out the total amount of bill by adding the given numbers in array
    let total = bill.reduce((sum, cost) => sum + cost ,0);
    // from total reduce the amount that Anna dosen't pay for and split the remaining between two by dividing it by 2 and store it in variable
    let deduct = (total - bill[k]) / 2;
    // if deduct is less than b, then print b - deduct else print 'Bon Appetit'
    console.log(deduct < b ? b - deduct : "Bon Appetit");
    // time complexity for this program is O(n)
    // space complexity for this programe is O(1)
}