

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
    income_amount = document.querySelector('.income-amount'),
    period_select = document.querySelector('.period-select');

// проект 
let appData = {
  income:{},
  incomeMonth: 0,
  addIncome:[],
  expenses:{},
  addExpenses:[],
  deposit:false,
  percentDeposit:0,
  moneyDeposit:0,
  budget:0,
  budgetDay:0,
  budgetMonth:0,
  expensesMonth:0,
  start : function(){

      appData.budget = +salary_amount.value;
      appData.getExpenses();
      appData.getIncome();
      appData.getExpensesMonth();
      appData.getAddExpenses();
      appData.getAddIncome();
      appData.getBudget();
      
      appData.showResult();
    },
  
  showResult: function(){
      budgetMonthValue.value = appData.budgetMonth;
      budgetDayValue.value = appData.budgetDay;
      expensesMonthValue.value = appData.expensesMonth;
      additionalExpensesValue.value = appData.addExpenses.join(', ');
      additionalIncomeValue.value = appData.addIncome.join(', ');
      targetMonthValue.value = appData.getTargetMonth();
      incomePeriodValue.value = appData.calcSavedMoney();
      period_select.addEventListener("change", function(){
       let sum = appData.calcSavedMoney();
       let field = incomePeriodValue;
       field.value = sum;
      });

  },
  addIncomeBlock: function(){
    console.log(incomeItems.parentNode);
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, firstPlus);
    incomeItems = document.querySelectorAll('.income-items');
    if(incomeItems.length === 3){
      firstPlus.style.display = 'none';
    }
  },
  addExpensesBlock: function(){
      let cloneExpensesItem = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, secondPlus);
      expensesItems = document.querySelectorAll('.expenses-items');
      if(expensesItems.length === 3){
        secondPlus.style.display = 'none';
      }
  },
  getExpenses: function(){
      expensesItems.forEach(function(item){
          let itemExpenses = item.querySelector('.expenses-title').value;
          let cashExpenses = item.querySelector('.expenses-amount').value;
          if(itemExpenses !== '' && cashExpenses !== ''){
            appData.expenses[itemExpenses] = cashExpenses;
          }
      });
  },
  getIncome: function(){
    incomeItems.forEach(function(item){
      let incomeTitle = item.querySelector('.income-title').value;
      let incomeAmount = item.querySelector('.income-amount').value;
      if( incomeTitle !== '' && incomeAmount !== ''){
        appData.income[incomeTitle] = incomeAmount;
      }
    });
    for(let key in appData.income){
      appData.incomeMonth += +appData.income[key];
    }
  },
  getAddExpenses: function(){
    let addExpenses = additional_expensesItem.value.split(',');
    addExpenses.forEach(function(item){
      item = item.trim();
      if(item !== ''){
        appData.addExpenses.push(item);
      }
    })
  },
  getAddIncome: function(){
    fields.forEach(function(item){
      let itemValue = item.value.trim();
      if(item.value !== ''){
        appData.addIncome.push(itemValue);
      }
    });
  },
  periodSelect: function(){
    let input = period_select;
    let numb =  period_amount;
    input.addEventListener("change", function(){
      inputResult = this.value;
      numb.innerHTML = inputResult ;
    });
  },
  blockCancel: function(){
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
  },
  amountCheck : function(){
    start.disabled = true;
    let input = salary_amount;
    input.addEventListener("change", function(){ 
      if(input === 0){
        console.log('button blocked')
      } else {
        console.log('disabled')
        start.disabled = false;
      }
    })
  },
  asking: function(){

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период', "course party night");
            appData.addExpenses = addExpenses;
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
            appData.budget = money;
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
              appData.budgetMonth = parseFloat(appData.budget + appData.incomeMonth - appData.expensesMonth);
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
              return appData.budgetMonth * period_select.value;
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
  return Math.floor(target_amount.value / appData.budgetMonth);
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


appData.amountCheck();
appData.periodSelect();
start.addEventListener('click', appData.start);
firstPlus.addEventListener('click', appData.addIncomeBlock);
secondPlus.addEventListener('click', appData.addExpensesBlock);
appData.blockCancel();
