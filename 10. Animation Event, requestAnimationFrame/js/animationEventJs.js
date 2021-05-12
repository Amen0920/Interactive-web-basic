(function(){
    const ballElem = document.querySelector('.ball');

    ballElem.addEventListener('click',function(){
        ballElem.style.animation = 'ball-ani  alternate 1s 3 forwards';
    });

    ballElem.addEventListener('animationend',function(e){
        ballElem.classList.add('end');
    });
    ballElem.addEventListener('animationiteration',function(){
        console.log('반복!');
    })
    
})();