let arr = [9, 10, 3, 7, 2, 80, 65, 10, 80];
function findSecondLargestNumInArr(arr){
    if(arr.length < 2){
        return null;
    }

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

   for(let i = 0; i < arr.length; i++){
      if(arr[i] > firstLargest){
        secondLargest = firstLargest;
        firstLargest = arr[i];
      } else if(arr[i] > secondLargest && firstLargest !== arr[i]){
        //firstLargest !== arr[i] you need to handle duplicate case 
        secondLargest = arr[i]
      }
   }  
   
   //return secondLargest;
    return {
    firstLargest, 
    secondLargest
   }

}

let result = findSecondLargestNumInArr(arr);
console.log(result);
