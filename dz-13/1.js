//Треба реалізувати свій розпорядок дня.
// Колбеками, промісами.
//
// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.


//callback


// function wokeUp(alarmclock,callback){
//     console.log('Новий день!');
//     setTimeout(()=>{
//         if(alarmclock===false){
//     callback('Error!!',null)
// }
// else {
//     callback(null);
//     }
//     },1000)
//
// }
//
// function breakfast(food,callback){
//     console.log('Відкриваємо холодильник');
//     setTimeout(()=>{
//         if(food===false){
//             callback('Error!!!',null)
//         }else{
//             callback(null);
//         }
//     },500)
//
// }
//
// function brushTeeth(water,callback){
//     console.log('Відкриваємо кран');
//     setTimeout(()=>{
//         if(water===false){
//             callback('Error!!!',null)
//         }
//         else{
//             callback(null);
//         }
//     },2000)
//
// }
//
// function goWork(bus,callback){
//     console.log('Йду на зупинку');
//     setTimeout(()=>{
//         if(bus===false){
//             callback('Error!!!',null)
//         }
//         else {
//             callback(null);
//         }
//     },1000);
// }
//
// function work(mask,callback){
//     console.log('Заходжу на роботу');
//     setTimeout(()=>{
//         if(mask===false){
//             callback('Error!',null)
//         }
//         else{
//             callback(null);
//         }
//     },1500);
// }
//
// function supper(money,callback){
//     console.log('Йду в магазин');
//     setTimeout(()=>{
//         if(money<100){
//             callback('Error!',null);
//         }
//         else{
//             callback(null);
//         }
//     },3000);
// }
//
// function study(internet,callback){
//     console.log('Перевіряю інтернет');
//     setTimeout(()=>{
//         if(internet===false){
//             callback('Error!!!',null);
//         }
//         else{
//             callback(null);
//         }
//     },2000);
// }
// function sleep(exhaustion,callback){
//     console.log('Лягаю в ліжко');
//     setTimeout(()=>{
//         if(exhaustion===false){
//             callback('Error!',null);
//         }
//         else{
//             callback(null);
//         }
//     },1500);
// }

// wokeUp(true, (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     else {
//         console.log('Проснулася!');
//
//         breakfast(true, (err) => {
//             if (err) {
//                 console.log(err);
//                 return;
//             } else {
//                 console.log('Поснідала!');
//                 brushTeeth(true,(err)=>{
//                     if(err){
//                         console.log(err);
//                         return;
//                     }
//                     else {
//                         console.log('Почистила зуби!');
//                         goWork(true,(err)=>{
//                             if(err){
//                                 console.log(err);
//                                 return;
//                             }
//                             else {
//                                 console.log('Їду на роботу!');
//                                 work(true,(err)=>{
//                                     if(err){
//                                         console.log(err);
//                                         return;
//                                     }
//                                     else{
//                                         console.log('Працюю!');
//                                         supper(200,(err)=>{
//                                             if(err){
//                                                 console.log(err);
//                                                 return;
//                                             }
//                                             else{
//                                                 console.log('Повечеряла!');
//                                                 study(true,(err)=>{
//                                                     if(err){
//                                                         console.log(err);
//                                                     }
//                                                     else{
//                                                         console.log('Вчуся!');
//                                                         sleep(true,(err)=>{
//                                                             if(err){
//                                                                 console.log('Error!!!');
//                                                             }
//                                                             else {
//                                                                 console.log('Заснула!')
//                                                             }
//                                                         })
//                                                     }
//                                                 })
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// });


//promise



// function wokeUp(alarmclock){
//     return new Promise((resolve, reject) => {
//         console.log('Новий день!');
//         setTimeout(()=>{
//             if(alarmclock===false){
//                 reject('Error!!')
//             }
//             else {
//                 resolve(null);
//             }
//         },1000)
//     })
//
//
// }
//
// function breakfast(food){
//     return new Promise((resolve, reject) => {
//         console.log('Відкриваємо холодильник');
//         setTimeout(()=>{
//             if(food===false){
//                 reject('Error!!!')
//             }else{
//                resolve(null);
//             }
//         },500)
//     })
//
// }
//
// function brushTeeth(water){
//     return new Promise((resolve, reject) => {
//         console.log('Відкриваємо кран');
//         setTimeout(()=>{
//             if(water===false){
//                 reject('Error!!!')
//             }
//             else{
//                 resolve(null);
//             }
//         },2000)
//     })
// }
//
// function goWork(bus){
//     return new Promise((resolve, reject) => {
//         console.log('Йду на зупинку');
//         setTimeout(()=>{
//             if(bus===false){
//                 reject('Error!!!')
//             }
//             else {
//                 resolve(null);
//             }
//         },1000);
//     })
// }
//
// function work(mask){
//     return new Promise((resolve, reject) => {
//         console.log('Заходжу на роботу');
//         setTimeout(()=>{
//             if(mask===false){
//                 reject('Error!')
//             }
//             else{
//                 resolve(null);
//             }
//         },1500);
//     })
// }
//
// function supper(money){
//     return new Promise((resolve, reject) => {
//         console.log('Йду в магазин');
//         setTimeout(()=>{
//             if(money<100){
//                 reject('Error!');
//             }
//             else{
//                 resolve(null);
//             }
//         },3000);
//     })
// }
//
// function study(internet){
//     return new Promise((resolve, reject) => {
//         console.log('Перевіряю інтернет');
//         setTimeout(()=>{
//             if(internet===false){
//                 reject('Error!!!');
//             }
//             else{
//                 resolve(null);
//             }
//         },2000);
//     })
// }
// function sleep(exhaustion){
//     return new Promise((resolve, reject) => {
//         console.log('Лягаю в ліжко');
//         setTimeout(()=>{
//             if(exhaustion===false){
//                 reject('Error!');
//             }
//             else{
//                 resolve(null);
//             }
//         },1500);
//     })
// }
//
// wokeUp(true).then(wokeUp=>{
//     console.log('Проснулася!');
//     return breakfast(true);
// })
// .then(value=>{
//     console.log('Поснідала!');
//     return brushTeeth(true);
// })
// .then(value => {
//     console.log('Почистила зуби!');
//     return goWork(true);
// })
// .then(value => {
//     console.log('Їду на роботу!');
//     return work(true);
// })
// .then(value => {
//     console.log('Працюю!');
//     return supper(200);
// })
// .then(value => {
//     console.log('Вечеряю!');
//     return study(true);
// })
// .then(value => {
//     console.log('Вчуся');
//     return sleep(true);
// })
//     .then(value => {
//         console.log('Заснула!');
//     })
// .catch(reason => {
//     console.log(reason);
// })
// .finally(()=>{
//     console.log('Кінець дня!');
// })