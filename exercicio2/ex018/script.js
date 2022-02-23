function tabuada() {
    let formNum = document.getElementById('txtnum');
    let tab = document.getElementById('seltab');
    let num = Number(formNum.value);

    //validação dos dados - precisa inserir todos os dados válidos
    if(formNum.value.length==0) {
        alert('📢 [ERRO] Insira um número válido');
    }
    else {
        /* laço de repetição for - alterando direto na div
        for(let i=1; i<=10; i++) {
            res.innerHTML += `${num} x ${i} = ${num*i} <br>`;
        } 
        */

        //alterando no selector - cria o elemento pelo js e não pelo html
        let i=1;
        tab.size = '11';
        while(i<=10) {
            let item = document.createElement('option');
            item.text = `${num} x ${i} = ${num*i}`;
            item.value = `tab${i}`; //para o php é um comando essencial, no js nem tanto
            tab.appendChild(item);
            i++;
        }
    }
}