'use strict';

let money,
    start = function(){
        do { 
          money = +prompt('Ваш Месячный доход?', 1500);
        } 
        while (isNaN(money) || money == '' || money == null)
        return money;
      };

start();

let appData = {
  income:{},
  addIncome:[],
  expenses:{},
  addExpenses:[],
  deposit:false,
  percentDeposit:0,
  moneyDeposit:0,
  mission: 12000,
  period: 6,
  budget:0,
  budgetDay:0,
  budgetMonth:0,
  expensesMonth:0,
  asking: function(){

        if(confirm('Иммется ли у Вас доп.заработок?')){
          let itemIncome = prompt('Какой у вас есть доп.заработок', 'Freelance');
          let cashIncome = prompt('Сумма доп.заработка', 1000);
          appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', "course, PARTY, night");
            appData.addExpenses = addExpenses.toLowerCase().split(',');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
            appData.budget = money;

            for(let i = 0; i < 2; i++){
              let monthly = prompt('Какие обязательные ежемесячные расходы у вас есть?', "home" );
              let sum;
              do {
                sum = +prompt('Во сколько это обойдется?', 200);
              }
              while (isNaN(sum) || sum == '' || sum == null);
              appData.expenses[monthly] = sum;
              }
            },
            getExpensesMonth: function(){
                    var sum = 0;
                    for(let key in appData.expenses){
                      if(appData.expenses.hasOwnProperty(key)) {
                        sum += parseFloat(appData.expenses[key]);
                      }
                    }
                    appData.expensesMonth = sum;
            },
            getBudget: function(){
              appData.budgetMonth = parseFloat(appData.budget - appData.expensesMonth);
              appData.budgetDay = parseFloat(Math.floor(appData.budgetMonth / 30));
            },
            getInfoDeposit: function(){
              if(appData.deposit){
                appData.percentDeposit = prompt('Какой у Вас годовой процент?', '2,2');
                appData.moneyDeposit = prompt('Какая сумма взята в кредит?', 7000);
              }
            },
            calcSavedMoney: function(){
              return appData.budgetMonth * appData.period;
            }
};

appData.getTargetMonth = function (){
  let cash = parseFloat(Math.floor(appData.mission / appData.budgetMonth));
  if(cash > 0) {
    console.log('Цель будет достигнута через ' + cash + ' месяцев')
  } else {
    console.log('Цель не будет достигнута')
  }
}


appData.getStatusIncome = function (){
  switch (true) {
    case (appData.budgetDay >= 800) :
      return( 'Высокий уровень дохода' );
      break;
    case ( appData.budgetDay >= 300 && appData.budgetDay <= 800):
      return( 'Средний уровень дохода' );
      break;
    case (appData.budgetDay > 0 && appData.budgetDay <= 300):
      return( 'Низкий уровень дохода' );
      break;
    case (appData.budgetDay <= -0):
      return( 'Что то пошло не так' );
      break;
  }
}

for(let key in appData) {
  console.log("Наша программа включает в себя данные: " + key);
}

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
console.log(appData);
console.log('Накопления за месяц: ' , appData.budgetMonth);
console.log('Все расходы вместе: ' , appData.expensesMonth);
console.log(appData.getStatusIncome());
appData.getTargetMonth();