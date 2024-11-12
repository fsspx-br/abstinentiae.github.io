const {isAbstinence} = require('../src/abstinence.cjs');

describe('is abstinence', () => {
    test('friday in feast day', () => {
        const date = new Date(2024, 10, 1);
        expect(isAbstinence(date)).toBe(false);
    });
});