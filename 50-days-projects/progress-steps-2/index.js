let parent =  document.querySelector(".container");
let prevBtn =  document.querySelector(".prevBtn");
let nextBtn =  document.querySelector(".nextBtn");
let child = document.querySelectorAll('.round');
let progressLine = document.querySelector('.progressLine');

let currentActive = 1; 

nextBtn.addEventListener("click", () => {
    currentActive++;
    if(currentActive >= child.length){
        currentActive = child.length;
        nextBtn.disabled = true;
    }
    //console.log(currentActive, 'currentActive');
    update();
});

prevBtn.addEventListener("click", () => {
    currentActive--;
    //console.log(currentActive);
    if(currentActive < 1){
        currentActive = 1;
    }
    if(nextBtn.hasAttribute('disabled')){
        nextBtn.disabled = false;
    }
     update();
});

function update(){
    child.forEach((currentItem, index) => {
        console.log(currentItem, "currentItem");
        console.log(currentActive, "currentActive");
        console.log(index, "index");
        console.log(index < currentActive)
        if(index < currentActive){    
                currentItem.classList.add('highlight');
        } else {
            currentItem.classList.remove('highlight');
        } 
    });
    
    let percentage = ((currentActive - 1) / (child.length - 1)) * 100;
   //                      2 - 1 : 1            4 - 1 : 3
   //1 / 3 * 100 = 33.33
    progressLine.style.width= percentage + '%';

    if(currentActive === 1){
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }
}