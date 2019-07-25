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
    
        let box = document.querySelector('.hard');
        let boxMoveX = 0;
        let boxMoveY = 0;

    function moveBox(e) { 
        if (e.keyCode == key_right) { 
            boxMoveX += 10; 
            box.style.left = boxMoveX + "px"; 
        } 
        else if (e.keyCode == key_left) {
            boxMoveX -= 10; 
            box.style.left = boxMoveX + "px"; 
        }
        else if (e.keyCode == key_down) {
            boxMoveY += 10; 
            box.style.top = boxMoveY + "px"; 
        }
        else if (e.keyCode == key_up) {
            boxMoveY -= 10; 
            box.style.top = boxMoveY + "px"; 
        }
    } 
        document.onkeydown = moveBox;

});


