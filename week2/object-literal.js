/**
 * #1 Create an object literal named `monkey`
 * #2 Give it 3 unique properties
 * #3 Give it at least 2 behaviours/methods of your choice
 * #4 Calls the object's method(s) and output a result of your choice to the console.
 * #5 Convert the object literal to an Class
 * #6 Then call its method and output to the console.
 */

// Object literal with properties.
// Two methods: findBanana filters an array for strings matching `banana`.
// eatBanana pops an item from an array of `banana`s (or any array, technically and logs it out.
const monkey = {
    hands: 2,
    feet: 2,
    tail: true,
    findBanana: function (fruits) {
        return fruits.filter(fruit => fruit === 'banana');
    },
    eatBanana: function (bananas) {
        const banana = bananas.pop();
        console.log(`Eating ${banana}`);
    }
}

// Create an array of random fruits
const randomFruits = ['apple', 'banana', 'orange'];
// Find the banana in the random fruits
const banana = monkey.findBanana(randomFruits);
// Log out the banana array
console.log(banana);

// Monkey class which accepts hands, feet, tail arguments to its constructor
// It has methods for `findBanana` and `eatBanana` as well, whcih do the same.
class Monkey {
    constructor(hands, feet, tail) {
        this.hands = hands;
        this.feet = feet;
        this.tail = tail;
    }
    findBanana(fruits) {
        return fruits.filter(fruit => fruit === 'banana');
    }
    eatBanana(bananas) {
        const banana = bananas.pop();
        console.log(`Eating ${banana}`);
    }
}

// Instantiate George, a Monkey.
const george = new Monkey(2, 2, true);
// Ask George to find a banana
const bananas = george.findBanana(randomFruits);
// Log out the bananas he found.
console.log(bananas);
// Let George eat a banana
george.eatBanana(bananas);
// Check the bananas - they should be empty.
console.log(bananas);
