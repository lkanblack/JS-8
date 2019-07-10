'use strict';

let arr = ['432','202','808','43434','55232','871','276'];

arr.forEach(function(item) {
    if (item.startsWith('4') || item.startsWith('2')) {
      console.log(item);
    }
  });

nextPrime:
  for (var i = 2; i <= 100; i++) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime ;
    } 

    console.log( i );
  }