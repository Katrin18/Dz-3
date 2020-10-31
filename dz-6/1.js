//1 --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

// let numbers=[1,7,41,56,101];
// let str=['katya','school','programming','lviv','home'];
// let ar=[1,'vasya',75,true,'java'];
//
// console.log(numbers,str,ar);

//2 Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let ar=[1,78,84,3];
// console.log(ar[3]);

//3 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for(let i=0;i<10;i++){
//     document.write("<div>hello</div>");
// }

//4 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for(let i=0;i<10;i++){
//     document.write(`<div>hello${i}</div>`);
// }

//5 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i=0;
// while(i<20){
//     document.write("<h1>hello</h1>");
//     i++;
// }

//6 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i=0;
// while(i<20){
//     document.write(`<h1>hello${i}</h1>`);
//     i++;
// }

//7 - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let ar=[1,8,7,10,11,9,85,0,3,-8];
// for (let i=0;i<ar.length;i++){
//     console.log(ar[i]);
// }

//8 - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let ar=['katya','lilya','vasya','anton','maria','denys','petro','pavlo','nastya','vika'];
// for (let i=0;i<ar.length;i++){
//     console.log(ar[i]);
// }

//9 - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let ar=[1,8,10,true,false,'lviv','kyiv',5,0,99];
// for (let i=0;i<ar.length;i++){
//     console.log(ar[i]);
// }

//10 - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let ar=[1,8,10,true,false,'lviv','kyiv',5,true,99];
// for(let i=0;i<ar.length;i++){
//     if(typeof ar[i]=='boolean'){
//         document.write(ar[i]," ");
//     }
// }


//11 - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let ar=[1,8,10,true,false,'lviv','kyiv',5,true,99];
// for(let i=0;i<ar.length;i++){
//     if(typeof ar[i]=='string'){
//         document.write(ar[i]," ");
//     }
// }

//12  - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let ar=[1,8,10,true,false,'lviv','kyiv',5,true,99];
// for(let i=0;i<ar.length;i++){
//     if(typeof ar[i]=='number'){
//         document.write(ar[i]," ");
//     }
// }


//13 - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let ar=[];
// ar[0]=10;
// ar[1]='katya';
// ar[2]=7;
// ar[3]=true;
// ar[4]=-8;
// ar[5]=0;
// ar[6]=false;
// ar[7]='windows';
// ar[8]=true;
// ar[9]=-101;
// for(let i=0;i<ar.length;i++){
//     console.log(ar[i]);
// }


//14 - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for(let i=0;i<10;i++){
//     console.log(i);
//     document.write(i," ");
// }


//15 Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for(let i=0;i<100;i++){
//     console.log(i);
//     document.write(i," ");
// }


//16  Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for(let i=0;i<100;i=i+2){
// console.log(i);
//     document.write(i," ");
// }

//17  Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for(let i=0;i<100;i++){
//  if(i%2===0){
//      console.log(i);
//      document.write(i," ");
//  }
// }

//18 - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for(let i=0;i<100;i++){
//     if(i%2!==0){
//         console.log(i);
//         document.write(i," ");
//     }
// }

//19 - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// for(let i=0;i<60;i++){
//     for(let j=0;j<60;j++){
//         if(i===2){
//             break;
//         }
//         document.write(i+":"+j+"\n");
//     }
// }



//20 - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)


// for(let h=0;h<24;h++){
//     for(let m=0;m<60;m++){
//         for(let s=0;s<60;s++){
//             if(h===2&&m===20){
//                 break;
//             }
//             document.write(h+":"+m+":"+s+"\n");
//         }
//     }
// }


//21 - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let ar=[ 'a', 'b', 'c'];
// for(let i=0;i<ar.length;i++){
//     document.write(ar[i]);
// }

//22 - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let ar=[ 'a', 'b', 'c'];
// let start=0;
// while(start<ar.length){
//     document.write(ar[start]);
// start++;
// }


//23 - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// for(let ar of ['a','b','c']){
//     document.write(ar);
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let ar=[2,17,13,6,22,31,45,66,100,-18];


//1 перебрати його циклом while

// let start=0;
// while(start<ar.length){
//     document.write(ar[start]);
//     start++;
// }

//2 перебрати його циклом for

// for(let i=0;i<ar.length;i++){
//     document.write(ar[i]+" ");
// }

//3 перебрати циклом while та вивести  числа тільки з непарним індексом

// let start=0;
// while(start<ar.length){
//     if(start%2===0){
//         document.write(ar[start]+" ");
//     }
//     start++;
// }

//4 перебрати циклом for та вивести  числа тільки з непарним індексом
// let start=0;
// while(start<ar.length){
//     if(start%2!==0){
//         document.write(ar[start]+" ");
//     }
//     start++;
// }


//5 перебрати циклом while та вивести  числа тільки парні  значення

// for(let i=0;i<ar.length;i++){
//     if(i%2===0){
//         document.write(ar[i]+" ");
//     }
//
// }

//6 перебрати циклом for та вивести  числа тільки парні  значення


// for(let i=0;i<ar.length;i++){
//     if(i%2!==0){
//         document.write(ar[i]+" ");
//     }
//
// }

//7 замінити кожне число кратне 3 на слово "okten"

// for(let i=0;i<ar.length;i++){
//     if(ar[i]%3===0){
//         ar[i]='okten'
//     }
//     document.write(ar[i]+' ');
// }

//8 вивести масив в зворотньому порядку.

// for(let i=ar.length-1;i>=0;i--){
//     document.write(ar[i]+' ');
// }

//9 всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let start=ar.length-1;
// while(start>=0){
//     document.write(ar[start]+" ");
//     start--;
// }

// for(let i=ar.length-1;i>=0;i--){
//     document.write(ar[i]+" ");
// }


// let start=ar.length-1;
// while(start>=0){
//     if(start%2===0){
//         document.write(ar[start]+" ");
//     }
//     start--;
// }


// let start=ar.length-1;
// while(start>=0){
//     if(start%2!==0){
//         document.write(ar[start]+" ");
//     }
//     start--;
// }


// for(let i=ar.length-1;i>=0;i--){
//     if(i%2===0){
//         document.write(ar[i]+" ");
//     }
//
// }


// for(let i=ar.length-1;i>=0;i--){
//     if(i%2!==0){
//         document.write(ar[i]+" ");
//     }
//
// }


// for(let i=ar.length-1;i>=0;i--){
//     if(ar[i]%3===0){
//         ar[i]='okten'
//     }
//     document.write(ar[i]+' ');
// }




//10 створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.

// let masuv=[];
// for(let i=0;i<=100;i++){
// if(i%2===0){
//   masuv[i]=i;
//   document.write(masuv[i]+' ');
// }
// }
// document.write("<br>");
//
// let arr=[];
// for(let i=0;i<=100;i++){
//   if(i%2!==0){
//     arr[i]=i;
//     document.write(arr[i]+' ');
//   }
// }