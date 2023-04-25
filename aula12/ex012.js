let idade = 21;
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Você não pode votar.')
} else if (idade >= 16 && idade < 18 || idade > 65) { //&& : E - ||: Ou
    console.log('Seu voto é opcional.')   
} else {
    console.log('Seu voto é obrigatório.')
} 