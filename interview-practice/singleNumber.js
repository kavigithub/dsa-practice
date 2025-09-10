let nums = [4,1,2,1,2];

function singleNumberFind(nums){
  let obj = {};
  for(let i of nums){
    if(obj[i]){
        obj[i]++; 
    } else {
        obj[i] = 1;
    }
  }
 
  for(let i in obj){
   if(obj[i] === 1){
    console.log(i);
        return i
    }
  }
}

singleNumberFind(nums)