function taumBday(b, w, bc, wc, z) {
    // Write your code here
// b: the number of black gifts
// w: the number of white gifts
// bc: the cost of a black gift
// wc: the cost of a white gift
// z: the cost to convert one color gift to the other color
// the output will be an integer
    if(bc - wc > z){
        return b * (wc + z) + w * wc
    }

    if(wc - bc > z){
        return w * (bc + z) + b * bc
    }

    return b * bc + w * wc;
    // time complexity for this program is O(1)
    // space complexity for this programe is O(1)
}