(function(){
    const houseElem = document.querySelector('.house');

    let maxScrollValue = document.body.offsetHeight - window.innerHeight

    window.addEventListener('scroll',function(){
        const zMove = pageYOffset / maxScrollValue * 980;
        
        houseElem.style.transform = `translateZ(${zMove-490}vw)`
        
    });

})();