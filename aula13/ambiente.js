/* //escrevendo 6x
console.log('Está funcionando');
console.log('Está funcionando');
console.log('Está funcionando');
console.log('Está funcionando');
console.log('Está funcionando');
console.log('Está funcionando'); 
*/

//utilizando while (estrutura de repetição com teste no inicio)
var count = 0;
while(count < 3) {
    console.log(`[${count+1}] Está funcionando com while`);
    count++;
}

//utilizando do while (estrutura de repetiçao com teste no final)
var count2 = 0;
do {
    console.log(`[${count2+1}] Está funcionando com do while`);
    count2++;
} while(count2 < 6);