let nums = [-1,0,3,5,9,12];
let target = 9;

function serachBinary(arr, target){
    let left = 0;
    let right = arr.length - 1;

    while(right >= left){
        let middle =  Math.floor((left + right) / 2);
        if(arr[middle] === target){
            return middle;
        }  else if(target < arr[middle]){
            right = middle - 1;
        } else {
            //target > arr[middle]
            left = middle + 1;
        }  
    }

    return -1;
}

console.log(serachBinary(nums, target));
console.log(serachBinary(nums, 90));
console.log(serachBinary(nums, -1));