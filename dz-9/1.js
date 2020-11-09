//1-  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// function DescraptionTag(titleOfTag,action,attrs=[]){
//     this.titleOfTag=titleOfTag;
//     this.action=action;
//     this.attrs=attrs;
// }
// let TagA=new DescraptionTag('<a>','Для создания ссылок',[{name:'accesskey',
//     actionOfAttr:'Активация ссылки с помощью комбинации клавиш.'},{titleOfAttr:'coords',
//     actionOfAttr:'Устанавливает координаты активной области.'}]);
// console.log(TagA);
//
// let TagDiv=new DescraptionTag('<div>','Предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
//     [{name:'align',
//     actionOfAttr:'Задает выравнивание содержимого тега <div>.'},{titleOfAttr:'title',
//     actionOfAttr:'Добавляет всплывающую подсказку к содержимому.'}]);
// console.log(TagDiv);
//
// let TagH1=new DescraptionTag('<h1>','Представляет собой наиболее важный заголовок первого уровня.',
//     [{name:'align', actionOfAttr:'Определяет выравнивание заголовка..'}]);
// console.log(TagH1);
//
// let TagSpan=new DescraptionTag('<span>','Предназначен для определения строчных элементов документа',
//     [{name:'accesskey',
//         actionOfAttr:'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},{titleOfAttr:'contextmenu',
//         actionOfAttr:'Устанавливает контекстное меню для элемента.'}]);
// console.log(TagSpan);
//
// let TagInput=new DescraptionTag('<input>','Позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',
//     [{name:'alt',
//         actionOfAttr:'Альтернативный текст для кнопки с изображением.'},{titleOfAttr:'border',
//         actionOfAttr:'Толщина рамки вокруг изображения.'}]);
// console.log(TagInput);
//
// let TagForm=new DescraptionTag('<form>',' Устанавливает форму на веб-странице',
//     [{name:'enctype',
//         actionOfAttr:'Способ кодирования данных формы.'},{titleOfAttr:'method',
//         actionOfAttr:'Метод протокола HTTP.'}]);
// console.log(TagForm);
//
// let TagOption=new DescraptionTag('<option>','Определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ',
//     [{name:'label',
//         actionOfAttr:'Указание метки пункта списка.'},{titleOfAttr:'selected',
//         actionOfAttr:'Заранее устанавливает определенный пункт списка выделенным.'}]);
// console.log(TagOption);
//
// let TagSelect=new DescraptionTag('<select>','Позволяет создать элемент интерфейса в виде раскрывающегося списка.',
//     [{name:'size',
//         actionOfAttr:'Количество отображаемых строк списка.'},{titleOfAttr:'form',
//         actionOfAttr:'Связывает список с формой.'}]);
// console.log(TagSelect);


//2-  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select


// class DescraptionTag{
//     constructor(titleOfTag,action,attrs=[]) {
//         this.titleOfTag=titleOfTag;
//         this.action=action;
//         this.attrs=attrs;
//     }
// }
// let TagA=new DescraptionTag('<a>','Для создания ссылок',[{name:'accesskey',
//     actionOfAttr:'Активация ссылки с помощью комбинации клавиш.'},{titleOfAttr:'coords',
//     actionOfAttr:'Устанавливает координаты активной области.'}]);
// console.log(TagA);
//
// let TagDiv=new DescraptionTag('<div>','Предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
//     [{name:'align',
//         actionOfAttr:'Задает выравнивание содержимого тега <div>.'},{titleOfAttr:'title',
//         actionOfAttr:'Добавляет всплывающую подсказку к содержимому.'}]);
// console.log(TagDiv);
//
// let TagH1=new DescraptionTag('<h1>','Представляет собой наиболее важный заголовок первого уровня.',
//     [{name:'align', actionOfAttr:'Определяет выравнивание заголовка..'}]);
// console.log(TagH1);
//
// let TagSpan=new DescraptionTag('<span>','Предназначен для определения строчных элементов документа',
//     [{name:'accesskey',
//         actionOfAttr:'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},{titleOfAttr:'contextmenu',
//         actionOfAttr:'Устанавливает контекстное меню для элемента.'}]);
// console.log(TagSpan);
//
// let TagInput=new DescraptionTag('<input>','Позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',
//     [{name:'alt',
//         actionOfAttr:'Альтернативный текст для кнопки с изображением.'},{titleOfAttr:'border',
//         actionOfAttr:'Толщина рамки вокруг изображения.'}]);
// console.log(TagInput);
//
// let TagForm=new DescraptionTag('<form>',' Устанавливает форму на веб-странице',
//     [{name:'enctype',
//         actionOfAttr:'Способ кодирования данных формы.'},{titleOfAttr:'method',
//         actionOfAttr:'Метод протокола HTTP.'}]);
// console.log(TagForm);
//
// let TagOption=new DescraptionTag('<option>','Определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ',
//     [{name:'label',
//         actionOfAttr:'Указание метки пункта списка.'},{titleOfAttr:'selected',
//         actionOfAttr:'Заранее устанавливает определенный пункт списка выделенным.'}]);
// console.log(TagOption);
//
// let TagSelect=new DescraptionTag('<select>','Позволяет создать элемент интерфейса в виде раскрывающегося списка.',
//     [{name:'size',
//         actionOfAttr:'Количество отображаемых строк списка.'},{titleOfAttr:'form',
//         actionOfAttr:'Связывает список с формой.'}]);
// console.log(TagSelect);


