// нашли родитель для добавления карточек
const gridProducts = document.querySelector('#grid-products')

// ! fetch запрос на .then()

// fetch запрос на then()
// fetch("https://fakestoreapi.com/products")
//   .then(res => res.json())
//   .then(data => {
//     // все операции с данными с сервера будут происходить внутри второго then()
//     data.map(product => {
//       const item = document.createElement('p')
//       item.textContent = product.title
//       document.body.append(item)
//     })
//   });

// ! fetch запрос на async / await

// альтернативный популярный способ обработки асинхронных запросов в javascript
// 'под капотом' работает также как и then(), но визуально выглядит иначе
// в асинхронных функциях сохраняется порядок выполнения кода для синхронных и асинхронных действий

// перед объявлением асинхронной функции мы пишем слово async
async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  data.map(product => {
    // создаем карточку с данными
    const card = document.createElement("div");
    card.className = "product-card";
    card.classList.add("primary");
    // создаем заголовок
    const heading = document.createElement("h4");
    heading.textContent = product.title
    // создаем картинку
    const img = document.createElement('img')
    img.src = product.image
    img.alt = product.title
    // создаем описание товара
    const desc = document.createElement('p')
    desc.textContent = product.description
    // добавляем цену товара
    const price = document.createElement('p')
    price.textContent = `Price: ${product.price}€`
    // price.textContent = product.price + ' €'

    // добавляем элементы к карточке в append()
    // в том порядке, в котором вы хотите их увидеть в контейнере
    card.append(heading, price, img, desc)
    gridProducts.append(card)
  });
}

// не забываем вызвать функцию
fetchProducts();

// * пример именной асинхронной стрелочной функции
// const fetchProducts = async () => {
//   const res = await fetch("https://fakestoreapi.com/products")
//   const data = await res.json()
//   console.log(data)
// }

// * поскольку в стрелочных функциях мы кладем имя функции в константу м ы не сможем вызывать функцию до инициализации переменной
// fetchProducts()