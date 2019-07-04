'use strict';

function meaning(mean){
    if(typeof mean != 'string'){
        alert('Not a string!');
    } else {
        console.log(mean.trim().substring(0, 30)+ '...');
    }
}
  meaning('      Need to clean all spaces Needto clean all spacesNeed to clean all spaces');