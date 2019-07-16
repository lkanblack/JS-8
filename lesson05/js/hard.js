'use strict';

let arr = ['432','202','808','43434','55232','871','276'];

arr.forEach(function(item) {
    if (item.startsWith('4') || item.startsWith('2')) {
      console.log(item);
    }
  });

  function numbers(n) {
    for (let i = 2; i * i <= n; i == 2 ? i++ : i += 2) if (n % i == 0) return false;
    return n > 1;
  }
  
  const res = [...Array(100)].reduce((a, _, i) => a.concat(numbers(i) ? `Делители числа ${i}: 1 и ${i}` : []) , []).join('\n');
  console.log(res);