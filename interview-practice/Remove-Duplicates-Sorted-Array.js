let arr = [0,0, 1, 1, 2,2,2,4];

function removeDuplicate(arr){
    let x = 0;

    /* for(let i = 0; i < arr.length; i++){
        current = arr[i];
        next = current++;
        if(current === arr[next]){
            arr[i+1] = next+1;
        } else {
             arr[i+1] = 0;
        }
    }
    console.log(next)
    console.log(arr);
    return arr; */

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[x]){
            //move to x ahead
            x = x + 1;
            arr[x] = arr[i];
        }
    }

    console.log(arr);
    return x + 1;
}

removeDuplicate(arr);