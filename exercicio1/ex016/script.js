function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    //verificar se o ano não esta vazio
    if(formAno.value.length==0 || formAno.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    }
    else {
        var formSexo = document.getElementsByName('radsexo');
        var idade = ano - Number(formAno.value);        
        var genero = '';
        
        //adicionando imagem dinamicamente - vimos como fazia no html no ex015
        var img = document.createElement('img');
        img.setAttribute('id', 'foto'); //é como se fosse um <img id="foto"> no html        

        //validação do sexo e idade
        if(formSexo[0].checked) {
            genero = 'Homem';
            if(idade>=0 && idade<12) {
                //criança
                img.setAttribute('src', 'bebeM.png');
            }
            else if(idade>=12 && idade<21) {
                //jovem
                img.setAttribute('src', 'jovemM.png');
            }
            else if(idade>=21 && idade<50) {
                //adulto
                img.setAttribute('src', 'adultoM.png');
            }
            else {
                //idoso
                img.setAttribute('src', 'idosoM.png');
            }
        }
        else if(formSexo[1].checked) {
            genero = "Mulher";
            if(idade>=0 && idade<12) {
                //criança
                img.setAttribute('src', 'bebeF.png');
            }
            else if(idade>=12 && idade<21) {
                //jovem
                img.setAttribute('src', 'jovemF.png');
            }
            else if(idade>=21 && idade<50) {
                //adulto
                img.setAttribute('src', 'adultoF.png');
            }
            else {
                //idoso
                img.setAttribute('src', 'idosoF.png');
            }
        }
        else {
            genero = "Outro";
        }
        //ajustando o css dentro o js
        res.style.textAlign = 'center';        

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        
        //adicionando conteudo da imagem - criamos um novo Child pra res
        res.appendChild(img);
        img.style.padding='15px';
    }
}
