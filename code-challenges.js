// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

var num4 = "haha"
// Expected output: "not a valid input."

//created a function divBy3 that takes a number as an argument
const divBy3 = (number) => {
    //I am using an if else if chain to sort through conditions (i.e. if a number is evenly divisible by 3 or not)
    //added the typeof condition to make sure only numbers go through the logic, the rest goes to the error catchall.
    if (number % 3 === 0 && typeof number === "number"){
        //return an interpolated string that says the number is evenly divisible
        return `${number} is evenly divisible by three.`
    } else if(number % 3 !== 0 && typeof number === "number"){
        //return an interpolated string that says the number is not evenly divisible.
        return `${number} is not evenly divisible by three.`
    //catchall for errors
    } else {
        return `not a valid input.`
    }
}

// console.log("CHALLENGE 1");
// console.log(divBy3(num1));
// console.log(divBy3(num2));
// console.log(divBy3(num3));
// console.log(divBy3(num4));




// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]
var myCohort = ["miguel", "ryan I", "ryan K", "jakob", "trip", "cynthia", "selam", "erica"]
// Expected output: ["Miguel", "Ryan I", "Ryan K", "Jakob", "Trip", "Cynthia", "Selam", "Erica"]

//OPTIONS
//we can split into a sub array and refer to index 0
//not sure, but does string.toUpperCase.charAt(0) work? string.toUpperCase(string.charAt(0))??
//substrings??? does that even exist??
    //it does.

//create a function named capitalize that takes in an array of words
const capitalize = (array) => {
    //we want to take in the values of the array one at a time, but iterate through every value
    return array.map(value => {
        //read up on the substr() method on MDN and I can use it to return a portion of a string starting at the specified index (1st argument) and extending of a given number of chars after syntax is string.substr(index, amt. of chars)
        //use substr() method to take the first letter and the rest of the word into substrings
        //substring of the first letter
        let firstLett = value.substr(0,1)
        //rest of the word, substring from index 1 extending to the length of the word minus one (I originally had (value.length - 1) but I tried it without and it still worked fine so I Just left it out).
        let restOfWord = value.substr(1, value.length)
        //return interpolated capital letter with the rest of the word.
        return `${firstLett.toUpperCase()}${restOfWord}`
    })
}

// console.log("CHALLENGE 2");
// console.log(capitalize(randomNouns));
// console.log(capitalize(myCohort));



// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

//thoughts:
//at first glance it seems like we'd have to use filter
//we used the sort filter yesterday during office hours in pig latin, I'm gonna experiment with it for this problem.
    //sort with no arguments arranges it not by the number as a whole, but by the first number so it would consider 100 less than 4 (b/c 1 < 4).

//create a function that takes in an array 
const numsOnly = (array) => {
    //use filter method to take in the values of the array and return a new array that contains only numbers
    let numsArr = array.filter(value => {
        //use typeof === "number" to only return values that are numbers
        return (typeof value === "number")
    })    
    //use the sort method to sort the numbers from least to greatest.
    return numsArr.sort(function(a, b){return a-b});
    //research on sort()
        //so, to make the sort method look at the entire number and not just the first digit we need to send it into a "compareFunction" that lives inside the sort() method, it sends two values from the array and sorts it according to the returned value (positive, negative, or zero)
        //to visualize when nums Arr is first created it is [ 8, 90, -8, 0, 46, 59, 107 ]
        //two values are taken (a = 8) (b = 90)
        //we return the value of a - b (8 - 90 = -82), since it is negative a < b, and moves the value of a to the left. (this function basically moves the smaller number to the left until it is the larger number in the compareFunction)
            //if I entered {return b-a} since (90 - 8 = 82) it's positive and will move 8 to the right etc etc. until it gets sorted from greatest to least
 
}
// console.log("CHALLENGE 3");
// console.log(numsOnly(mixedDataArray));


// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

//thoughts:
    //We also did this in pig latin and office hours yesterday...

//create a function that takes in a string
const firstVowelIndex = (string) => {
    //split the string into an array of characters
    let charArr = string.split("")
    //filter for vowels and return index (need filter method that takes value and index)
        //using map instead, filter returns the values but not the indexes but map does for some reason (would like to know why)
    let vowelOrNot = charArr.map((value, index) => {
        //checks if value is a vowel, if it is then return the index
        if (value === "a" || value === "e" || value === "i" || value === "o" || value === "u" || value === "A" || value === "E" || value === "I" || value === "O" || value === "U" )
        //returns to us an array that shows the index if the value was a vowel, and undefined if it is not.
        return index
    })
    //uses sort method in order to move the vowel indexes in front of the array.
    vowelIndexes = vowelOrNot.sort()
    //we only want the first index of the FIRST vowel, which would be index 0 in our vowelIndexes array
    return vowelIndexes[0]
    
}
// console.log("CHALLENGE 4");
// console.log(firstVowelIndex(vowelTester1));
// console.log(firstVowelIndex(vowelTester2));


// --------------------5) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

//create a function that takes in an array
const catsOnly = (array) => {
    //filter through the array and return only the values that have "cat"
   return array.filter(value =>{
        //destructure object 
        let { name, animal } = value;
        //if the animal key value pair is equal to "cat"
        if (animal === "cat"){
        //return that value
        return value
        }
    })
}
// console.log("CHALLENGE 5");
// console.log(catsOnly(toonimals));

// --------------------6) Using the toonimals variable, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

const noCats = (array) => {
    //filter through the array and return only non cats
   let notACat = array.filter(value =>{
        //destructure object 
        let { name, animal } = value;
        //if the animal key value pair is NOT equal to "cat"
        if (animal !== "cat"){
        //return that value
        return value
        }
    })
    //when we get out of the logic above we are given an array of objects, we want to take just the names
    let nonCatNames = notACat.map(value => value.name)
    //gives us an array of just the non cat names
    // console.log(nonCatNames);
    
    //Sarah said to try and turn the array into a string, let's use the join() method
    return nonCatNames.join(" ")
}
console.log("CHALLENGE 6");
console.log(noCats(toonimals));
