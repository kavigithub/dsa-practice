let arr1 = [1, 2, 6, 8];
let arr2 = [3, 4, 7];

/* 
let placeHolder = [];

    for(let j = 0; j < arr2.length; j++){
        if(arr1[j] > arr2[j]){
           placeHolder[j] = placeHolder[i] 
        } else {
            placeHolder[i] = placeHolder[j] 
        }
       }


console.log(placeHolder); */

let merged = [];
let i = 0, j = 0;

//keep comparing as long as both array still have items left
//while loop → perfect because we stop when one array is exhausted (not a fixed number of steps like a for loop).
while(i < arr1.length && j < arr2.length){
    if(arr1[i] <= arr2[j]){
        merged.push(arr1[i]);
        //merged[i] = arr1[i];
        i++; //move forward
    } else {
        merged.push(arr2[j]);
        //merged[j] = arr2[j];
        j++; //move forward
    }
}

console.log(merged, "before leftover handler") //[ 1, 2, 3, 4, 6, 7 ];

//After this, we need two more while loops to handle leftovers:
while(i < arr1.length) merged.push(arr1[i++]);
while(j < arr2.length) merged.push(arr2[j++]);

console.log(merged, "after leftover handler");