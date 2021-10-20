function countLetter(letter, sentence) {

    /*
        Goal: Create a solution that would count the number of times a letter occurs in a string.
        Other things to consider: the input to the function must be a letter and a string. If the first input is not a letter, output to the user invalid input
    */


    let result = 0; // Zuitt created this variable to identify the number of occurrence/instances that the targeted value happened inside the string.
    // container that will determine the number of times a letter have been repeated.

    // lets create a control structure to accomplish item#1 
    if (letter.length > 1) { // check emmet toolkit. alternative: letter.length !== 1
        return undefined;
    }
    else {
    // the logic will fall on the else branch if the condition is "NOT" met(single character)
        // lets create a logic that will determine the occurrence of the letter inside the sentence/string
        /*for ([initial value/expression],
          initial value => lets declare a variable that will identify/describe the count of each index (usually i) inside the string.(index count)
            [condition],
          We want this process to evaluate the value of each index until it reaches the last index inside the string to terminate the process.
            [iteration/icrement]) -> will repeat the iteration/loop until a given condition has been met*/
        for (let indexCount = 0; indexCount < sentence.length; indexCount++) {
            // expression
            // lets create another control structure to determine if the target value has multiple occurrence/instances inside the string.
            if (sentence[indexCount] === letter) {  // checks if the current value of the index inside the sentence is an exact match to the letter
                result++;   // this will add +1 to the current value of the result
            }   // this will evaluate if the target letter is an exact match to the current value of the index inside the string.
            // we want to add another value to the result variable if we find a match for a single letter inside the string.
        }
        return result;
    }

    // Check first whether the letter is a single character.
    // If letter is a single character, count how many times a letter has occurred in a given sentence then return count.
    // If letter is invalid, return undefined.


}


function isIsogram(text) {
    /*
        Given a string, create a solution here that will output true if given string is an isogram and false otherwise. Disregard character case.
        an isogram is a word with no repeating characters (ie. "city" is an isogram, "hello" is not)
    */

    // An isogram is a word where there are no repeating letters.
    // The function should disregard text casing before doing anything else.
    // If the function finds a repeating letter, return false. Otherwise, return true.


}

function purchase(age, price) {
    /*
        Instruction:

        Students aged 13 to 21 years old as well as senior citizens (65 and up) both enjoy a 20% discount on purchased goods. 
        Students below 13 years of age cannot purchase without their parent's consent. 
        Given an age and a price, create a solution that will output a warning if age is below permitted age or the final purchase price otherwise. Final purchase price must have two decimal places.
    */

    // Return undefined for people aged below 13.
    // Return the discounted price (rounded off) for students aged 13 to 21 and senior citizens. (20% discount)
    // Return the rounded off price for people aged 22 to 64.
    // The returned value should be a string.
    

}

function findHotCategories(items) {

    /*
        Goal:
        Given an array of inventory items, create a solutions that will return an array of DISTINCT categories that have at least ONE of its items sold out.
        If all items are in stock, return a notification message instead. 

    */
    // Find categories that has no more stocks.
    // The hot categories must be unique; no repeating categories.

    // The passed items array from the test are the following:
    // { id: 'tltry001', name: 'soap', stocks: 14, category: 'toiletries' }
    // { id: 'tltry002', name: 'shampoo', stocks: 8, category: 'toiletries' }
    // { id: 'tltry003', name: 'tissues', stocks: 0, category: 'toiletries' }
    // { id: 'gdgt001', name: 'phone', stocks: 0, category: 'gadgets' }
    // { id: 'gdgt002', name: 'monitor', stocks: 0, category: 'gadgets' }

    // The expected output after processing the items array is ['toiletries', 'gadgets'].
    // Only putting return ['toiletries', 'gadgets'] will not be counted as a passing test during manual checking of codes.


}

function findFlyingVoters(candidateA, candidateB) {

    /*
        Goal:

        Given 2 arrays of voter ID's representing the votes of two different candidates, create a solution that will return an array of voter ID's who voted for BOTH candidates. 
        If no flying voters identified, return an "All good!" notification message instead.
    */
    // Find voters who voted for both candidate A and candidate B.

    // The passed values from the test are the following:
    // candidateA: ['LIWf1l', 'V2hjZH', 'rDmZns', 'PvaRBI', 'i7Xw6C', 'NPhm2m']
    // candidateB: ['kcUtuu', 'LLeUTl', 'r04Zsl', '84EqYo', 'V2hjZH', 'LIWf1l']

    // The expected output after processing the candidates array is ['LIWf1l', 'V2hjZH'].
    // Only putting return ['LIWf1l', 'V2hjZH'] will not be counted as a passing test during manual checking of codes.


}

module.exports = {
    countLetter,
    isIsogram,
    purchase,
    findHotCategories,
    findFlyingVoters
};