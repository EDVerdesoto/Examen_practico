const { describe, test, expect } = require('@jest/globals');
const { calcWeightedGrade, percentile } = require('./src/utils/calculadora.js');

//calcWeightedGrade([{score:80,weight:0.4},{score:90,weight:0.6}]) → 86.00

test('La nota final del estudiante es correcta', () => {
    expect(calcWeightedGrade([{score:80,weight:0.4},{score:90,weight:0.6}])).toBe(86.00);
});

// percentile(0,[1,2,3]) → 1.00 ; percentile(100,[1,2,3]) → 3.00
// percentile(50,[1,2,3,4]) → 2.00 (nearest-rank)

describe('Percentile', () => {
    test('El percentil 0 debe ser el menor (1)', () => {
        expect(percentile(0,[1,2,3]).toBe(1.00));
    });
    test('El percentil 100 debe ser el mayor (3)', () => {
        expect(percentile(100,[1,2,3]).toBe(3.00));
    });
    test('El percentil 50 debe ser el valor del medio o el más aproximado', () => {
        expect(percentile(50,[1,2,3,4]).toBe(2.00));
    });
});