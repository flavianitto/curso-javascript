function contar() {
    let fi = document.getElementById('txtinicio');
    let ff = document.getElementById('txtfim');
    let fp = document.getElementById('txtpasso');
    let res = document.getElementById('res');
    
    //pegando os valores dos formularios txt 
    let inicio = Number(fi.value);
    let fim = Number(ff.value);
    let passo = Number(fp.value)

    //validação dos dados - não posso ter entradas sem valores
    if(fi.value.length==0 || ff.value.length==0 || fp.value.length==0) {
        res.innerHTML = 'Impossível contar!';
        alert('[ERRO] Insira todos os dados!');
    }
    else {
        res.innerHTML = `Contando:<br>`;

        //validações - passo 0 ou negativo
        if(passo<=0) {
            alert('Passo inválido! Considerando passo = 1');
            passo = 1;
        }
        //contagem em ordem crescente
        if(inicio < fim) {
            //fazendo laço de repetição
            for(let c=inicio; c<fim; c=c+passo) {
                res.style.textAlign = 'left';
                res.innerHTML += `${c} ➡ `; //lembrar de colocar + pra concatenar
            }
        }
        //contagem em ordem decescrente 
        else {
            //fazendo laço de repetição
            for(let c=inicio; c>=fim; c=c-passo) {
                res.style.textAlign = 'left';
                res.innerHTML += `${c} ➡ `; //lembrar de colocar + pra concatenar
            }
        }
        res.innerText += `🏁`;        
    }
}