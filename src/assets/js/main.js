//Slider section mistakes
if (window.innerWidth < 600) {
 const slider = document.querySelector('.slider');
 const prevSlide = document.querySelector('.prev-slide');
 const nextSlide = document.querySelector('.next-slide');

 let counter = 0;
 const slideWidth = slider.querySelector('.slide').clientWidth;

 prevSlide.addEventListener('click', () => {
   counter--;
   if (counter < 0) {
     counter = slider.children.length - 1;
   }
   slider.style.transform = `translateX(-${counter * slideWidth}px)`;
 });

 nextSlide.addEventListener('click', () => {
   counter++;
   if (counter > slider.children.length - 1) {
     counter = 0;
   }
   slider.style.transform = `translateX(-${counter * slideWidth}px)`;
 });
};

//Slider countries
new Swiper ('.countries__slider', {
 slidesPerView: 1,
 autoHeight: true,
 spaceBetween: 0,
 loop: true,
 
 pagination: {
  el: '.swiper-pagination',
  clickable: true,
 },

	// Эффекты
 effect: 'fade',
 fadeEffect: {
  crossFade: true
 },
 autoplay: {
  delay: 4000,
  disableOnInteraction: false,
 },
});

//Scale
const slider = document.getElementById("profit-slider");
const output = document.getElementById("profit-value");
const savingsOutput = document.getElementById("savings-value");
const years = 10;
output.textContent =  slider.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
savingsOutput.textContent =  (slider.value * years).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
slider.oninput = function() {
  output.textContent = this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  savingsOutput.textContent = (this.value * years).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}