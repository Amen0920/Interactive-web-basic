(function(){
    const houseElem = document.querySelector('.house');

    let maxScrollValue;

    window.addEventListener('scroll',function(){
        const zMove = pageYOffset / maxScrollValue * 980;
        
        houseElem.style.transform = `translateZ(${zMove-490}vw)`
        
    });

    function resizeHandler(){
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }


    window.addEventListener('resize',resizeHandler)
    
    resizeHandler();

})();