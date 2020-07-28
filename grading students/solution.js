function gradingStudents(grades) {
    // Write your code here
  let round = [];
    for (let i=0; i<grades.length; i++) {
      if (grades[i] < 38) {
        round.push(grades[i])
      } else if (grades[i] % 5 === 3) {
        round.push(grades[i]+2)
      } else if (grades[i] % 5 === 4) {
        round.push(grades[i]+1)
      } else {
        round.push(grades[i])
      }
    }
    return round
}