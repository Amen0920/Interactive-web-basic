(function(){
    const ballElem = document.querySelector('.ball');

    window.addEventListener('click',function(e){
        // 클릭한곳 좌표출력.
        // console.log(e.clientX,e.clientY);
        ballElem.style.transform = `translate3d(${e.clientX-15}px,${e.clientY-15}px,0px)`
        
    })

    ballElem.addEventListener('transitionend',function(e){
        this.classList.add('end');
        console.log(e.elapsedTime);
        console.log(e.propertyName);
    });

    // ballElem.addEventListener('transitionstart',function(){
    //     if(this.classList.contains('end')){
    //         this.classList.remove('end');
    //     }
    // });
})();