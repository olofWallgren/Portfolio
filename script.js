 window.onload = startProgram;

 function startProgram(){
     animateSlide()
 }
 function animateSlide(){
     setInterval(showImages, 4000);
 }
 function showImages(){

     const images = document.querySelectorAll('.slider-container > img')
     console.log(images)

     for (let i = 0; i < images.length; i++ ) {
         if (images[i].classList.contains('show') ){
             images[i].classList.remove('show');
             let nextIndex = (i + 1) % images.length;
             images[nextIndex].classList.add('show');
             break;
         }

     }
 }