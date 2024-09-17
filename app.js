//00.EXO
//--------------------------------------------
/*const oddishOrEvenish = (num) => {
            //transform the number into a string
        let numStr = num.toString();
        let sum = 0;
            //for each "digit" of the string change it back to a number(integer) and add it starting from zero
        for (let digit of numStr) {
            sum += parseInt(digit);
        } console.log(sum)
        //after the numbers have been added and given a sum; check if the result is even 
        if (sum%2 ===0) {
            console.log(`Evenish`)
            //else its odd
        } else {
            console.log(`Oddish`)
        }

    }
oddishOrEvenish(43) //➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1
oddishOrEvenish(373) //➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1
oddishOrEvenish(4433) //➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0*/

//01.EXO
//------------------------------------------------
/*const getTotalPrice = (itemsArray) => {
        //créer une méthode qui va réduire l'array et calculer quantity * price
     const total = itemsArray.reduce((totalAmount, item) => {
        //0 is the accumulator at first 
        return totalAmount + (item.quantity * item.price)}, 0);
        //I had an issue with floating point at the candies total, i will toFixed() the total to have 1 maximum decimal in this case only would be normal to use 2 otherwise
        console.log(total.toFixed(1))
}
// 1 bottle of milk:
getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 }
  ]) //➞ 1.5
  
  // 1 bottle of milk & 1 box of cereals:
  //index 0 = (1*1.5) = 1.5
  //next you have 1.5 + (1*2.5) = 4
  getTotalPrice([                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 }
  ]) //➞ 4
  
  // 3 bottles of milk:
  getTotalPrice([
    { product: "Milk", quantity: 3, price: 1.50 }
  ]) //➞ 4.5
  
  // Several groceries:
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
  ]) //➞ 10.4
  
  // Some cheap candy:
  getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.10},
    { product: "Lollipop", quantity: 1, price: 0.20}
  ]) //➞ 0.3    
*/
//02.EXO
//-----------------------------------------------------------
/*const reverseOdd = (sentence) => {
    let words = sentence.split(" "); // Split the sentence into words
    //go through the letters 1 by 1
    for (let i = 0; i < words.length; i++) {
        //index i being the number of letters 
        if (words[i].length % 2 !== 0) { // Check if the word length is odd
            words[i] = words[i].split("").reverse().join(""); // split the word in an array of letters, reverse the word, then join them back without space
        }
    }
    console.log(words.join(" ")); // again joigning but this time the different words to the sentence... Join the words back into a sentence
}

reverseOdd("Bananas") //➞ "sananaB"

reverseOdd("One two three four") //➞ "enO owt eerht four"

reverseOdd("Make sure uoy only esrever sdrow of ddo length")
//➞ "Make sure you only reverse words of odd length"
*/
//03.EXO
//-----------------------------------------------------------
/*const isSmooth = (sentence) => {
    let words = sentence.split(" ")
    for (let i=0 ; i<words.length -1 ; i++){
        //"Marta" word[i][words[i].length-1] = la valeur de la longueur du mot (.length -1 donne toujours le dernier index)
        // différent de "appreciated" = words[i+1](next word)at index 0 of the word thus "a"
        //etc. etc. for the whole sentence coming from iteration of i in the for loop
        if (words[i][words[i].length -1] !== words[i+1][0]){
            //if !== then gives a false and doesn't look further up the sentence
            console.log(false);
            return;
            } // else nothing at all get out the conditional     
        }
        // if the negative condition doesn't pass then the sentence is smooth
        console.log(true)
    }
   


isSmooth("Marta appreciated deep perpendicular right trapezoids") //➞ true

isSmooth("Someone is outside the doorway") //➞ false

isSmooth("She eats super righteously") //➞ true
*/
//04.EXO
//-------------------------------------------------------------
/*const sevenBoom = (givenArray) => {
    let flatten = givenArray.toString();{
        if (flatten.includes('7')){
            console.log("Boom!")
        } else {
            console.log("there is no 7 in the array")
        }
    }
}
sevenBoom([1, 2, 3, 4, 5, 6, 7]) //➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) //➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) //➞ "Boom!"
// 97 contains the number seven.
*/
//05.EXO
//---------------------------------------------------------------
/*const convert = (toConvert) => {
    
    let numbersDegress = toConvert.slice(0, -2);
    let typeOfDegrees = toConvert.slice(-1);
    
    //console.log(typeOfDegrees)
    //console.log(numbersDegress);
    //console.log(typeof(numbersDegress));
    //console.log(typeof(numbersDegress));
    //if (typeOfDegrees === "C"){
    //    console.log(`${(parseFloat(numbersDegress) * 9 / 5 )+32}°F`)
    //} else if(typeOfDegrees === "F"){
    //    console.log(`${(parseFloat(numbersDegress)-32) * 5 / 9}°C`)
    //} else {
    //    console.log("Error!")
    //} This gives me -7.222222222222°C on second exercice...

    
    let conversionToF = ((parseFloat(numbersDegress) * 9 / 5 )+32)
    let conversionToC = ((parseFloat(numbersDegress) -32) * 5 / 9)
    if (typeOfDegrees === "C") {
        console.log(`${parseInt(conversionToF)}°F`)
    } else if (typeOfDegrees === "F") {
        console.log(`${parseInt(conversionToC)}°C`)
    } else {
        console.log(`Error`)
    }
}
    
convert("644684684646°C") //➞ "95°F"

convert("19°F") //➞ "-7°C"

convert("33") //➞ "Error"
*/
//06.EXO
//-------------------------------------------------------------------
/*const findBrokenKeys = (goodOne, badOne) => {
    let brokenKeysArray = [];
    let goodArray = goodOne.split("");
    let badArray = badOne.split("");
    for (let i=0; i < goodArray.length ; i++){
        //oh god ... so iterate, go through the array, push the different character from good and bad
        // AND the new array we are pushing into DOES NOT include whatever good and bad array have different
        //so no letters previously pushed in shall be pushed again
        if (goodArray[i] !== badArray[i] && !brokenKeysArray.includes(goodOne[i])){
            brokenKeysArray.push(goodOne[i])
            
        }
    }
    console.log(brokenKeysArray)
}
findBrokenKeys("happy birthday", "hawwy birthday") // ➞ ["p"]

findBrokenKeys("starry night", "starrq light") // ➞ ["y", "n"]

findBrokenKeys("beethoven", "affthoif5") // ➞ ["b", "e", "v", "n"]
*/


