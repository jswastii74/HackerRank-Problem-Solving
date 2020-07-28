function bonAppetit(bill, k, b) {
    let total = bill.reduce((sum, cost) => sum + cost ,0);
    let deduct = (total - bill[k]) / 2;
    console.log(deduct < b ? b - deduct : "Bon Appetit");
}