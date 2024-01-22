const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
    color: 'red',
    isSportcar: false,
    year: 2023,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
    color: 'green',
    isSportcar: true,
    year: 2022,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
    color: 'red',
    isSportcar: false,
    year: 1995,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
    color: 'green',
    isSportcar: true,
    year: 2002,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
    color: 'red',
    isSportcar: false,
    year: 2001,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
    color: 'black',
    isSportcar: true,
    year: 2002,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
    color: 'white',
    isSportcar: false,
    year: 2021,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
    color: 'white',
    isSportcar: true,
    year: 2022,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
    color: 'black',
    isSportcar: false,
    year: 2010,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
    color: 'blue',
    isSportcar: true,
    year: 2022,
  },
];

//==================================

// Знайти найдорожчу машину.
const mostExpensiveCar = cars.reduce((acc, car) => {
  return acc.price > car.price ? acc : car;
});

// console.log(mostExpensiveCar);

//========================
// Знайти всі машини заданої марки (наприклад, Toyota).

const markaCar = cars.filter(car => car.make === 'Toyota');
// console.log(markaCar);

//===========================
// Порахувати загальну кількість машин усіх типів
const howMatchCars = cars.length;
// console.log(howMatchCars);

//=============================
//  Відсортувати машини за ціною(від найдешевшої до найдорожчої).

const chipestCar = cars.toSorted((a, b) => a.price - b.price);
// console.log(chipestCar);

//=========================
// Знайти всі машини певного кольору та року випуску.

const color = 'green';
const year = 2022;

const curentCar = cars.reduce((acc, car) => {
  if (car.color === color && car.year === year) {
    acc.push(car);
  }
  return acc;
}, []);

const curentCarFilter = cars.filter(car => {
  return car.color === color && car.year === year;
});
// console.log(curentCarFilter);
// console.log(curentCar);

//================
//Порахувати середню ціну всіх машин.

const sendPrice = cars => {
  let sum = 0;
  cars.forEach(car => (sum += car.price));
  return sum / cars.length;
};
// console.log(sendPrice(cars));

//==========================

//Знайти всі машини, у яких кількість на складі більша за 0.

const isOnAmount = cars => {
  return cars.filter(car => car.amount > 0);
};
// console.log(isOnAmount(cars));

//======================
//задача на події
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

const circle = document.querySelector('.outerCircle');

circle.addEventListener('click', () => {
  document.addEventListener('mousemove', changeCircle);
});
function changeCircle(e) {
  circle.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
}
// circle.addEventListener('click', removeListrnr);
// function removeListrnr() {
//   document.removeEventListener('mousemove', changeCircle);
// }

// let isCircleMoved = false;

// document.addEventListener('mousedown', handleMouseDown);

// function handleMouseDown() {
//   if (isCircleMoved) {
//     // Повернення в початкове положення
//     circle.style.transform = 'translate(-50%, -50%)';
//   } else {
//     // Переміщення за курсором
//     document.addEventListener('mousemove', handleMouseMove);
//   }

//   // Зміна стану
//   isCircleMoved = !isCircleMoved;

//   // Видалення подій після відпускання кнопки миші
//   document.addEventListener('mouseup', () => {
//     document.removeEventListener('mousemove', handleMouseMove);
//   });
// }

// function handleMouseMove(e) {
//   // Зміщення кола за курсором
//   circle.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
//   console.log(e.pageX);
// }
