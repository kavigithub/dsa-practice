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