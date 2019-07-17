'use strict';

function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createElement = function(){
    let newDiv;
    if(this.selector[0] === '.') {
        newDiv = document.createElement('div');
        newDiv.classList.add(this.selector.substr(1));
    } else if(this.selector[0] === '#') {
        newDiv = document.createElement('p');
    }

    newDiv.textContent = 'Some text';
    newDiv.style.cssText=`height:${this.height};width:${this.width};background:${this.bg};font-size:${this.fontSize}`;
    document.body.appendChild(newDiv);
}

let domElement1 = new DomElement('.block', '100px', '100px', 'red', '20px');
domElement1.createElement();
let domElement2 = new DomElement('#block', '100px', '100px', 'red', '20px');
domElement2.createElement();