//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// const elem=document.getElementById('text');
// elem.innerText='Text';
// const button=document.createElement('button');
// button.innerText='Hide';
// button.onclick=()=>{
//     elem.style.display='none';
// }
// document.body.appendChild(button);

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// const button=document.createElement('button');
// button.innerText='Hide';
// button.onclick=()=>{
//     button.style.display='none';
// }
// document.body.appendChild(button);


//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// const button=document.createElement('button');
// button.innerText='Enter';
// const input=document.createElement('input');
// input.type='number';
// button.onclick=()=>{
//     const value=input.value;
//     if(value<18){
//         alert('STOP! You are not 18 years old.');
//     }}
// document.body.appendChild(input);
// document.body.appendChild(button);


//- Создайте меню, которое раскрывается/сворачивается при клике

// const menu=document.getElementById('menu');
// const drinks=document.getElementById('drinks');
//
// menu.onclick=()=>{
//     if(drinks.style.display==='block'){
//         drinks.style.display='none';
//     }
//     else {
//         drinks.style.display='block';
//     }
// }


//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

// const list=document.createElement('ul');
// for (let i=0;i<10;i++){
//     const li=document.createElement('li');
//     const div=document.createElement('div');
//     const title=document.createElement('h2');
//     title.innerText="lorem";
//     const body=document.createElement('body');
//     body.innerText="'lorem ipsum dolo sit ameti";
//     li.appendChild(title);
//     li.appendChild(body);
//     div.style.backgroundColor='pink';
//     div.style.margin='20px';
//     div.appendChild(li);
//     list.appendChild(div);
//     const button=document.createElement('button');
//     button.innerText='Hide';
//     div.appendChild(button);
//     button.onclick=()=>{
//         body.style.display='none';
//     }
// }
// document.body.appendChild(list);


//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// const button=document.createElement('button');
// const myForm1=document.forms.Form1;
// const myForm2=document.forms.Form2;
// const input1=myForm1.input1;
// const input2=myForm1.input2;
// const input3=myForm2.input1;
// const input4=myForm2.input2;
// button.onclick=()=>{
//     console.log(input1.value);
//     console.log(input2.value);
//     console.log(input3.value);
//     console.log(input4.value);
// }
// document.body.appendChild(button);


//- Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.


// const func=function(row,cell,tag){
//     const table=document.createElement('table');
//     document.body.appendChild(table);
//
//     for(let i=0;i<row;i++){
//         const tr=document.createElement('tr');
//         table.appendChild(tr);
//         for(let j=0;j<cell;j++){
//             const td=document.createElement('td');
//            table.appendChild(td);
//         }
//     }
//     const elem=document.createElement(tag);
//     elem.appendChild(table);
//     document.body.appendChild(elem);
// }
// func(4,4,'div');


//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// const input1=document.createElement('input');
// input1.type='number';
// const input2=document.createElement('input');
// input2.type='number';
// const input3=document.createElement('input');
// const button=document.createElement('button');
// button.innerText='Table';
//
// button.onclick=()=>{
//     const table=document.createElement('table');
//        table.style.width='100%';
//         table.style.border= '3px solid black';
//     for(let i=0;i<input1.value;i++) {
//         const tr = document.createElement('tr');
//         table.appendChild(tr);
//         for (let j = 0; j < input2.value; j++) {
//             const td = document.createElement('td');
//             table.appendChild(td);
//             td.textContent=input3.value;
//         }
//     }
//     document.body.appendChild(table);
//     }
//
// document.body.appendChild(input1);
// document.body.appendChild(input2);
// document.body.appendChild(input3);
// document.body.appendChild(button);

//- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let array=[
//     {
//     id:1,
//     img_url:'1.jpg'
//     },
//     {
//         id:2,
//         img_url:'2.jpg'
//     },
//     {
//         id:3,
//         img_url:'3.jpg'
//     },
//     {
//         id:4,
//         img_url:'04.jpg'
//     },
//     {
//         id:5,
//         img_url:'5.jpg'
//     }
// ]
// const img=document.createElement('img');
// const button1=document.createElement('button');
// const button2=document.createElement('button');
// button2.innerText='<-';
// button1.innerText='->';
// img.style.width='400px';
// img.style.height='400px';
// let index=0;
// img.src=array[0].img_url;
// document.body.appendChild(img);
// document.body.appendChild(button2);
// document.body.appendChild(button1);
// button1.onclick=()=>{
// if(index<array.length-1){
//     index++;
//     img.src=array[index].img_url;
// }
// }
// button2.onclick=()=>{
//     if(index<array.length+1){
//         index--;
//         img.src=array[index].img_url;
//     }
// }


//  - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// const arr=['xxx','zzz','sss','kkk','qqq'];
// const input=document.createElement('input');
// input.type='text';
// const button=document.createElement('button');
// button.innerText='Enter';
// button.onclick=()=>{
//     for(let i=0;i<arr.length;i++){
//         if(input.value===arr[i]){
//             alert('STOP!!!!!');
//         }
//     }
// }
// document.body.appendChild(input);
// document.body.appendChild(button);



// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление
// по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// const menu=document.createElement('ul');
// const h2=document.getElementsByTagName('h2');
// const wrap=document.getElementById('wrap');
// const content=document.getElementById('content');
//
//  for(let i=0;i<h2.length;i++){
//      const li=document.createElement('li');
//       const a=document.createElement('a');
//     a.href='#'+i;
//    h2[i].setAttribute('id',i);
//   a.innerHTML=h2[i].innerText;
//
// li.appendChild(a);
// menu.appendChild(li);
//  }
// content.appendChild(menu);
//  content.style.width='40%';
//  wrap.style.width='60%';
//  content.style.float='left';
//  wrap.style.float='left';




//Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
//
// const myForm=document.forms.Form3;
// const chBox1=myForm.chBox1;
// const chBox2=myForm.chBox2;
// const chBox3=myForm.chBox3;
// const button=document.createElement('button');
// button.innerText='Filter';
// const div=document.createElement('div');
//
// let filtered=[];
// button.onclick=()=> {
//
//     if (chBox1.checked) {
//         filtered = usersWithAddress.filter(value => (value.status === false));
//     }
//     if (chBox2.checked) {
//         filtered = usersWithAddress.filter(value => (value.age >= 29));
//     }
//     if (chBox3.checked) {
//         filtered = usersWithAddress.filter(value => (value.address.city === 'Kyiv'));
//     }
//     document.write(JSON.stringify(filtered));
// }
//
// document.body.appendChild(button);





