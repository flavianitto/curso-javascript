function parimpar(n) {
    if(n%2 == 0) {
        return 'par';
    }
    else {
        return 'impar';
    }
}
let v = 3;
let res = parimpar(v);
console.log(`[${v}] é ${res}`);