function gradingStudents(grades) {
    // Write your code here
    //grades = an array of integers representing grades before rounding
  let round = []; // create a variable and assign it an empty array
  // loop over the array grades
    for (let i=0; i<grades.length; i++) {
      if (grades[i] < 38) { // check if grades[i] is less than 38
        round.push(grades[i]) // push it in the empty array variable named 'round'
      } else if (grades[i] % 5 === 3) { // if grades[i] divided by 5 gives 3 as it remainder, then round it by adding 2 to it
        round.push(grades[i]+2)
      } else if (grades[i] % 5 === 4) { // else if grades[i] divided by 5 gives 4 as it remainder, then round it by adding 1 to it
        round.push(grades[i]+1)
      } else {
        round.push(grades[i])  // else push the grade itself
      }
    }
    return round // return the final grades pushed in array
}