//3- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// let car= {
//     model: 'Toyota',
//     producer: 'Poland',
//     year: 2015,
//     speed: 240,
//     motor: 60,
//     drive: function () {
//         console.log((`їдемо зі швидкістю ${this.speed} на годину`))
//     },
//     info:function (){
//         console.log(this);
//     },
//     icreaseMaxSpeed:function (newSpeed){
//         this.speed+=newSpeed;
//     },
//     changeYear:function (newValue){
//         this.year=newValue;
//     },
//     addDriver:function (driver){
//         this.driver=driver;
//     }
// }
// car.drive();
// car.changeYear(2020);
// car.icreaseMaxSpeed(10);
// car.addDriver({name:'Vasya',age:45});
// car.info();




//4- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// function Car(model,producer,year,speed,motor){
//     this.model=model;
//     this.producer=producer;
//     this.year=year;
//     this.speed=speed;
//     this.motor=motor;
//     this.drive=function (){
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     }
//     this.info=function (){
//         console.log(this);
//     }
//     this.increaseMaxSpeed=function(newSpeed){
//         this.speed+=newSpeed;
//     }
//     this.changeYear=function(newValue){
//         this.year=newValue;
//     }
//     this.addDriver=function (driver){
//        this.Car=driver;
//     }
// }
// let Audi=new Car('A6','Germany',2015,240,60);
// Audi.drive();
// Audi.info();
// Audi.increaseMaxSpeed(20);
// Audi.changeYear(2018);
// Audi.addDriver({name:'Vasya',age:45});


//5- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// class Car {
//     constructor(model, producer, year, speed, motor) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.speed = speed;
//         this.motor = motor;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     };
//
//     info() {
//         console.log(this)
//     };
//
//     increaseMaxSpeed(newSpeed) {
//         this.speed += newSpeed
//     };
//
//     changeYear(newValue) {
//         this.year = newValue
//     };
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }
//
// let BMW = new Car('x5', 'France', 2010, 220, 50);
// BMW.drive();
// BMW.info();
// BMW.increaseMaxSpeed(10);
// BMW.changeYear(2019);
// BMW.addDriver({name: 'Petro', age: 50});
// console.log(BMW);


//6-створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом


// class Person{
//     constructor(name,age) {
//         this.name=name;
//         this.age=age;
//     }
// }
// class Cinderella extends Person{
//     constructor(name,age,sizeleg) {
//         super(name,age);
//         this.sizeleg=sizeleg;
//     }
// }
// class Prince extends Person{
//     constructor(name,age,size) {
//         super(name,age);
//         this.size=size;
//     }
//     Search(arr){
//         for(const elem of arr){
//             if(elem.sizeleg===this.size){
//                 console.log(`Cinderella is name ${elem.name}`);
//             }
//         }
//     }
// }
//
// const cinderella1=new Cinderella('Katya',19,38);
// const cinderella2=new Cinderella('Lillya',22,37);
// const cinderella3=new Cinderella('Vika',18,36);
// const cinderella4=new Cinderella('Yulia',20,38);
// const cinderella5=new Cinderella('Galia',27,35);
// const cinderella6=new Cinderella('Maria',19,39);
// const cinderella7=new Cinderella('Nastya',21,35);
// const cinderella8=new Cinderella('Olena',22,38);
// const cinderella9=new Cinderella('Vika',25,39);
// const cinderella10=new Cinderella('Anya',23,38);
//
// const arr=[cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10];
//
// const prince=new Prince('Jayson',33,36);
// prince.Search(arr);


// 7-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить


// function Cinderella(name,age,sizeleg){
//     this.name=name;
//     this.age=age;
//     this.sizeleg=sizeleg;
// }
// const cinderella1=new Cinderella('Katya',19,38);
// const cinderella2=new Cinderella('Lillya',22,37);
// const cinderella3=new Cinderella('Vika',18,36);
// const cinderella4=new Cinderella('Yulia',20,38);
// const cinderella5=new Cinderella('Galia',27,35);
// const cinderella6=new Cinderella('Maria',19,39);
// const cinderella7=new Cinderella('Nastya',21,35);
// const cinderella8=new Cinderella('Olena',22,37.5);
// const cinderella9=new Cinderella('Vika',25,39);
// const cinderella10=new Cinderella('Anya',23,38);
//
// let arr=[cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10];
//
// function Prince(name,age,size){
//     this.name=name;
//     this.age=age;
//     this.size=size;
//     this.Search=function(arr){
//         for(const elem of arr){
//             if(elem.sizeleg===this.size){
//                 console.log(`Cinderella name is ${elem.name}`);
//             }
//         }
//     }
// }
//
// const prince=new Prince('Joiy',33,37.5);
// prince.Search(arr);

