function catAndMouse(x, y, z) {
    // subtract the distance of catA from mouse and catB from mouse and check whether the distance of Cat A distance is graetor than Cat B then print Cat B else print catA if distance of both cats are equal then print Mouse C
    return (Math.abs(x - z) < Math.abs(y - z)) ? "Cat A" : (Math.abs(x - z) > Math.abs(y - z)) ? "Cat B" : "Mouse C";
}