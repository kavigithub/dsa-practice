let arr1 = [2, 7, 8, 3, 5, 1];
let target = 9;

function getTwoSumArrIndex(arr, target){
    let start = 0;
    let end = arr.length - 1;
    let newArrResult = [];

    while(end > start){
        let sum  = arr[start] + arr[end];
        if(sum === target) {
           // newArrResult.push(arr[start], arr[end]);
           newArrResult.push(start,end);
            start++;
            end--;
        } else if(sum > 0){
            end--
        } else {
            start++;
        }
    }

    console.log(newArrResult);
    return newArrResult;
}

getTwoSumArrIndex(arr1, target);