'use strict';


let money,
    income = 'Money Calculcator',
    addExpenses= prompt('Перечислите возможные расходы за рассчитываемый период через запятую').split(','),
    deposit= confirm('Есть ли у вас депозит в банке?'),
    mission= 7500,
    period='';

  let start = function(){
    money = +prompt('Ваш Месячный доход?');
    console.log(money);

    while (isNaN(money) || money == '' || money == null){
      money = +prompt('Ваш Месячный доход?');
      console.log(money);
      
    }
    return money;
  };

  start();


let showTypeof = function(item){
  console.log(item, typeof item);
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);

let monthly,
    monthly2;


let getExpensesMonth = function(){
  let sum = 0;

  for(let i = 0; i < 2; i++){
    if(i === 0){
      monthly = prompt('Какие обязательные ежемесячные расходы у вас есть?').split(',');
    } else if(i === 1){
      monthly2 = prompt('Какие обязательные ежемесячные расходы у вас есть?').split(',');
    }

    sum += +prompt('Во сколько это обойдется?');
  }

  return sum;
};

let expensesAmount = getExpensesMonth();

let accumulatedMonth = function getAccumulatedMonth(){
  return parseFloat(money - expensesAmount);
};

let budgetDay = Math.floor(accumulatedMonth() / 30);

function getTargetMonth(){
  return parseFloat(Math.floor(mission / accumulatedMonth()));
}

function getStatusIncome(){
  switch (true) {
    case (budgetDay >= 800) :
      return( 'Высокий уровень дохода' );
      break;
    case ( budgetDay >= 300 && budgetDay <= 800):
      return( 'Средний уровень дохода' );
      break;
    case (budgetDay > 0 && budgetDay <= 300):
      return( 'Низкий уровень дохода' );
      break;
    case (budgetDay <= -0):
      return( 'Что то пошло не так' );
      break;
  }
}
console.log(getStatusIncome());
console.log('Все расходы вместе: ' + expensesAmount);
console.log('Накопления за месяц: ' + accumulatedMonth());
console.log('Цель будет достигнута через ' + getTargetMonth() + ' месяцев');
