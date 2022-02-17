//acima de 100km/h é multado
var vel = 150.5;
console.log(`A velocidade do seu carro é ${vel}Km/h`);
if(vel > 100) {
    console.log('Ultrapassou o limite de velocidade. MULTADO!');
}
else {
    console.log('Velocidade dentro do limite permitido. NÃO MULTADO');
}
console.log(`Dirija sempre usando cinto de segurança!`)