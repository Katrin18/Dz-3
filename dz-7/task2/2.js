//1- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

let girl={name:'Vika', age:25, city:'Lviv'};
let model={height:180,weight:58,eyes:'blue'};
let boy={work:true,hobby:['basketball','cooking'],age:35};
let women={man:{name:'Anton'},children:false,dog:true};
let car={color:'silver',brand:'bmv',price:10000};

//2- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
let person={name:'Katya',age:19,city:'Lviv',hobby:['programming','dancing'],
parameters:{eyes:'curry',height:177 },work:true};
let dog={height: 50,weight:25, poroda:'labrador', commands: ['voice', 'sit', 'lie down'], passport:{year:2015,vaccinations:true}};
let dress={color:'pink', brand:'Lontin', size:{height:100, width:50, oversize:false}};
let house={addres:{number:7,street:'Nymel'}, floors:2,balcony:true};

//3 При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for(elem in girl){
//     console.log(elem);
// }
// for(elem in model){
//     console.log(elem);
// }
// for(elem in boy){
//     console.log(elem);
// }
// for(elem in women){
//     console.log(elem);
// }
// for(elem in car){
//     console.log(elem);
// }
// for(elem in person){
//     console.log(elem);
// }
// for(elem in dog){
//     console.log(elem);
// }
// for(elem in dress){
//     console.log(elem);
// }
// for(elem in house){
//     console.log(elem);
// }

//4 - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// let values_girl=Object.keys(girl);
// console.log(values_girl);
// let values_model=Object.keys(model);
// console.log(values_model);
// let values_boy=Object.keys(boy);
// console.log(values_boy);
// let values_women=Object.keys(women);
// console.log(values_women);
// let values_car=Object.keys(car);
// console.log(values_car);
// let values_person=Object.keys(person);
// console.log(values_person);
// let values_dog=Object.keys(dog);
// console.log(values_dog);
// let values_dress=Object.keys(dress);
// console.log(values_dress);
// let values_house=Object.keys(house);
// console.log(values_house);


//5 - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

let cars=[
    Opel={model:'astra',
        year:2005,
        power:100,
        color:'black'

    },
    Mitsubishi={model:'pajero',
        year:2015,
        power:200,
        color:'white'

    },
    BMW={model:'X5',
        year:2010,
        power:500,
        color:'silver'

    },
    LADA={model:'5',
        year:1990,
        power:50,
        color:'yellow'

    },
    Nissan={model:'patrol',
        year:2008,
        power:350,
        color:'white'

    },
    Mersedes={
    model:'gla',
        year:2018,
        power:700,
        color:'black'
    },
    Citroen={
        model:'ds3',
        year:2005,
        power:250,
        color:'red'
    },
    Skoda={
    model:'octavia',
        year:2010,
        power:300,
        color:'white'
    },
    Porsche={
    model:'cayenne',
        year:2019,
        power:1000,
        color:'black'
    },
    Daewoo={
    model:'lanos',
        year:2001,
        power:100,
        color:'silver'
    }

];
//6 - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
let cities=[
    Lviv={
    name:'Lviv',
        population:75,
        country:'Ukraine',
        region:'Lvivska oblast'
    },
    Kyiv={
        name:'Kyiv',
        population:80,
        country:'Ukraine',
        region:'Kyivska oblast'
    },
    Sokal={
        name:'Sokal',
        population:35,
        country:'Ukraine',
        region:'Lvivska oblast'
    }
];
//7- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

let cars2=[
    Opel={model:'astra',
        year:2005,
        power:100,
        color:'black',
        driver:{
        name:'Vasya',
            age:45,
            state:'man',
            stazh:15
        }

    },
    Mitsubishi={model:'pajero',
        year:2015,
        power:200,
        color:'white',
        driver:{
            name:'Anton',
            age:30,
            state:'man',
            stazh:10
        }

    },
    BMW={model:'X5',
        year:2010,
        power:500,
        color:'silver',
        driver:{
            name:'Ivan',
            age:33,
            state:'man',
            stazh:2
        }

    },
    LADA= {
        model: '5',
        year: 1990,
        power: 50,
        color: 'yellow',
        driver: {
            name: 'Petro',
            age: 29,
            state: 'man',
            stazh: 9
        }
    }
];

//8- проитерировать каждый массив из задания 5,6,7 при помощи while.


// let start_cars=0;
// while(start_cars<cars.length){
//     console.log(cars[start_cars]);
//     start_cars++;
// }
//
// let start_cities=0;
// while(start_cities<cities.length){
//     console.log(cities[start_cities]);
//     start_cities++;
// }
// let start_cars2=0;
// while(start_cars2<cars2.length){
//     console.log(cars2[start_cars2]);
//     start_cars2++;
// }

//9- проитерировать каждый массив из задания 5,6,7 при помощи for .

// for(let i=0;i<cars.length;i++){
//     console.log(cars[i]);
// }
// for(let i=0;i<cities.length;i++){
//     console.log(cities[i]);
// }
// for(let i=0;i<cars2.length;i++){
//     console.log(cars2[i]);
// }

//10- проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for(let elem of cars){
//     console.log(elem);
// }
//
// for(let elem of cities){
//     console.log(elem);
// }
// for(let elem of cars2){
//     console.log(elem);
// }

//11 - взять объекты из задания 1 и превратить каждый в json.


