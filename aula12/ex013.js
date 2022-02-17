//quero dar bom dia, boa tarde ou boa noite dependendo do horário
//var hora = 1;

//pegando a hora exata
var agora = new Date();
var hora = agora.getHours();
var min = agora.getMinutes();
console.log(`Agora são exatamente ${hora}h${min}min`);

if(hora>=4 && hora<12) {
    console.log('Bom dia!');
}
else if(hora>=12 && hora<=18) {
    console.log('Boa tarde!');
}
else if(hora>18 && hora<=23){
    console.log('Boa noite!');
}
else {
    console.log('Boa madrugada!');
}