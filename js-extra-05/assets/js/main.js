console.log('main.js is loaded');

const cards = [
    {
        name: "Armura magică",
        power: 15
    },
    {
        name: "Sirius din cer",
        power: 3
    },
    {
        name: "Pădurea întunecată",
        power: -14
    },
    {
        name: "Comandantul lighioanelor",
        power: -10
    }
];

const cardDeck = new CardDeck(cards);