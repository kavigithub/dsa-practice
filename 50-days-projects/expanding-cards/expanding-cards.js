let clickItem = document.querySelectorAll('.child');
let parent = document.querySelector('.parent');
let siblings = parent.children;
//console.log(clickItem.length);

function getClickItemExpand(){
    Array.from(siblings).forEach((child) => {
        if(child.classList.contains("expandWidth")){
            child.classList.remove('expandWidth');
        }
    });
    this.classList.add('expandWidth');
}

for (let index = 0; index < clickItem.length; index++) {
    const element = clickItem[index];
    element.addEventListener("click", getClickItemExpand);
}

