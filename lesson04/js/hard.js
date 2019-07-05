'use strict';

function meaning(mean){
    if(typeof mean != 'string'){
        alert('Not a string!');
    } else if (mean.length > 30 ){
        console.log(mean.trim().substring(0, 30)+ '...');
    } else {
        console.log(mean.trim());
    }
}
  meaning('      Some textSome textSome textSome textSome textSome textSome text');