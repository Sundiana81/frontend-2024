const  track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-item');
const prevBtn = document.querySelector('.control.prev');
const nextBtn = document.querySelector('.control.next');

let currentIndex = 0; // Текущий слайд

// Функция для обновления позиции слайдера

function updateSliderPosition(){
    const slideWidth = slides[0].clientWidth; // Ширина одного слайда
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`
}

//Что делает?
//Рассчитывает ширину одного слайда с помощью clientWidth
// (включает ширину + внутренние отступы).
// Сдвигает весь slider-track на расстояние, равное ширине текущего слайда умноженной на currentIndex.
// Например, если currentIndex = 1 и ширина слайда 300px, трек сдвинется на -300px.
// Для чего? Чтобы показать нужный слайд, мы используем transform: translateX() для изменения позиции.

// Обработчик для кнопки  "Вперёд"

nextBtn.addEventListener('click',()=>{
    if (currentIndex <slides.length -1){
        currentIndex++;
        updateSliderPosition();
    }

});

// Обработчик для кнопки "Назад"

prevBtn.addEventListener('click',()=>{
    if(currentIndex>0){
        currentIndex--;
        updateSliderPosition();
    }
});

window.addEventListener('resize', updateSliderPosition)
