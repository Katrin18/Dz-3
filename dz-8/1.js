//1- створит, функцію яка виводить масив

// function func(){
//     const arr=[10,15,96,75];
//     console.log(arr);
// }
// func();

//2 - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

// function rand(){
//
// const arr=[];
//     for(let i=0;i<10;i++) {
//         arr[i]= Math.round(Math.random() * 100);
//     }
//     console.log(arr);
// }
//  rand();


//3 - створити функцію яка приймає три числа та виводить та повертає найменьше.

// function Min(one,two,three){
//     const min=Math.min(one,two,three);
//     console.log(min);
//     return min;
// }
// Min(10,8,7);

//4- створити функцію яка приймає три числа та виводить та повертає найбільше.

// function max(one,two,three){
//     const max=Math.max(one,two,three);
//     console.log(max);
//     return max;
// }
// max(87,4,52);


//5- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше!!!!!

// function MinMax(){
// let max=0;
// let min=0;
//     for(const arg of arguments){
//         if(arg>max){
//             max=arg;
//         }
//         if(arg<min){
//             min=arg;
//         }
//     }
//     console.log(max);
//     return min;
// }
// MinMax(10,78,25,96,74,5,3,0);

//6 - створити функцію яка виводить масив

// function func(){
//     const arr=[10,15,96,75];
//     console.log(arr);
// }
// func();

//7 - створити функцію яка повертає найбільше число з масиву

// function maxArray(){
//    const array=[1,18,24,65,75,90];
//     const max=Math.max(...array);
//     console.log(max);
//     return max;
// }
// maxArray();


//8 - створити функцію яка повертає найменьше число з масиву

// function minArray(){
// const array=[1,18,24,0,75,90]
//     const min=Math.min(...array);
//     console.log(min);
//     return min;
// }
// minArray();

//9 - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

 // function values(array){
 //    let sum=0;
 //    for(let i=0;i<array.length;i++){
 //        sum=sum+array[i];
 //    }
 //     console.log(sum);
 //     return sum;
 // }
 //
 // values([1,18,36,85,101]);


//10 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень

 // function func(array){
 //    let sum=0;
 //    let ser;
 //    for(let i=0;i<array.length;i++){
 //        sum+=array[i];
 //     }
 //    ser=sum/array.length;
 //    console.log(ser);
 //    return ser;
 // }
 //
 // func([1,18,36,85,101]);


//11- Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

// function array(arr){
//     let count=0;
//     for(let elem of arr){
//         count++;
//     }
//     console.log(count);
// }
// array([{name:'Katya',age:19},{work:true,city:'Lviv'}]);

//12 - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

// function array(arr){
//     let count=0;
//     for(const elem of arr){
//       for(const keys in elem){
//           count++;
//       }
//     }
//     console.log(count);
//
// }
// array([{name:'Katya',age:19,dog:false},{work:true,city:'Lviv'}]);


//13 - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

// function func(arr1,arr2){
// let sum;
// const arr3=[];
// for (let i=0;i<arr1.length;i++){
//    for(let j=0;j<arr2.length;j++){
//        if(i===j){
//            sum=arr1[i]+arr2[j];
//            arr3.push(sum);
//        }
//    }
// }
// console.log(arr3);
// return arr3;
// }
// func([1,10,17,8],[25,3,18,7]);

//14- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// function func(arr,i){
//     let res=0;
//     for(let j=0;j<arr.length;j++){
//        if(j === i){
//            res=arr[i];
//            arr[j]=arr[j+1];
//            arr[j+1]=res;
//        }
//     }
//     console.log(arr);
// }
// func([{name:'vasya',age:25},{work:true,city:'Lviv'},{dog:true,children:false}],1);

//15 - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.


// function func(arr){
// const mas=[];
// for(let i=arr.length-1;i>=0;i--){
//     if(arr[i]===0){
//         mas.push(arr[i]);
//     }
//     else
//         mas.unshift(arr[i]);
// }
// console.log(mas);
// return mas;
//
// }
//
// func([5,0,75,0,6]);


//16 - Додає в боді блок з текстом "Hello owu"

// function addText(text){
//     const elem=document.createElement('div');
//     elem.innerText=text;
//     document.body.appendChild(elem);
// }
// addText('Hello owu!');

//17 - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function addElem(elem,text){
//     const element=document.createElement(elem);
//     element.innerText=text;
//     document.body.appendChild(element);
// }
// addElem('h2','Hello Ukraine!');

//18- приймає масив автомобілів (можна взяти з попередніх дз ),
// та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Всі властивості авто в обному блоці

// cars=[{model:'opel-astra',year:2005, power:100,color:'black'},
//     {model:'pajero',year:2015, power:200,color:'white'},
//     {model:'bmw-X5',year:2010,power:500,color:'silver'},
//     {model:'lada-5',year:1990,power:50,color:'yellow'}];
//
// function func(cars,id) {
//     const element=document.getElementById(id);
//     const list=document.createElement('ul');
//     for(let i=0;i<cars.length;i++){
//         const block=document.createElement('li');
//         const car=cars[i];
//         block.innerText=`${car.model}`;
//         list.appendChild(block);
//     }
//     element.appendChild(list);
//
// }
// func(cars,'cars');






//19- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.


//  let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true},
//      {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//  let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//      {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
//
//  function func(){
//      for(const user of usersWithId)
// {
//     for(const city of citiesWithId){
//         if(user.id===city.user_id){
//             user.address=city;
//         }
//     }
// }
//      console.log(usersWithId);
//  }
//  func(usersWithId,citiesWithId);


//20- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];


// function func(rules){
//     const wrap = document.createElement('div');
//     wrap.id = 'wrap';
//     for(let i=0;i<rules.length;i++) {
//     const rule = rules[i];
//     const block = document.createElement('div');
//     const number = document.createElement('h1');
//     const text = document.createElement('p');
//     block.className = `rules rule${i}`;
//     number.innerText = rule.title;
//     text.innerText = rule.body;
//     block.appendChild(number);
//     block.appendChild(text);
//     wrap.appendChild(block);
// }
//     document.body.appendChild(wrap);
// }
// func(rules);