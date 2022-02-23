let formNum = document.querySelector('input#txtnum');
let sel = document.querySelector('select#selnum');
let res = document.querySelector('div#res');
let valores = [];

function temLista(n, lista) {
    if(lista.indexOf(Number(n))!=-1) {
        return true;
    }
    else {
        return false;
    }
}
function dentroLim(n) {
    if(Number(n)>=1 && Number(n)<=100) {
        return true;
    }
    else {
        return false;
    }
}
function adicionar() {
    let num = Number(formNum.value);
    if(!temLista(num, valores) && dentroLim(num)) {
        sel.size = sel.size+1;
        valores.push(num);
        let item = document.createElement('option');
        item.text = `[${num}] adicionado!`;
        sel.appendChild(item);    
    }
    else {        
        alert('[ERRO] Insira um numero válido');
    }
    //limpando a caixa
    formNum.value = '';
    formNum.focus();
}
function finalizar() {
    //total de elementos
    res.innerHTML = `Total de elementos: ${valores.length}`
    
    //maior
    valores.sort();
    let tam = valores.length;
    res.innerHTML += `<p>Maior elemento: ${valores[tam-1]}</p>`;
    
    //menor
    res.innerHTML += `<p>Menor elemento: ${valores[0]}</p>`;

    //soma de todos
    let soma=0;
    for(let j=0; j<tam; j++) {
        soma += valores[j];
    }
    res.innerHTML += `<p>Soma: ${soma}</p>`;

    //media
    let media = soma/tam;
    res.innerHTML += `<p>Media: ${media}</p>`;
}