//vetores
let num = [5, 8, 2, 9, 3];
console.log(`Nosso vetor é o [${num}]`);

//mostrando comprimento
console.log(`Vetor de tamanho ${num.length}`);

/* 
//mostrando vetor ordenado
//console.log(`Vetor ordenado: [${num.sort()}]`);
*/

//mostrando o vetor por índice
console.log(`\nMostrando vetor usando for: `);
for(let i=0; i<num.length; i++) {
    console.log(`Vetor[${i}] = ${num[i]}`);
}


//for in - para cada posição dentro de num
console.log(`\nMostrando vetor usando for in: `);
for(let i in num) {
    console.log(`Vetor[${i}] = ${num[i]}`);
}

//retornando o indice do valor pesquisado
let busca = 2;
let res = num.indexOf(busca);
if(res != -1) {
    console.log(`\nEncontramos [${busca}] na posição [${res}] do vetor :)`);
}
else {
    console.log(`\nValor [${busca}] não foi encontrado no vetor :(`);
}
