 const carouselSlide = document.querySelector('.carousel_container_slide');
 const carouselImages = document.querySelectorAll('.carousel_container_slide img');


 //Buttons
 const prevBtn = document.querySelector('#prevBtn');
 const nextBtn = document.querySelector('#nextBtn');

 //Counter
 let counter = 1;
 const size = carouselImages[0].clientWidth;

 
 console.log(counter);
 carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

 //button Listeners
 nextBtn.addEventListener('click',()=>{
    console.log(counter);
    if(counter >= carouselImages.length-1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    console.log(counter);
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
 });
 prevBtn.addEventListener('click',()=>{
    console.log(counter);
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    console.log(counter);
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
 });

 //transitionEnd
 carouselSlide.addEventListener('transitionend', ()=>{
    console.log(carouselImages[counter]);
    if(carouselImages[counter].id === 'lastclone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstclone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter; 
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
 });