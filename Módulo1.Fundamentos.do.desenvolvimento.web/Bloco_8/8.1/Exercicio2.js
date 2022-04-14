// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const resultado = Math.floor(Math.random() * (max - min)) + min;
  return resultado;
};
const resultado = getRandomInt(1, 6);
console.log(resultado);

const verificaNumero = (myNumber, number) => myNumber === number;

const sorteio = (myNumber, callback) =>{
    const number = resultado;

    return callback(myNumber, number) ? 'Parabéns você ganhou!' : 'Tente novamente!';
}

console.log(sorteio(4, verificaNumero));
//  Referencia: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
