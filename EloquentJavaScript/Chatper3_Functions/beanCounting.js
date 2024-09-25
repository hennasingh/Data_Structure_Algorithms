/**
 * Write a function called countBs that takes a string as its only argument and returns a 
 * number that indicates how many uppercase B characters there are in the string.

    Next, write a function called countChar that behaves like countBs, except it takes a second 
    argument that indicates the character that is to be counted (rather than counting only
    uppercase B characters). Rewrite countBs to make use of this new function
 */

    //Option 1
function countBs1(string){
    let count = 0
    let strArray = string.split("")
    for(let i of strArray){
        if(i == 'B') count +=1
    }
    return count
}

//Option 2 - As lesson has not taught split method yet

function countBs(string){
    let count = 0;
    for(let i=0; i < string.length ; i++){
        if(string[i] == 'B') count += 1
    }
    return count
}

console.log(countBs('BOB'))

function countChar(string, char){
    let count = 0;
    for(let i=0; i < string.length ; i++){
        if( string[i] == char ) count += 1
    }
    return count
}

console.log(countChar("kakkerlak", "k"));