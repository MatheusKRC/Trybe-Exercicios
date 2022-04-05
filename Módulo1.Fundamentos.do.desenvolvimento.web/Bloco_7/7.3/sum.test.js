const { sum, myRemove } = require('./sum');

it('A soma de (4, 5) é igual a (9)', () => {
    expect(sum(4, 5)).toBe(9)
});


it('A soma de (0, 0) é igual a (0)', () => {
    expect(sum(0, 0)).toBe(0)
});

it('A soma de (4, String 5) é igual a (Error)', () => {
    expect(() => sum(4, '5')).toThrowError()
});

it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado'), () => {
    expect(myRemove([1, 2, 3, 4], 3)).toBe([1, 2, 4])
}