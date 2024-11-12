const { easter, goodFriday } = require('../src/easter');

describe('easter date calculator', () => {
    test('calculates Good Friday', () => {
        const result = goodFriday(2014);
        expect(result.getFullYear()).toBe(2014);
        expect(result.getMonth()).toBe(3);
        expect(result.getDate ()).toBe(18);
    });

    test('calculates Easter correctly for 2014', () => {
        const result = easter(2014);
        expect(result.getFullYear()).toBe(2014);
        expect(result.getMonth()).toBe(3);
        expect(result.getDate ()).toBe(20);
    });

    test('calculates Easter correctly for 2015', () => {
        const result = easter(2015);
        expect(result.getFullYear()).toBe(2015);
        expect(result.getMonth()).toBe(3);
        expect(result.getDate()).toBe(5);
    });

    test('calculates Easter correctly for 2016', () => {
        const result = easter(2016);
        expect(result.getFullYear()).toBe(2016);
        expect(result.getMonth()).toBe(2);
        expect(result.getDate()).toBe(27);
    });

    test('calculates Easter correctly for 2017', () => {
        const result = easter(2017);
        expect(result.getFullYear()).toBe(2017);
        expect(result.getMonth()).toBe(3);
        expect(result.getDate()).toBe(16);
    });

    test('calculates Easter correctly for 2018', () => {
        const result = easter(2018);
        expect(result.getFullYear()).toBe(2018);
        expect(result.getMonth()).toBe(3);
        expect(result.getDate()).toBe(1);
    });

    test('calculates Easter correctly for 2019', () => {
        const result = easter(2019);
        expect(result.getFullYear()).toBe(2019);
        expect(result.getMonth()).toBe(3);
        expect(result.getDate()).toBe(21);
    });

    test('calculates Easter correctly for 2020', () => {
        const result = easter(2020);
        expect(result.getFullYear()).toBe(2020);
        expect(result.getMonth()).toBe(3);
        expect(result.getDate()).toBe(12);
    });

    test('calculates Easter correctly for 2021', () => {
        const result = easter(2021);
        expect(result.getFullYear()).toBe(2021);
        expect(result.getMonth()).toBe(3);
        expect(result.getDate()).toBe(4);
    });

    test('calculates Easter correctly for 2022', () => {
        const result = easter(2022);
        expect(result.getFullYear()).toBe(2022);
        expect(result.getMonth()).toBe(3);
        expect(result.getDate()).toBe(17);
    });

    test('calculates Easter correctly for 2023', () => {
        const result = easter(2023);
        expect(result.getFullYear()).toBe(2023);
        expect(result.getMonth()).toBe(3);
        expect(result.getDate()).toBe(9);
    });

    test('calculates Easter correctly for 2024', () => {
        const result = easter(2024);
        expect(result.getFullYear()).toBe(2024);
        expect(result.getMonth()).toBe(2);
        expect(result.getDate()).toBe(31);
    });

    test('calculates Easter correctly for 2025', () => {
        const result = easter(2025);
        expect(result.getFullYear()).toBe(2025);
        expect(result.getMonth()).toBe(3);
        expect(result.getDate()).toBe(20);
    });

    test('calculates Easter correctly for 2026', () => {
        const result = easter(2026);
        expect(result.getFullYear()).toBe(2026);
        expect(result.getMonth()).toBe(3);
        expect(result.getDate()).toBe(5);
    });

    test('calculates Easter correctly for 2027', () => {
        const result = easter(2027);
        expect(result.getFullYear()).toBe(2027);
        expect(result.getMonth()).toBe(2);
        expect(result.getDate()).toBe(28);
    });

    test('calculates Easter correctly for 2028', () => {
        const result = easter(2028);
        expect(result.getFullYear()).toBe(2028);
        expect(result.getMonth()).toBe(3);
        expect(result.getDate()).toBe(16);
    });
});
