//1 - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// -- перебрать (проитерировать) массив при помощи foreach()
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше


let arr=[5,18,35,75,85,99,6,1,47,3,6,20,85,96,101,41,2,36,7,10];

// const sort=arr.sort((a,b)=>a-b);
// console.log(sort);

// const sort1=arr.sort((a,b)=>b-a)
// console.log(sort1);

// const filter1=arr.filter((value) =>(value%3===0));
// console.log(filter1);

// const filter2=arr.filter((value) =>(value%10===0));
// console.log(filter2);

// arr.forEach(value => {
//     console.log(value);
// })

// const map=arr.map((value, index) => value*3)
// console.log(map);



//2 - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
// -- отфильтровать слова длиной менее 4х символов
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце


let words=['black','table','window','sun','tea','apple','house','car','scholl','univercity','academy','work','lviv','coffe'];

// const sort=words.sort();
// console.log(sort);

// const sort1=words.sort((a, b) => {
//     if(a>b){
//         return -1;
//     }
// })
// console.log(sort1);

// const filter=words.filter((value) =>(value.length<4));
// console.log(filter);

// const map=words.map(value => value+'!')
// console.log(map);



//3 Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором

// const sortAge=users.sort((a, b) => a.age-b.age)
// console.log(sortAge);

// const sortNumber=users.sort((a, b) => a.name.length-b.name.length)
//  console.log(sortNumber);

// const sortNumberDecr=users.sort((a, b) => b.name.length - a.name.length);
//  console.log(sortNumberDecr);

// const map=users.map(value => {
//     value.id=Math.round(Math.random() * 50);
//     return value})
// console.log(map);

// const sortId=users.sort((a, b) => a.id-b.id)
// console.log(sortId);



// 3-- наисать функцию калькулятора с 2мя числами и колбеком


// function calculator(a,b,callback){
//     return callback(a,b);
// }
// const sum=calculator(20,10,(a,b)=>a+b)
// const sub=calculator(20,10,(a,b)=>a-b)
// const mul=calculator(20,10,(a,b)=>a*b)
// const dil=calculator(20,10,(a,b)=>a/b)
//
//
//
// console.log(sum);
// console.log(sub);
// console.log(mul);
// console.log(dil);




