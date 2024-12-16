console.log("Start");

// const, let, var(deprecated)

// function - regular (именная, безымянная)
//  1. Можем вызвать функцию как до определения значения функции, так и после
//  2. Синтаксис
//  3. this (ведёт на объект, у которого выполняется действие)

// Arrow function - стрелочная функция
//  1. Можем вызвать функцию только после определения значения функции
//  2. Синтаксис
//  3. this не работает (window)

let a;

setTimeout(function () {
    a = 10;
    console.log(5)
}, 0);

console.log(a);

console.log("Finish");

let res = giveFiveAfterSevenSeconds();
console.log(res);

function giveFiveAfterSevenSeconds() {
    setTimeout(function () {
        return 5
    }, 7000)
}

res = giveFiveAfterSevenSeconds();
console.log(res);

const promise = new Promise(function (resolve, reject) {
    // Arrow function - стрелочная функция
    setTimeout(() => {
        if (10 > 5) {
            reject('Mistake');
        } else {
            resolve(5);
        }
    }, 7000);
})

promise
    .then((value) => console.log(value))
    .catch((err) => console.log(err))
    .finally(() => console.log("End"));
