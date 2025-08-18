let arr = [7, 1, 5, -1, 4, 3, 2, 0];
//find the min value in the arr; so we conside it as arr[0];
//n-1 firvala tar last element will be at its place
//compariosn
//swap value

function selectionSort(arr){
    //let minVal = arr[0]; //this is wrong
    let n = arr.length;
    for(let i = 0; i < n - 1; i++){
        //find the min in the arr
        let minVal = i; 
        //i + 1 is the next element of i 
        for(let j = i + 1; j < n; j++){
            if(arr[j] < arr[minVal]){
                minVal = j
            }
        }
        //swap in js
        let temp = arr[i];
        arr[i] = arr[minVal];
        arr[minVal] = temp;
    }

    return arr;
}

let result = selectionSort(arr);
console.log("result",result);
