//1 -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

// let dog={
//     name:'Hamer',
//     color:'black',
//     age:5,
//     breed:'labrador',
//     weight:25
// }
//
// let human={
//     name:'Maria',
//     age:25,
//     city: 'Lviv',
//     height:170,
//     weight: 60
// }
//
// let car={
//     price:10000,
//     brand:'opel',
//     color:'silver',
//     height: 2.2,
//     country:'Ukraine'
// }
//
// let apartmen={
//     rooms:3,
//     floor:2,
//     balcony:true,
//     district:'center',
//    city:'Lviv'
// }
// let book={
//     title:'One for all',
//     pages:308,
//     genre:'novel',
//     year:2010,
//     author:'Genrih Djorzh'
// }

//2
// -- Створити масив та вивести його в консоль:
//  - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

// let dogs=['taksa','labrador','doberman','pikines','abuse'];
// for(let dog of dogs){
//     console.log(dog);
// }
// let people=['Galia','Vasya','Ivan','Katya','Vika'];
// for(let person of people){
//     console.log(person);
// }
// let cars=['opel','mercedes','lada','mitsubishi','bmw'];
// for (let car of cars){
//     console.log(car);
// }


//3
// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

// let house={
//     color:'silver',
//     rooms:5,
//     balcony:true,
//     color_rooms: ['white','red','silver','yellow','green'],
//     kitchen:{
//         window:true,
//         color:'white',
//         size:30
//     }
// }
//
// let driver={
//     name:'Vasya',
//     age:32,
//     transport:{
//         brand:'bmw',
//         color:'black',
//         year:2010
//     },
//     passengers:['Katya','Denys','Olena'],
//     avtomat:true
// }
//
// let toy={
//     color:'red',
//     title:'barbi',
//     set:['car','clothing','shoes'],
//     parameter:{
//         height:20,
//         weight:0.3
//     },
//     box:true
// }
//
// let table={
//     color:black,
//     height: 150,
//     weight: 4,
//     leg:{
//         height:120,
//         width:30,
//         color:'black'
//     },
//     set:['chairs','tablecloth','leg']
// }

//4
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!


// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// console.log(users[7].status);
// console.log(users[4].status);
// console.log(users[users.length-2].name);
// console.log(users[2].name);
// console.log(users[6].age);
// console.log(users[3].age);
// console.log(users[4].age+" "+users[4].name);
// console.log(users[5].age+" "+users[5].status);


//5 -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний



// let content=document.getElementById('content');
// console.log(content);

// let rules=document.getElementById('rules');
// console.log(rules);

// let content=document.getElementById('content');
// let rules=document.getElementById('rules');
// content.innerText='Hello!';
// rules.innerText='Goodbay!';

// let content=document.getElementById('content');
// let rules=document.getElementById('rules');
// content.style.backgroundColor='red';
// rules.style.backgroundColor='red';


// let content=document.getElementById('content');
// let rules=document.getElementById('rules');
// content.style.backgroundColor='blue';
// rules.style.backgroundColor='blue';


// let rules=document.getElementById('rules');
// console.log(rules.className);

// let elements=document.getElementsByClassName('fc_rules');
// console.log(elements);

// let elements=document.getElementsByClassName('fc_rules');
// for(let elem of elements){
//     console.log(elem);
//     elem.style.color='blue';
// }

