let arr = [100, 7, 1, 5, -1, 4, 3, 2, 0];

function insertionSort(arr){
    let n = arr.length;
    //always consider my arr 1 element  is sorted;
    for(let i = 1; i < n; i++){
        let current = arr[i]; //initially 1
        let prev = i - 1; //initially 7

        //kadhi paraynt loop firvayach
        while(arr[prev] > current && prev >= 0){ // 7 > 1
            arr[prev + 1] = arr[prev]; // 1 index position var 7 la gheun ye;
            prev--; // and shift prev position to new Prev 
        }

        arr[prev + 1] = current;
    }
    return arr;
}

let result = insertionSort(arr);
console.log(result);