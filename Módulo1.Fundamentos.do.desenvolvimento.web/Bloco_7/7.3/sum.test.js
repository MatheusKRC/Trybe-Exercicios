const { sum, myRemove, myFizzBuzz, encode, decode } = require('./sum');

describe('Testando a função de soma', () => {
    it('A soma de (4, 5) é igual a (9)', () => {
        expect(sum(4, 5)).toBe(9)
    });

    it('A soma de (0, 0) é igual a (0)', () => {
        expect(sum(0, 0)).toBe(0)
    });

    it('A soma de (4, String 5) é igual a (Error)', () => {
        expect(() => sum(4, '5')).toThrowError()
    });
});

describe('Testando a função de remover elementos do Array', () => {
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});

describe('Testando a função de fizzbuzz para numeros divisivies por 3 ou 5', () => {
    it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });

    it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(6)).toBe('fizz');
    });

    it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    });

    it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(7)).toBe(7);
    });

    it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado por 3 ou 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz('cinco')).toBe(false);
    });
});

describe('Testes para as funções de encode e decode', () => {
    it('Teste se encode e decode são funções', () => {
        expect(typeof encode).toBe('function')
        expect(typeof decode).toBe('function')
    });

    it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
        expect(encode('a, e, i, o, u')).toEqual('1, 2, 3, 4, 5')
    });

    it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
        expect(decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u')
    });

    it('Teste se as demais letras/números não são convertidos para cada caso', () => {
        expect(encode('maria')).toEqual('m1r31')
        expect(decode('1n1')).toEqual('ana')
    });
})