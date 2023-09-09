console.log('main.js is loaded');

import cards from './cards.js';
import CardDeck from './card-deck.class.js';

const cardDeck = new CardDeck(cards);
for (let i = 0; i < 10; i++) {
    const card = cardDeck.pop();
    console.log(card);
}