function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var corpo = document.body;
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    msg.innerHTML = `Agora são ${hora}h${min}.`;

    //fazer as condições
    if(hora>=0 && hora<12) {
        //bom dia
        img.src = "fotomanha.png";
        corpo.style.background = '#788156'
    }
    else if(hora>=12 && hora<18) {
        //boa tarde
        img.src = "fototarde.png";
        corpo.style.background = '#e86d1d'
    }
    else {
        //boa noite
        img.src = "fotonoite.png";
        corpo.style.background = "#08293e"
    }
    
}