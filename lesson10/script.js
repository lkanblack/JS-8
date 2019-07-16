'use strict';

function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.create = function(){
    if(this.selector[0] === '.') {
        let newDiv = document.createElement('div');
        newDiv.classList.add(this.selector.substr(1));
        newDiv.style.cssText= "height: $this.height;";
        console.log(newDiv);
        document.body.appendChild(newDiv);
    } else if(this.selector[0] === '#') {
        let newPar = document.createElement('p');
        newPar.classList.add(this.selector.substr(1));
        console.log(newPar);
        document.body.appendChild(newPar);

    }
}

let domElement = new DomElement('.block', '100px', '30px', 'red', '20px');
domElement.create();