function equalizeArray(arr) {
    // arr = an array of integers
    // the output will be an integer
    let max = 0;
    let count = 1;
    let sorting = arr.sort((a, b) => a - b); // start with sorting the array 
    for(let i = 0; i < sorting.length - 1; i++) { // then loop over the sorted array
        if(sorting[i] === sorting[i+1]) { // check if curr element is equal to the preceding element
            count++ // if so, the increment count by one
        }else {
            if(count > max) // else check if count is greator than max variable
            max = count; // if so, then assign count to max variable
            count = 1; // and let the count be equal to 1
        }
        if(count > max) // if count is greator than max, then aasign max to count
        max = count;
    }
    return sorting.length - max; // subtract the max from the length of the sorted array
    // time complexity for this program is O(n)
    // space complexity for this programe is O(n)
}