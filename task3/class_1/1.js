//1-- змінює колір тексту елемнту з ід main_header на будь-який інший

// let header=document.getElementById('main_header');
// header.style.color='red';


//2-- робить шириниу елементу ul 400 пікселів

// let elements=document.getElementsByTagName("ul");
// for(let elem of elements){
//     console.log(elem);
//     elem.style.width='400px';
//
// }

//3-- робить шириниу всіх елементів з класом linkList шириною 50%

// let link=document.getElementsByClassName('linkList');
// for(let elem of link){
//     elem.style.width='50%';
//     console.log(elem);
// }


//4-- отримує текст який зберігається в елементі з класом listElement2

// let text=document.getElementsByClassName('listElement2');
// for(let elem of text){
//     console.log(elem.textContent);
// }

//5 -- отримує всі елементи li та змінює ім колір фону на сірий

// let elements=document.getElementsByTagName("li");
// for(let elem of elements){
//     console.log(elem);
//     elem.style.backgroundColor='silver';
//
// }

//6 -- отримує всі елементи 'a' та додає їм клас anchor

// let elements=document.getElementsByTagName("a");
// for (let elem of elements){
//     elem.classList.add("anchor");
//     console.log(elem);
// }

//7-- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let elements=document.getElementsByTagName("a");
// for (let elem of elements){
//     if(elem.textContent == "link3"){
//         elem.style.fontSize='40px';
//         console.log(elem);
//     }
//
// }

//8-- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let elements=document.getElementsByTagName("a");
// for (let elem of elements){
//     elem.classList.add("class");
//     console.log(elem);
// }





//9-- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let elements=document.getElementsByClassName('sub-header');
// for (let elem of elements){
//     elem.style.backgroundColor=prompt('Enter background:');
//
// }

//10-- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let elements=document.getElementsByClassName('sub-header');
// for (let elem of elements){
//     if(elem.textContent=="content 2 segment") {
//         elem.style.backgroundColor = prompt('Enter background:');
//         console.log(elem);
//     }
// }

//11-- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let elements=document.getElementsByClassName('content_1');
// for(let elem of elements){
//     elem.innerText=prompt("Enter text:");
// }

//12-- отримати елементи p та змінити їм paddin на довільне значення

// let elements=document.getElementsByTagName("p");
// for(let elem of elements){
//     elem.style.padding='50px';
//     console.log(elem);
// }

//13-- отримати елементи з класом text2 та змінити їм текст на довільне значення

// let elements=document.getElementsByClassName('text2');
// for(let elem of elements){
//     elem.innerText='Hello world!';
//     console.log(elem);
// }

