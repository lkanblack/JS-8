'use strict';
let money,
    start = function(){
      do { 
        money = +prompt('Ваш Месячный доход?');
      } 
      while (isNaN(money) || money == '' || money == null)
      return money;
    };

start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 15000,
  period: 12,
  asking: function(){
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую').split(',');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        
  },
  budget : money,
  budgetDay : 0,
  budgetMonth : 0,
  expensesMonth : 0

};

let monthly,
    monthly2;


appData.getExpensesMonth = function(){
  let sum = 0;

  for(let i = 0; i < 2; i++){
    if(i === 0){
      monthly = prompt('Какие обязательные ежемесячные расходы у вас есть?').split(',');
    } else if(i === 1){
      monthly2 = prompt('Какие обязательные ежемесячные расходы у вас есть?').split(',');
    }
    do {
      sum = +prompt('Во сколько это обойдется?');
    }
    while (isNaN(sum) || sum == '' || sum == null);
  }
  return sum;
};

 

let expensesAmount = appData.getExpensesMonth();

appData.getAccumulatedMonth = function(){
  return parseFloat(money - expensesAmount);
};

let budgetDay = Math.floor(appData.getAccumulatedMonth() / 30);

appData.getTargetMonth = function(){
  let cash = parseFloat(Math.floor(appData.mission / appData.getAccumulatedMonth()));
  if(cash > 0) {
    console.log('Цель будет достигнута через ' + cash + ' месяцев')
  } else {
    console.log('Цель не будет достигнута')
  }
}


appData.getStatusIncome = function(){
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
console.log(appData.getStatusIncome());
console.log('Все расходы вместе: ' + expensesAmount);
console.log('Накопления за месяц: ' + appData.getAccumulatedMonth());
appData.getTargetMonth();
console.log(appData);