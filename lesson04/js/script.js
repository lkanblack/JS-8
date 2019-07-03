'use strict';


let money= +prompt('Ваш Месячный доход?'),
    income = 'Money Calculcator',
    addExpenses= prompt('Перечислите возможные расходы за рассчитываемый период через запятую').split(','),
    deposit= confirm('Есть ли у вас депозит в банке?'),
    mission= 7500,
    period='';


let showTypeof = function(item){
  console.log(item, typeof item);
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);

let monthly = prompt('Какие обязательные ежемесячные расходы у вас есть?').split(','),
    monthly2 = prompt('Какие обязательные ежемесячные расходы у вас есть?').split(','),
    sum = +prompt('Во сколько это обойдется?'),
    sum2 = +prompt('Во сколько это обойдется?');


function getExpensesMonth(){
  return sum + sum2;
}

let accumulatedMonth = function getAccumulatedMonth(){
  return parseFloat(money - sum - sum2);
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
console.log('Все расходы вместе: ' + getExpensesMonth());
console.log('Накопления за месяц: ' + accumulatedMonth());
console.log('Цель будет достигнута через ' + getTargetMonth() + ' месяцев');

