(function(){
    //DOM Elem
    const houseElem = document.querySelector('.house');
    const barElem = document.querySelector('.progress-bar')
    const stageElem = document.querySelector('.stage');

    const mousePos = { x: 0, y: 0};

    let maxScrollValue;


    //resize function 
    function resizeHandler(){
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }

    //scroll function
    function scollHandler(){
         // 3D 
         const scollPer = pageYOffset / maxScrollValue;
         const zMove =  scollPer * 980 - 490;
         houseElem.style.transform = `translateZ(${zMove}vw)`
 
         //progressbar 
         barElem.style.width = `${scollPer*100}%`
    }

    //mouse MOVE function 
    function mouseMoveHandler(e){
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
        
        stageElem.style.transform = `rotateX(${mousePos.y*5}deg) rotateY(${mousePos.x*5}deg)`
    }

    window.addEventListener('scroll',scollHandler);
    window.addEventListener('resize',resizeHandler);
    window.addEventListener('mousemove', mouseMoveHandler);

    stageElem.addEventListener('click',function(e){
        new Character({xPos : e.clientX / window.innerWidth * 100});
        
    })

    resizeHandler();

})();