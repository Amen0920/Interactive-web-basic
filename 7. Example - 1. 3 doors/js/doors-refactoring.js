const stageElem = document.querySelector('.stage');


let openedItem; 

//활성화 ( 문열음 )
function activate(elem){
    elem.classList.add('door-opened');
    openedItem = elem;
}
// 비활성화 ( 문닫음 )
function inactivate(elem){
    elem.classList.remove('door-opened');
}

//클릭핸들러 
function doorHandler(e){
    const targetElem = e.target;


    if(openedItem){
        inactivate(openedItem);
    }

    if(targetElem.classList.contains('door-body')){
        activate(targetElem.parentNode);
    }
}

stageElem.addEventListener('click', doorHandler);
activate(document.querySelector('.door:nth-child(2)'))

// 함수기능을 분리하는게 좀더 좋은 코딩방식임. 
// 활성화, 비활성화 분리!

// 함수 분리시 장점 : 위의 activate 바로 호출시켜서 실행시부터 활성화
// 시키는것 가능.
