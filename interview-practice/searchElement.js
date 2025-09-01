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

//write a function that retuns the largest number in an array
let arr3 = [5, 0, 10, 11, 100, -1, -2];
//let arr3 = [-3, -2, -9, -23];

function findLargestNumInArr(arr){
    if(arr.length === 0) return new Error("please add numbers in arry");
    //let largeNum = arr[0];
    let largeNum = -Infinity;

   // for(let i = 1; i < arr.length; i++){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largeNum){
            largeNum = arr[i];
        }
    }
    return largeNum;
};

let getLargeNum = findLargestNumInArr(arr3);
console.log(getLargeNum);

function findSmallNumInArr(arr){
    if(arr.length === 0) return new Error("please add numbers in arry");
    //let largeNum = arr[0];
    let minNum = Infinity;

   // for(let i = 1; i < arr.length; i++){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < minNum){
            minNum = arr[i];
        }
    }
    return minNum;
};

let getSmallNum = findSmallNumInArr(arr3);
console.log(getSmallNum);

