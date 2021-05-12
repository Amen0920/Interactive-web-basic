 (function(){

    const menubarElem = document.querySelector('.menubar');
    const imageElem = document.querySelector('.image');
    
    function showValue (){
        let posY = imageElem.getBoundingClientRect().top;
        menubarElem.innerHTML = posY;
        // console.log(window.innerHeight);

        if(posY < window.innerHeight * 0.2){
            imageElem.classList.add('zoom');
        }
        if(posY >= window.innerHeight *0.2){
            imageElem.classList.remove('zoom');
        }
    }

    window.addEventListener('scroll', function(){

        showValue();
        //스크롤시 얼마만큼 스크롤했는지 menubar에 출력.
        //menubarElem.innerHTML = window.pageYOffset;

        //이미지의 첫 위치값 가져옴.
        // menubarElem.innerHTML = imageElem.offsetTop;

        // console.log(imageElem.getBoundingClientRect());

        // 스크롤에 따른 이미지의 y축값이 반양됨.
        // menubarElem.innerHTML = imageElem.getBoundingClientRect().top;
    })

 })();
 
 