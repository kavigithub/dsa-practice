function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1 //if the element is not present in the array list
}

let arr = [4, 9, 1, 0, 3];

let result = linearSearch(arr, 10);
console.log(result);