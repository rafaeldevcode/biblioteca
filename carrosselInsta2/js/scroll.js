const slider = document.querySelector('.slider'),
    slides = Array.from(document.querySelectorAll('.slides'));

let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID = 0,
    currentIndex = 0;

slides.forEach((slide, index) =>{
    // const slideImage = slide.querySelectorAll('img');
    // slideImage.addEventListener('dragstart', (e) => e.preventDefault());

    // Touch events
    slide.addEventListener('touchstart', touchStart(index));
    slide.addEventListener('touchend', touchEnd);
    slide.addEventListener('touchmove', touchMove);

    // Mouse events
    slide.addEventListener('mousedown', touchStart(index));
    slide.addEventListener('mouseup', touchEnd);
    slide.addEventListener('mouseleave', touchEnd);
    slide.addEventListener('mousemove', touchMove);
});

// Desabilar o contexto do menu
window.oncontextmenu = function (event){
    event.preventDefault();
    event.stopPropagation();
    return false;
}

function touchStart(index){
    return function (event){
        currentIndex = index;
        startPos = getPositionX(event);
        isDragging = true;

        animationID = requestAnimationFrame(animation);
    }
}

function touchEnd(){
    isDragging = false;
    cancelAnimationFrame(animationID);

    const mobeBy = currentTranslate - prevTranslate;

    if(moveBy < -100 && currentIndex < slides.length - 1) currentIndex += 1
    
    if(moveBy > 100 && currentIndex > 0) currentIndex += 1;

    setPositionByIndex()
}

function touchMove(event){
    if(isDragging){
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos
    }
}

function getPositionX(event){
    event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animation(){
    setSliderPosition();
    if(isDragging) requestAnimationFrame(animation);
}

function setSliderPosition(){
    slider.style.transform = `translateX(${currentTranslate}px)`
}

function setPositionByIndex(){
    currentTranslate = currentIndex * -window.innerWidth;
    prevTranslate = currentTranslate;
    setSliderPosition();
}