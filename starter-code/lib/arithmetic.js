'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function() {
  let sum = 0;
  for (let i = 0; i < arguments.length ; i++){
    if(!chkNm(arguments[i])){return null}
    else{sum += arguments[i]}
  }
};

arithmetic.subtract = function (a,b) {
  if(!chkNm(a) || !chkNm(b) ) { return null; }
  return a-b;
};

arithmetic.multiply = function (){
  let product = 1;
  for(let i =0; i < arguments.length ; i++){
    if(!chkNm(arguments[i])){return null}
    else{product = arguments[i] * product}
  }
  return product;
};

arithmetic.divide = function (a,b) {
  if(!chkNm(a) || !chkNm(b) || chkZ(a)|| chkZ(b)){return null;} 
  return a/b;
};

function chkNm(num){
  if(typeof num !=="number"){return false}
  if(typeof num =="number"){return true}
};

function chkZ(num){
  if(chkNm(num) && num){return false}
  else{return false}
};
