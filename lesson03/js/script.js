'use strict';


let money= prompt('Ваш Месячный доход?'),
    income = 'Hello, Teacher!',
    addExpenses= prompt('Перечислите возможные расходы за рассчитываемый период через запятую').split(','),
    deposit= confirm('Есть ли у вас депозит в банке?'),
    mission= 10500,
    period='';

console.log('Доход: ' + money, '\nРасходы: ' + addExpenses, '\nДепозит в банке: ' + deposit,);
console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

let monthly = prompt('Какие обязательные ежемесячные расходы у вас есть?').split(','),
    monthly2 = prompt('Какие обязательные ежемесячные расходы у вас есть?').split(','),
    sum = prompt('Во сколько это обойдется?'),
    sum2 = prompt('Во сколько это обойдется?');

let budgetMonth = parseFloat(money - sum - sum2);
console.log('Месячный бюджет ' + budgetMonth);

let missionCalc = Math.ceil(mission / budgetMonth);
console.log('Сумма соберется за ' + missionCalc + ' месяцев');


let budgetDay = budgetMonth / 30;
console.log(Math.floor(budgetDay));


switch (true) {
  case (budgetDay >= 800) :
    console.log( 'Высокий уровень дохода' );
    break;
  case ( budgetDay >= 300 && budgetDay <= 800):
    console.log( 'Средний уровень дохода' );
    break;
  case (budgetDay > 0 && budgetDay <= 300):
    console.log( 'Низкий уровень дохода' );
    break;
  case (budgetDay <= -0):
    console.log( 'Что то пошло не так' );
    break;
}