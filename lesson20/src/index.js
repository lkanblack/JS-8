'use strict';


import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import addDots from './modules/addDots';
import slider from './modules/slider';
import dataAttr from './modules/dataAttr';
import calcValidation from './modules/calcValidation';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import formValidation from './modules/formValidation';
import cyrControl from './modules/cyrControl';


// timer
countTimer('23 july 2019');

// меню 
toggleMenu(); 

// popup
togglePopup();

// tabs
tabs();
  
//add dots
addDots();

// slider
slider();

// data attributes
dataAttr();

// calculator number validation
calcValidation();

// calculator 
calc(100);

// send form  AJAX FETCH     
sendForm();

// form validation
formValidation();

// cyrillic validation
cyrControl();