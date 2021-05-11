const stageElem = document.querySelector('.stage');

// 현재 open 되있는 객체를 저장할 변수 선언.
let openedItem; 

function doorHandler(e){

    const targetElem = e.target;

    //dom스크립트에 접근하는 연산은 가장 무거움.
    // const openedItem = document.querySelector('.door-opened');


    if(openedItem){ // 클릭시 열려있는 객체가 있으면 닫게해주는 코드.
        openedItem.classList.remove('door-opened');
    }

    if(targetElem.classList.contains('door-body')){
        targetElem.parentNode.classList.add('door-opened');

        //dom스크립트에 접근하는것보다 좀더 빠름.
        openedItem = targetElem.parentNode;
    }
}

stageElem.addEventListener('click',doorHandler);
