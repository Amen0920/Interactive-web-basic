function Character(info){
    this.mainElem = document.createElement('div');
    this.mainElem.classList.add('character');
    this.mainElem.innerHTML = 
    `<div class="character-face-con character-head">
        <div class="character-face character-head-face face-front"></div>
        <div class="character-face character-head-face face-back"></div>
    </div>

    <div class="character-face-con character-torso">
        <div class="character-face character-torso-face face-front"></div>
        <div class="character-face character-torso-face face-back"></div>
    </div>

    <div class="character-face-con character-arm character-arm-right">
        <div class="character-face character-arm-face face-front"></div>
        <div class="character-face character-arm-face face-back"></div>
    </div>

    <div class="character-face-con character-arm character-arm-left">
        <div class="character-face character-arm-face face-front"></div>
        <div class="character-face character-arm-face face-back"></div>
    </div>

    <div class="character-face-con character-leg character-leg-right">
        <div class="character-face character-leg-face face-front"></div>
        <div class="character-face character-leg-face face-back"></div>
    </div>

    <div class="character-face-con character-leg character-leg-left">
        <div class="character-face character-leg-face face-front"></div>
        <div class="character-face character-leg-face face-back"></div>
    </div>`;
    document.querySelector('.stage').appendChild(this.mainElem);
   
    this.mainElem.style.left = `${info.xPos}%`;
    // 스크롤중인지 아닌자 확인하는 속성값
    this.scrollState = false;

    // 바로 이전 스크롤 위치
    this.lastScrollTop = 0;
    
    this.xPos = info.xPos;
    this.speed = 1;
    this.init();
    
}

Character.prototype = {
    constructor: Character,
    init : function(){
        const self = this;

        window.addEventListener('scroll',function(){
            clearTimeout(self.scrollState);

            if(!self.scrollState){
                self.mainElem.classList.add('running');
            }

            self.scrollState = setTimeout(function(){
                self.scrollState = false;
                self.mainElem.classList.remove('running');
            },500);
            
            if(self.lastScrollTop > pageYOffset){
                // 이전 스크롤 위치가 크다면 : 스크를 올림
                self.mainElem.setAttribute('data-direction','backward');
            }else {
                //현재 스크롤 위치가 크다면 스크롤 내림
                self.mainElem.setAttribute('data-direction','forward');
            }

            self.lastScrollTop = pageYOffset;

        });

        window.addEventListener('keydown',function(e){
            console.log(e.key)
            if(e.key === 'ArrowLeft'){
                self.mainElem.setAttribute('data-direction', 'left');
                self.mainElem.classList.add('running');
                self.xPos -= self.speed;
                self.mainElem.style.left = `${self.xPos}%`
                
            }else if(e.key === 'ArrowRight'){
                self.mainElem.setAttribute('data-direction', 'right');
                self.mainElem.classList.add('running');
            }
        });
        
        window.addEventListener('keyup',function(){
            self.mainElem.classList.remove('running');
        })
    }
};