'use strict';

let key_left = 37,
key_right = 39,
key_up = 38,
key_down = 40;

document.addEventListener("DOMContentLoaded", function(event){
    
    function DomElement(selector, height, width, bg, fontSize, position){
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.position = position;
    }
    
    DomElement.prototype.createElement = function(){
        let newDiv;
        if(this.selector[0] === '.') {
            newDiv = document.createElement('div');
            newDiv.classList.add(this.selector.substr(1));
        } else if(this.selector[0] === '#') {
            newDiv = document.createElement('p');
        }
    
        newDiv.textContent = 'Hard Lesson';
        newDiv.style.cssText=`height:${this.height};width:${this.width};background:${this.bg};font-size:${this.fontSize};position:${this.position}`;
        document.body.appendChild(newDiv);
    }
    
    
    let domElement1 = new DomElement('.hard', '100px', '100px', 'lightGreen', '20px', 'absolute');
    domElement1.createElement();

    document.addEventListener('keydown', function(e){
        if(e.keyCode == key_left){

        }
        if(e.keyCode == key_right){

        }
        if(e.keyCode == key_up){

        }
        if(e.keyCode == key_down){

        }
    });

});