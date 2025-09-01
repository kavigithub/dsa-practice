//let num = 23562;
//let num = 0;
let num = -8912;

function countNums(num){
    if(num === 0) return 1;
    //converting negative numbers
    num = Math.abs(num);
    let counter = 0;
    while(num>0){    
    num = Math.floor(num/10);
    counter++;
    };
    return counter;
}

let result = countNums(num);
console.log(result)