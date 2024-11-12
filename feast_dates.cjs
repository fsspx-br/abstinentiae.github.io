function feastDates() {
    const thisYear = new Date().getFullYear();
    return [
        new Date(thisYear, 0, 1),   // 01.01 Santa Maria Mãe de Deus
        new Date(thisYear, 0, 6),   // 06.01 Epifania
        new Date(thisYear, 11, 8),  // 08.12 Imaculada Conceição
        new Date(thisYear,  7, 15), // 15.08 Assunção
        new Date(thisYear,  2, 19), // 19.03 São José
        new Date(thisYear,  5, 29), // 29.06 Apóstolos S. Pedro e S. Paulo
        new Date(thisYear,  9, 12), // 12.10 Nossa Senhora Aparecida
        new Date(thisYear, 10, 1),  // 01.11 Todos os Santos
        new Date(thisYear,  11, 25) // 25.12 Natal de Nosso Senhor Jesus Cristo
    ];
}

module.exports = {
    feastDates
}