
function starPattern1(){ 
let n = 4;
    for(let i = 0; i < n; i++){
        let row = "";
        for(let j = 0; j < n; j++){
            row = row + " *";
        }
        console.log(row);
    }
}
starPattern1();
console.log('__________________________');
function starPattern2(){ 
let n = 4;
    for(let i = 0; i < n; i++){
        let row = "";
        for(let j = 0; j <= i; j++){
            row = row + " *";
        }
        console.log(row);
    }
}
starPattern2();
console.log('__________________________');

function starPattern3(){ 
let n = 5;
    for(let i = 0; i < n; i++){
        let row = "";
        for(let j = 0; j <= i; j++){
            row = row + (j + 1);
        }
        console.log(row);
    }
}
starPattern3();
console.log('__________________________');

function starPattern4(){ 
let n = 5;
    for(let i = 0; i < n; i++){
        let row = "";
        for(let j = 0; j <= i; j++){
            row = row + (i + 1);
        }
        console.log(row);
    }
}
starPattern4();
console.log('__________________________');

function starPattern5(){ 
let n = 5;
    for(let i = 0; i < n; i++){
        let row = "";
        for(let j = 0; j < (n-i); j++){
                        //5-0=5;
                        //5-1=4;
                        //5-2=3;
                        //5-3=2;
                        //5-4=1;
            row = row + (j + 1);
        }
        console.log(row);
    }
}
starPattern5();
console.log('__________________________');

function starPattern6(){ 
let n = 5;
    for(let i = 0; i < n; i++){
        let row = "";
        for(let j = 0; j < (n-i); j++){
            row = row + " * ";
        }
        console.log(row);
    }
}
starPattern6();
console.log('__________________________');

function starPattern7(){ 
let n = 5;
    for(let i = 0; i < n; i++){
        let row = "";
        //this loop for empty space
        for(let j = 0; j < n - (i + 1); j++){
                     //    5 - (0 + 1) = 4         
                     //    5 - (1 + 1) = 3         
                     //    5 - (2 + 1) = 2         
                     //    5 - (3 + 1) = 1         
                     //    5 - (4 + 1) = 0         
            row = row + " ";
        }

        //this is for star print
        for(let k = 0; k <= i; k++){
            row = row + "*"
        }
        console.log(row);
    }
}
starPattern7();
console.log('__________________________');

function patter8(){
    let n =5;
    for(let i =0; i < n; i++){
        let row = "";
        let numSwitch = 1;
        for(let j = 0; j <= i; j++){
            row = row + numSwitch;
            numSwitch === 1 ? numSwitch = 0 : numSwitch = 1
        }
         console.log(row);
    }
    
}
patter8();
console.log('__________________________');

function patter9(){
    let n =5;
    let numSwitch = 1;
    for(let i =0; i < n; i++){
        let row = "";
       
        for(let j = 0; j <= i; j++){
            row = row + numSwitch;
            numSwitch === 1 ? numSwitch = 0 : numSwitch = 1
        }
         console.log(row);
    }
    
}
patter9();