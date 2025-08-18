let arr = [4, 2, 9, 1, 0];

function bubbleSort(arr){
   let n = arr.length;
   //first loop
   for(let i = 0; i < n - 1; i++){
    let isSwapped = false;
    for(let j = 0; j < n - 1 - i; j++){
        //comparision between current one and the next one of current
        if(arr[j] > arr[j+1]){
            //we need to swap it 
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            isSwapped = true;
        }
    }
     if(!isSwapped) {break} //if swapped not happend then we need to break loop to avoid extra iteration
   } 
   return arr;
}
let result = bubbleSort(arr);
console.log(result);