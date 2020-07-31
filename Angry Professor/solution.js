function angryProfessor(k, a) {
    // k = the threshold number of students
    // a = an array of integers representing arrival times
    let arriveLate = 0;
    let arriveOnTime = 0
    // loop over the array of student's arrival time
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) { // check if a[i]'s value is less than 0, if it is increment arriveOnTime by one;
            arriveOnTime++;
        }
        if (a[i] > 0) { // check if a[i]'s value is greator than 0, if it is increment arriveLate by one;
            arriveLate++;
        }
    }
    // if the value of students arrive on time is greator or equal to k, then print 'NO' else print 'YES'
    // here 'NO' and 'YES' signifies whether the class will be cancelled or not respectively 
    return (arriveOnTime >= k) ? 'NO' : 'YES';
    // time complexity for this program is O(n)
    // space complexity for this programe is  O(1)
}