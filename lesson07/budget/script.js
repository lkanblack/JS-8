'use strict';

let start = document.getElementById('start');
let firstPlus = document.getElementsByTagName('button')[0];
let secondPlus = document.getElementsByTagName('button')[1];
let checkbox = document.querySelector('#deposit-check');
let fields = document.querySelectorAll('.additional_income-item');
let value1 = document.getElementsByClassName('budget_month-value'),
    value2 = document.getElementsByClassName('budget_day-value'),
    value3 = document.getElementsByClassName('expenses_month-value'),
    value4 = document.getElementsByClassName('additional_income-value'),
    value5 = document.getElementsByClassName('additional_expenses-value'),
    value6 = document.getElementsByClassName('income_period-value'),
    value7 = document.getElementsByClassName('target_month-value');

// Оставшииеся поля.

let input1 = document.querySelector('.salary-amount'),
    input2 = document.querySelector('.income-title'),
    input3 = document.querySelector('.income-amount'),
    input4 = document.querySelector('.expenses-title'),
    input5 = document.querySelector('.expenses-amount'),
    input6 = document.querySelector('.additional_expenses-item'),
    input7 = document.querySelector('.deposit-amount'),
    input8 = document.querySelector('.deposit-percent'),
    input9 = document.querySelector('.target-amount'),
    input10 = document.querySelector('.period-select');

