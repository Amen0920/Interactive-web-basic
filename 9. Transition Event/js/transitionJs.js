(function(){
    const ballElem = document.querySelector('.ball');

    window.addEventListener('click',function(e){
        // 클릭한곳 좌표출력.
        // console.log(e.clientX,e.clientY);
        ballElem.style.transform = `translate3d(${e.clientX-15}px,${e.clientY-15}px,0px)`
        
    })
})();