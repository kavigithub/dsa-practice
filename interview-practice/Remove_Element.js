
let arr = [3,2,2,3];
let val = 3;
function removeElements(arr, val){
    let x = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== val){
            //3 !== 3
            //2 !== 3
            //2 !== 3
            //3 !== 3
            arr[x] = arr[i];
            x = x + 1; // x =0... 1, 2, 3
        }
    }
    console.log(x);
    return x
}
removeElements(arr, val);