function birthday(s, d, m) {
    let combos = 0;
    
    for (let i=0; i<s.length; i++) {
        let total = 0;
        
        for(let x=i; x < i + m; x++){
            total += s[x];
        }
        
        if (total === d) {
            combos += 1;
        }
    }
    
    return combos;

}