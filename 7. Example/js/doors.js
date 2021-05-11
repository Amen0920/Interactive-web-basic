const stageElem = document.querySelector('.stage');

console.log(stageElem)
function doorHandler(e){
    if(e.target.classList.contains('door-body')){
        e.target.parentNode.classList.add('door-opened');
    }
}

stageElem.addEventListener('click',doorHandler);
