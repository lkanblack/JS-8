let money = 4530,
    income = 'freelance',
    addExpenses  = 'Study, Home, Car',
    deposit = true,
    mission = 89000,
    period = 10,
    budgetDay = money / 30;  

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

console.log("Длина строки: " + income.length);

console.log("Период"+ ' ' + period + ' ' + "месяцев" + ' ' + "\nЦель заработать" + ' ' + mission + ' ' + "EUR");

console.log(addExpenses.toLocaleLowerCase().split(','));

console.log("Результат: " + budgetDay,"\nОстаток от деления: " + money % 30);