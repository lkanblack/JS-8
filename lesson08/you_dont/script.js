'use strict';

let books = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book');

    books[0].insertBefore(book[1], book[0]);
    books[0].insertBefore(book[4], book[2]);
    books[0].insertBefore(book[3], book[2]);
    books[0].insertBefore(book[5], book[2]);

    console.log(books);
    console.log(book);

let body = document.body;

    body.style = 'background-image: url(./image/you-dont-know-js.jpg)';
    
let tag = document.getElementsByTagName('h2');

    tag[2].innerHTML = "Книга 3. this и Прототипы Объектов";
    tag[2].style = "color: darkkhaki";

let adv = document.querySelector('.adv');

    adv.style = 'display:none';

let ul = document.getElementsByTagName('ul'),
    li = document.getElementsByTagName('li');

    ul[1].insertBefore(li[12], li[10]);
    ul[1].insertBefore(li[14], li[11]);
    ul[4].insertBefore(li[45], li[38]);
    ul[4].insertBefore(li[40], li[39]);
    ul[4].insertBefore(li[41], li[40]);

let newLi = document.createElement('li');

    newLi.innerHTML = "Глава 8: За пределами ES6";
    ul[5].appendChild(newLi);
    ul[5].insertBefore(li[57], li[56]);
    console.log(li);