//let plaindromNum = 1234;
let plaindromNum = 109901;

function isNumPalidrom(num){
    if(num < 0) return false;
    let reverseNum = 0;
    let numCopy = num;

    while(num > 0){
        let getLastDigit = num % 10;
        reverseNum = (10 * reverseNum) + getLastDigit;
        num = Math.floor(num/10);
    }    

    return numCopy === reverseNum;

}

let result = isNumPalidrom(plaindromNum);
console.log(result);

let num2 = -1234;

function reverseNum(num){
    let reverseNum = 0;
    let numCopy = num;
    num = Math.abs(num); //positive num

    while(num > 0){
        let getLastDigit = num % 10;
        reverseNum = (10 * reverseNum) + getLastDigit;
        //remove last degit
        num = Math.floor(num/10);
    }
    let limit = Math.pow(2, 31);
    if(reverseNum < -limit || reverseNum > limit) return 0;

    return numCopy < 0 ? -reverseNum : reverseNum;
}

console.log(reverseNum(num2));
console.log(reverseNum(9870));

