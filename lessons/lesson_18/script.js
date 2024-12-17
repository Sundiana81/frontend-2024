// ! теория

// HTTP - HyperText Transfer Protocol - протокол передачи гипертекста
// API - Application Programming Interface - интерфейс для 'общения' программ друг с другом

// * делаем fetch запрос за данными к API (частный случай работы с сервером)

// * в ответ на fetch запрос приходит объект Promise в состоянии <Pending>
// * его не получится обработать синхронно - нужно использовать методы работы с асинхронными данными

// const data = fetch('https://dog.ceo/api/breeds/image/random')
// console.log(data)
// * ответ с сервера мы получаем в формате JSON
// JSON - JavaScript Object Notation

// ! делаем запрос

// находим пустой элемент img, чтобы добавить в него данные из API
const img = document.querySelector("#dog-img");
// нашли кнопку
const btnUpd = document.querySelector("#btn-update");

// создаем функцию с fetch запросом, которую можно переиспользовать
function getDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    // первым .then() дожидаемся 'сырых' данных и преобразуем их в JS объект с помощью .json()
    .then(res => res.json())
    // в data уже придут обработанные данные готовые к использованию
    .then(data => {
      // перезаписываем аттрибут src значением из data
      img.src = data.message;
    });
}

// вызов функции
getDog()

// вешаем на кнопку слушатель события
// по событию click будет вызываться функция getDog
// * здесь мы объявляем анонимную стрелочную функцию,которая вызовется в момент события click. эту функцию не получится переиспользовать

// btnUpd.addEventListener("click", ()=> {
//   getDog()
// });

// * здесь мы передаем уже функцию getDog, которая объявлена выше. она вызовется в момент события click
btnUpd.addEventListener('click', getDog)


// * task

// отобразить данные по выбранному персонажу из API на странице
// выведите картинку, status, name, origin (из какой локации этот персонаж)

// ...................................................................

const img2 = document.querySelector('#character-img')//ищем id через querySelector по #...
console.log(img2)//проверяем нашелся ли тег в консоли
const btnUpd2 = document.querySelector('#btn2-update')//нашли кнопку

//вызов функции. Загружаем персонажа при первом открытии страницы
getCharacter()

function getCharacter (){
    fetch('https://rickandmortyapi.com/api/character')
    .then(res2 => res2.json())
    .then(data2 => {
        console.log(data2)
         // Берем случайного персонажа из списка
        //  const randomCharacter = data2.results[Math.floor(Math.random() * data2.results.length)];
        const character = data2.results[2]
        
        
            img2.src = character.image; // устанавливаем источник изображения
            img2.alt = character.name; // устанавливаем альтернативный текст с именем персонажа
    })
    
}
getCharacter()

// Добавляем обработчик события на кнопку
btnUpd.addEventListener('click', getCharacter);