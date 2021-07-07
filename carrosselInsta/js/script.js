class SlideStories{
    constructor(id){
        this.slide = document.querySelector(`[data-slide="${id}"]`);
        this.active = 0;
        this.init();
    }

    activeSlide(index){
        this.active = index;
        this.items.forEach(item => item.classList.remove('active'));
        this.items[index].classList.add('active');
        this.thumbItems.forEach(item => item.classList.remove('active'));
        this.thumbItems[index].classList.add('active');
        this.autoSlide();
    }

    // prev(){
    //     if(this.active > 0){
    //         this.activeSlide(this.active - 1);
    //     }else{
    //         this.activeSlide(this.items.length -1);
    //     }
    // }

    next() {
        if(this.active < this.items.length -1){
            this.activeSlide(this.active + 1);
        }else{
            this.activeSlide(0);
        }
    }

    addNavigation(){
        const nextBtn = this.slide.querySelector('.slideNext');
        // const prevBtn = this.slide.querySelector('.slidePrev');
        nextBtn.addEventListener('click', this.next);
        // prevBtn.addEventListener('click', this.prev);
    }

    addThumbItems(){
        this.items.forEach(()=> (this.thumb.innerHTML += `<button></button>`));
        this.thumbItems = Array.from(this.thumb.children);
    }

    autoSlide(){
        clearTimeout(this.timeout);
       this.timeout = setTimeout(this.next, 5000);
    }

    init(){
        this.next = this.next.bind(this);
        // this.prev = this.next.bind(this);
        this.items = this.slide.querySelectorAll('.slideItems > *');
        this.thumb = this.slide.querySelector('.slideThumb');
        this.addThumbItems();
        this.activeSlide(0);

        this.addNavigation();
    }
}


new SlideStories ('slide');