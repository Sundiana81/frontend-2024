// находим пустой элемент img, чтобы добавить в него данные из API
const img = document.querySelector("#character-img");
// нашли кнопку
const btnUpd = document.querySelector("#btn-update");



    fetch('https://rickandmortyapi.com/api/character')


.then (res => res.json())
.then (data => {
    console.log(data.results[1].image);
    innerHeight.src = data.results[1].image;
})