// let g=JSON.stringify(girl);
// let m=JSON.stringify(model);
// let b=JSON.stringify(boy);
// let w=JSON.stringify(women);
// let c=JSON.stringify(car);
// console.log(g);
// console.log(m);
// console.log(b);
// console.log(w);
// console.log(c);


//12 - взять json из задания 11 и превратить их обратно в объекты


// let clonedGirl=JSON.parse(g);
// let clonedModel=JSON.parse(m);
// let clonedBoy=JSON.parse(b);
// let clonedWomen=JSON.parse(w);
// let clonedCar=JSON.parse(c);
// console.log(clonedGirl);
// console.log(clonedModel);
// console.log(clonedBoy);
// console.log(clonedWomen);
// console.log(clonedCar);


//13- взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// for (let i=0;i<cars.length;i++){
//   const car=cars[i];
//   console.log(JSON.stringify(car));
// }

//14 - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// for (let i=0;i<cities.length;i++){
//     const city=cities[i];
//     console.log(JSON.stringify(city));
// }

//15- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// for (let i=0;i<cars2.length;i++){
//     const car=cars2[i];
//     let s=JSON.stringify(car);
//     carCopy=JSON.parse(s);
//     console.log(carCopy);
// }

//16- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// let users=[user={name:'Andriy',skills:['c++','java']},
//     user={name:'Ivan',skills:['js','c#']}];
// for(let i=0;i<users.length;i++){
//     console.log(users[i]);
//     console.log(users[i].skills);
// }

//17- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let ar=[];
// let users=[user={name:'Andriy',skills:['c++','java']},
//     user={name:'Ivan',skills:['js','c#']}];
// for(let i=0;i<users.length;i++){
//     console.log(users[i]);
//     console.log(users[i].skills);
//     ar[i]=users[i].skills;
//     console.log(ar[i]);
// }

//18- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//  let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
//  for(let i=0;i<users.length;i++){
//      console.log(users[i]);
//       console.log(users[i].skills);
//  }
//  let start=0;
//  while(start<users.length){
//      console.log(users[start]);
//      console.log(users[start].skills);
//
//      start++;
//  }

//19- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.


let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// let ar=[];
// for(user of users){
//     ar.push(user.address);
// }
// console.log(ar);


//20- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//  Всі данні в одному блоці.

// for(let i=0;i<users.length;i++){
//     const user=users[i];
//     const userDiv=document.createElement('div');
//     let address='';
//     for(const address1 in user.address){
//         address=address+" "+user.address[address1];
//     }
//     userDiv.innerText=`${user.name} ${address} ${user.age}${user.status}`;
//     document.body.appendChild(userDiv);
// }


//21 - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)


// for(let i=0;i<users.length;i++){
//     const user=users[i];
//     const div=document.createElement('div');
//     const h2=document.createElement('h2');
//     const p1=document.createElement('p');
//     const p2=document.createElement('p');
//     let address='';
//     for(const address1 in user.address){
//         address=address+" "+user.address[address1];
//     }
//     h2.innerText=user.name;
//     p1.innerText=user.age;
//     p2.innerText=address;
//     div.appendChild(h2);
//     div.appendChild(p1);
//     div.appendChild(p2);
//     document.body.appendChild(div);
// }



//22 З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]


// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
//
//
// for(const user of usersWithId)
// {
//     for(const city of citiesWithId){
//         if(user.id===city.user_id){
//             user.address=city;
//         }
//     }
//
// }
// console.log(usersWithId);

//23- створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// const elementById=document.getElementById('content');
// const text=elementById.innerText;
// elementById.style.height='400px';
// elementById.style.width='400px';
// console.log(text);

// const elementsByClassName=document.getElementsByClassName('rules');
// for(let elem of elementsByClassName){
//     elem.innerText='Hello world!';
//     elem.style.height='200px';
//     elem.style.width='200px';
//     console.log(elem);
// }

// const elementByTag=document.getElementsByTagName('h1');
// for(let elem of elementByTag){
//     elem.innerText='Hello world!';
//     elem.style.height='200px';
//     elem.style.width='200px';
//     console.log(elem);
// }


//24- за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

// let table=document.createElement('table');
// const tr=document.createElement('tr');
// const td1=document.createElement('td');
// const td2=document.createElement('td');
// const td3=document.createElement('td');
//
// tr.appendChild(td1);
// tr.appendChild(td2);
// tr.appendChild(td3);
// table.appendChild(tr);
//
// document.body.appendChild(table);

//25 -за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

// let table=document.createElement('table');
// for(let i=0;i<10;i++) {
//     const tr = document.createElement('tr');
//     for (let i = 0; i < 5; i++) {
//         const td = document.createElement('td');
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }
// document.body.appendChild(table);

//26- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let m=prompt('Enter m');
// let n=prompt('Enter n');
// let table=document.createElement('table');
// for(let i=0;i<m;i++) {
//     const tr = document.createElement('tr');
//     for (let i = 0; i < n; i++) {
//         const td = document.createElement('td');
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }
// document.body.appendChild(table);

//27 - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний

// const elembyClass=document.getElementsByTagName('*');
// for(let tag of elembyClass){
//     if(tag.getAttribute('class')){
//         console.log(tag);
//     }
// }

// const elembyP=document.getElementsByTagName('p');
// for(let p of elembyP){
//   p.innerText='hello oktenweb!';
// }

// const elembyDiv=document.getElementsByTagName('div');
// for(let div of elembyDiv){
//   div.style.color='red';
// }


