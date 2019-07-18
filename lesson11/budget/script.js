
let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    income = document.querySelector('.income'),
    firstPlus = document.getElementsByTagName('button')[0],
    secondPlus = document.getElementsByTagName('button')[1],
    checkbox = document.querySelector('#deposit-check'),
    fields = document.querySelectorAll('.additional_income-item'),
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salary_amount = document.querySelector('.salary-amount'),
    income_title = document.querySelector('.income-title'),
    expenses_title = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additional_expensesItem = document.querySelector('.additional_expenses-item'),
    deposit_amount = document.querySelector('.deposit-amount'),
    deposit_percent = document.querySelector('.deposit-percent'),
    target_amount = document.querySelector('.target-amount'),
    incomeItems = document.querySelectorAll('.income-items'),
    period_amount = document.querySelectorAll('.period-amount')[0],
    data = document.querySelector('.data'),
    result = document.querySelector('.result'),
    income_amount = document.querySelector('.income-amount'),
    period_select = document.querySelector('.period-select'),
    depositBank = document.querySelector('.deposit-bank');

// проект 
start.disabled = true;

const AppData = function(){
  this.income = {};
  this.incomeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
};

AppData.prototype.start = function(){

  this.budget = +salary_amount.value;
  this.getExpenses();
  this.getIncome();
  this.getExpensesMonth();
  this.getAddExpenses();
  this.getAddIncome();
  this.getInfoDeposit();
  this.getBudget();
  
  this.showResult();
};
/*
AppData.prototype.showResult = function(){
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = this.budgetDay;
  expensesMonthValue.value = this.expensesMonth;
  additionalExpensesValue.value = this.addExpenses.join(', ');
  additionalIncomeValue.value = this.addIncome.join(', ');
  targetMonthValue.value = this.getTargetMonth();
  incomePeriodValue.value = this.calcSavedMoney();
  period_select.addEventListener("change", function(){
   let sum = appData.calcSavedMoney();
   let field = incomePeriodValue;
   field.value = sum;
  });

};
*/
AppData.prototype.showResult = () => {
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = this.budgetDay;
  expensesMonthValue.value = this.expensesMonth;
  additionalExpensesValue.value = this.addExpenses.join(', ');
  additionalIncomeValue.value = this.addIncome.join(', ');
  targetMonthValue.value = this.getTargetMonth();
  incomePeriodValue.value = this.calcSavedMoney();
  period_select.addEventListener("change", function(){
   let sum = appData.calcSavedMoney();
   let field = incomePeriodValue;
   field.value = sum;
  });

};
AppData.prototype.addIncomeBlock = function(){
  console.log(incomeItems.parentNode);
  let cloneIncomeItem = incomeItems[0].cloneNode(true);
  incomeItems[0].parentNode.insertBefore(cloneIncomeItem, firstPlus);
  incomeItems = document.querySelectorAll('.income-items');
  if(incomeItems.length === 3){
    firstPlus.style.display = 'none';
  }
};

