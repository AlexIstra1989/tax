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

//Slider reviews
new Swiper ('.reviews__slider', {
 slidesPerView: 1,
 autoHeight: true,
 spaceBetween: 10,
 //loop: true,
 
 navigation: {
  prevEl: '.button-prev',
  nextEl: '.button-next',
 },
});

//Slider content-reviews
new Swiper ('.content-reviews__slider', {
 slidesPerView: 1,
 spaceBetween: 10,
 
 pagination: {
  el: '.swiper-pagination',
  clickable: true,
 },
});

//Slider team
new Swiper ('.team__slider', {
 slidesPerView: 3,
 autoHeight: true,
 spaceBetween: 20,
 loop: true,
 
 navigation: {
  prevEl: '.team__button-prev',
  nextEl: '.team__button-next',
 },
 pagination: {
  el: '.swiper-pagination',
  clickable: true,
 },
 // Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				550: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
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

//Accordion
var accordionHeaders = document.querySelectorAll('.accordion__top');

accordionHeaders.forEach(function(header) {
  header.addEventListener('click', function() {
    this.classList.toggle('active');
    var accordionContent = this.nextElementSibling;
    accordionContent.classList.toggle('active');
  });
});

