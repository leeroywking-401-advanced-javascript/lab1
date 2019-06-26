'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function() {
  let sum = 0;
  for (let i = 0; i < arguments.length ; i++){
    if(!chkNm(arguments[i])){return null}
    else{sum += arguments[i]}
  }
  return sum;
};

arithmetic.subtract = function () {
let final = arguments[0];
if(chkNm(final)){
for(let i =1; i<arguments.length; i++){
  if(!chkNm(arguments[i])){return null}
  else{final -= arguments[i]}
}
}
else{final = null}
return final;
};

arithmetic.multiply = function (){
  if(arguments.length < 2){return null}
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
  if(num === 0){return true}
  else{return false}
};

