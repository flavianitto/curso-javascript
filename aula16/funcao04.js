//fatorial com for 
function fatorial(n) {
    let fat = 1;
    for(let i=n; i>1; i--) {
        fat *= i;
    }
    return fat;
}
console.log(`Fatorial de 5 = ${fatorial(5)}`);