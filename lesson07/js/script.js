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
            let itemIncome ='';
            while(itemIncome == '' || itemIncome == parseFloat(itemIncome)){
              itemIncome = prompt('Какой у вас есть доп.заработок', 'Freelance');
            }
            let cashIncome = 0;
             while(isNaN(cashIncome) || cashIncome == '' || cashIncome == null){
              cashIncome = prompt('Сумма доп.заработка', 1000)
             }
            appData.income[itemIncome] = cashIncome;
          }
      

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период', "course party night");
            appData.addExpenses = addExpenses;
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
            appData.budget = money;

            for(let i = 0; i < 2; i++){
              let monthly;
              do {
                monthly = prompt('Какие обязательные ежемесячные расходы у вас есть?', "home" );
              }
              while(monthly == '' || monthly == parseFloat(monthly))
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
                appData.percentDeposit = 0;
                while(isNaN(appData.percentDeposit) || appData.percentDeposit == '' || appData.percentDeposit == null){
                  appData.percentDeposit = prompt('Какой у Вас годовой процент?', 3);
                }
               appData.moneyDeposit = 0;
               while(isNaN(appData.moneyDeposit) || appData.moneyDeposit == '' || appData.moneyDeposit == null){
                appData.moneyDeposit = prompt('Какая сумма взята в кредит?', 7500);
               }
              }
            },
            calcSavedMoney: function(){
              return appData.budgetMonth * appData.period;
            },
            capital_letter: function(str){
              str = appData.addExpenses.split(" ");

              for (var i = 0, x = str.length; i < x; i++) {
                  str[i] = str[i][0].toUpperCase() + str[i].substr(1);
              }
          
              return str.join(" ");
            },
            upperLetter: function() {
              let arr = appData.addExpenses.split(' ');
              let arr1 = [];
              for(var x = 0; x < arr.length; x++){
                arr1.push(arr[x].charAt(0).toUpperCase()+arr[x].slice(1));
            }
              console.log(arr1.join(', '));
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
appData.getInfoDeposit();
appData.upperLetter();
