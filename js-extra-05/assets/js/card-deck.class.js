export default class CardDeck {
    // 
    constructor(cards) {
        this.setCards(cards);
        this.shuffle();

        this.drawnCards = [];
    }


    setCards(cards) {
        this.cards = [];
        cards.forEach(card => this.cards.push({ ...card }));
    }


    shuffle() {
        this.cards.sort(() => 0.5 - Math.random());
    }


    pop() {
        if (!this.cards.length) {
            this.resetStack();
        }

        return this.moveCardToDrawn();
    }


    resetStack() {
        this.cards = this.drawnCards;
        this.drawnCards = [];
        this.shuffle()
    }


    moveCardToDrawn(){
        let drawnCard = this.cards.pop();
        this.drawnCards.push(drawnCard);
        return {...drawnCard};
    }
}