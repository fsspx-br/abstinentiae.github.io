const {isAbstinence} = require('../src/abstinence.cjs');

describe('is abstinence', () => {

    test('friday in feast day', () => {
        const date = new Date(2024, 10, 1);
        expect(isAbstinence(date)).toBe(false);
    });

    test('regular friday', () => {
        const date = new Date(2024, 10, 15);
        expect(isAbstinence(date)).toBe(true);
    });

    test('good friday', () => {
        const date = new Date(2024, 2, 29);
        expect(isAbstinence(date)).toBe(true);
    });
});