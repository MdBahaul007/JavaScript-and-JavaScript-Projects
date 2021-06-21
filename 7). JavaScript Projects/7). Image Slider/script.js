const imgSlider = document.querySelector('.img-slider');
const imgSliderImg=document.querySelectorAll('.img-slider');

const previousBtn=document.querySelector('#previous-btn');
const nextBtn=document.querySelector('#next-btn');

let counter=1;
const size=imgSliderImg[0].clientWidth //clientwidth will only fetch the actual width of image
imgSlider.style.transform='translateX('+(-size*counter)+ 'px)';


nextBtn.addEventListener('click',()=>{
    counter++;
    imgSlider.style.transition="transform 0.4s ease-in-out";
    imgSlider.style.transform='translateX('+(-size*counter)+ 'px)';


})
previousBtn.addEventListener('click',()=>{
    counter--;
    imgSlider.style.transition="transform 0.4s ease-in-out";
    imgSlider.style.transform='translateX('+(-size*counter)+ 'px)';


})

//to loop back on 1st picture after lat picture or vice vers
imgSlider.addEventListener('transitionend',()=>{
     if (imgSliderImg[counter].id=== 'lastClone'){
        imgSlider.style.transition='none';
        counter=imgSliderImg.length-2;
        imgSlider.style.transform='translateX('+(-size*counter)+ 'px)';

     }
     if (imgSliderImg[counter].id=== 'firstClone'){
        imgSlider.style.transition='none';
        counter=imgSliderImg.length-counter;
        imgSlider.style.transform='translateX('+(-size*counter)+ 'px)';

     }
})  