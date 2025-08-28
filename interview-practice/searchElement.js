let arr = [2, 4, 0, 1, 3, 90];

function serachElement(arr, element){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === element) {
            return i;
        } 
    }
    return -1;
}

let result = serachElement(arr, 68);
console.log(result)

let arr2 = [8, -12, 3, -9, 23, -12, -234];

function returnNegativeNum(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            count++;
        }
    }
    return ('count of negative number is', count);
}

let countNegative = returnNegativeNum(arr2);
console.log(countNegative);