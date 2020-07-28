function dayOfProgrammer(year) {
    //check if year is divisible by 4
    let daysJ = year % 4 === 0 ? 244 : 243;
    //check if year is divisible by 4 and non divisble by 100
    let daysG = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 244 : 243;
    //check if year is less than 1918
    if (year < 1918) {
        //if it is then reduce the number of days from 256 and the result will be desired date
    return 256 - daysJ + '.09.' + year;
  } else if (year > 1918) {
    return 256 - daysG + '.09.' + year;
  } else {
    return '26.09.1918'; // return if year is neither greator than 1918 nor less that  1918, i.e year equal to 1918
  }
}