AppData.prototype.addExpensesBlock = function(){
  let cloneExpensesItem = expensesItems[0].cloneNode(true);
  expensesItems[0].parentNode.insertBefore(cloneExpensesItem, secondPlus);
  expensesItems = document.querySelectorAll('.expenses-items');
  if(expensesItems.length === 3){
    secondPlus.style.display = 'none';
  }
};
AppData.prototype.getExpenses = function(){
  expensesItems.forEach(function(item){
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if(itemExpenses !== '' && cashExpenses !== ''){
        appData.expenses[itemExpenses] = cashExpenses;
      }
  });
};
AppData.prototype.getIncome = function(){
  incomeItems.forEach(function(item){
    let incomeTitle = item.querySelector('.income-title').value;
    let incomeAmount = item.querySelector('.income-amount').value;
    if( incomeTitle !== '' && incomeAmount !== ''){
      appData.income[incomeTitle] = incomeAmount;
    }
  });
  for(let key in this.income){
    this.incomeMonth += +this.income[key];
  }
};
AppData.prototype.getInfoDeposit = function(){
  if(this.deposit){
      this.percentDeposit = deposit_percent.value;
      this.moneyDeposit = deposit_amount.value;
  }
};
AppData.prototype.getExpensesMonth = function(){
  var sum = 0;
  for(let key in appData.expenses){
    if(appData.expenses.hasOwnProperty(key)) {
      sum += parseFloat(appData.expenses[key]);
    }
  }
  appData.expensesMonth = sum;
};
AppData.prototype.getBudget = function(){
  this.budgetMonth = parseFloat(this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit)/12);
  this.budgetDay = parseFloat(Math.floor(this.budgetMonth / 30));
};
AppData.prototype.getAddExpenses = function(){
  let addExpenses = additional_expensesItem.value.split(',');
  addExpenses.forEach(function(item){
    item = item.trim();
    if(item !== ''){
      appData.addExpenses.push(item);
    }
  })
};
AppData.prototype.getAddIncome = function(){
  fields.forEach(function(item){
    let itemValue = item.value.trim();
    if(item.value !== ''){
      appData.addIncome.push(itemValue);
    }
  });
};
AppData.prototype.periodSelect = function(){
  let input = period_select;
  let numb =  period_amount;
  input.addEventListener("change", function(){
    let inputResult = input.value;
    numb.innerHTML = inputResult;
  });
};
AppData.prototype.blockCancel = function(){
  let button1 = start;
  let button2 = cancel;
  let left = data.querySelectorAll('input');
  let periodSelect = document.querySelector('.period-select');
  button1.addEventListener("click", function(){
      button1.style.display = "none" ;
      button2.style.display = "block";
      left.forEach(function(element){
        element.disabled = true;
        periodSelect.disabled = false;
      })
    });
};
AppData.prototype.amountCheck = function(){
  let input = salary_amount;
  input.addEventListener('input', function(){ 
    if(input.value !== ''){
      start.disabled = false;
    } else {
      start.disabled = true;
    }
  })
};
AppData.prototype.reset = function(){
  let reject = cancel;
  let calc = start;
  let left = data.querySelectorAll('input');
  let content = result.querySelectorAll('input');
  reject.addEventListener('click', function(){
    reject.style.display = 'none';
    calc.style.display = 'block';
    left.forEach(function(element){
      element.disabled = false;
      element.value = '';
    });
    content.forEach(function(element){
      element.value = '';
    })
  });
};
AppData.prototype.calcSavedMoney = function(){
  return this.budgetMonth * period_select.value;
};
AppData.prototype.capital_letter = function(str){
  str = this.addExpenses.split(" ");
  
  for (var i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
  
  return str.join(" ");
};
AppData.prototype.upperLetter = function() {
  let arr = this.addExpenses.split(' ');
  let arr1 = [];
  for(var x = 0; x < arr.length; x++){
    arr1.push(arr[x].charAt(0).toUpperCase()+arr[x].slice(1));
  }
  console.log(arr1.join(', '));
};
AppData.prototype.getTargetMonth = function(){
  return Math.floor(target_amount.value / appData.budgetMonth);
};
AppData.prototype.getStatusIncome = function(){
  switch (true) {
    case (this.budgetDay >= 800) :
      return( 'Высокий уровень дохода' );
      break;
    case ( this.budgetDay >= 300 && this.budgetDay <= 800):
      return( 'Средний уровень дохода' );
      break;
    case (this.budgetDay > 0 && this.budgetDay <= 300):
      return( 'Низкий уровень дохода' );
      break;
    case (this.budgetDay <= -0):
      return( 'Что то пошло не так' );
      break;
  }
};    

let appData = new AppData();

console.log(appData);

checkbox.addEventListener('change', function(){
  if(checkbox.checked === true){
    depositBank.style.display = 'inline-block';
    deposit_amount.style.display = 'inline-block';
    appData.deposit = 'true';
    depositBank.addEventListener('change', function(){
      let selecIndex = this.options[this.selectedIndex].value;
      if(selecIndex === 'other'){
        deposit_percent.style.display = 'inline-block';
        deposit_percent.value = '';
      } else {
        deposit_percent.style.display = 'none';
        deposit_percent.value = selecIndex;
      }
    })
  } else {
    depositBank.style.display = 'none';
    deposit_amount.style.display = 'none';
    deposit_amount.value = '';
    appData.deposit = 'false';
  }
})


appData.amountCheck();
appData.reset();
appData.periodSelect();
start.addEventListener('click', appData.start.bind(appData));
firstPlus.addEventListener('click', appData.addIncomeBlock);
secondPlus.addEventListener('click', appData.addExpensesBlock);
appData.blockCancel();

