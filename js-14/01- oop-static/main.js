console.log('Static methods and properties...');

/**
 * NON STATIC IMPLEMENTATION
 */
// class Dice {

//     constructor(diceSides = 6){
//         this.sides = diceSides;
//     }

//     roll(){
//         return Math.floor(Math.random() * this.sides) + 1;
//     }
// }

// const dice1 = new Dice();
// console.log(dice1.roll());


/**
 * NON STATIC IMPLEMENTATION
 */
class Dice {
    static sides = 6;

    static roll(){
        return Math.floor(Math.random() * Dice.sides) + 1;
    }
}

console.log(Dice.roll());



