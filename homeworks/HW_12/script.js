
// 1

const names = ["Мария", "Алексей", "Елена", "Дмитрий"];
const ages = [22, 31, 45, 53];

const result = [];

for (let i = 0; i < names.length; i++) {
  result.push(`${names[i]} ${ages[i]} лет/годов`); // шаблонная строка
  // result.push(names[i] + " " + ages[i] + " лет/годов"); // конкатенация
}

// for (const i in names) {
//     result.push(`${names[i]} ${ages[i]} лет/годов`);
// }
// for (const name of names) {
//     console.log(name);
// }

console.log(result);
console.log(result[0]);

// 2

const resultReverse = [];

for (let i = result.length - 1; i >= 0; i--) {
  resultReverse.push(result[i]);
}

const resultReverseMethod = result.reverse();

console.log(resultReverse);
console.log(resultReverseMethod);

// 3 

const countries = [];
countries.push("Франция", "Германия", "Италия");

const italy = countries.pop();
countries.unshift(italy);

console.log(countries);

// 4

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [];

for (const i in numbers) {
    console.log(numbers[i] * 2);
    newNumbers.push(numbers[i] ** 2); // Math.pow(numbers[i], 2)
    // newNumbers[i] = (numbers[i] * numbers[i])

}

// Поверхностное копирование (чтение информации)
const arr1 = [1, 2, 3];
const arr1Copy = arr1;

arr1Copy[0] = 1000;

console.log(arr1);
console.log(arr1Copy);

// Глубокое копирование (чтение и редактирование информации)

const arr = [1, 2, 3];
const arrCopy = [...arr]; // spread

arrCopy[0] = 1000;

console.log(arr);
console.log(arrCopy);
