// 0.1251|98|0|15|0|100|0|500|0|2000|0|7000|0|50000|0|1000000|0|123456789

var cookieCount = 0;
var grandmaCount = 0;
var grandmaCost = 5;
var factoryCount = 0;
var factoryCost = 25;
var totalCookieCount = 0;

var spanCookieCount = document.getElementById("cookie-count");
var spanGrandmaCount = document.getElementById("grandma-count");
var spanFactoryCount = document.getElementById("factory-count");
var spanTotalCookieCount = document.getElementById("total-cookie-count");
var buttonBakeCookie = document.getElementById("bake-cookie");
var buttonEnlistGrandma = document.getElementById("enlist-grandma");
var buttonBuyFactory = document.getElementById("buy-factory");
var divMessage = document.getElementById("message");

var funcUpdateHTML = function(){
  if (cookieCount > 5){
    divMessage.innerHTML = "Someones gettin' fat tonight!"
  }
  if (cookieCount > 10){
    divMessage.innerHTML = "You are what ya eat Cookie Face!!"
  }
  if (cookieCount > 15){
    divMessage.innerHTML = "You sure you want more?!?!"
  }
  if (cookieCount > 20){
    divMessage.innerHTML = "SIR FATTY MCFATFAT"
  }
  spanCookieCount.innerHTML = cookieCount;
  spanGrandmaCount.innerHTML = grandmaCount;
  spanFactoryCount.innerHTML = factoryCount;
  spanTotalCookieCount.innerHTML = totalCookieCount;
}
var funcBakeCookie = function(){
  cookieCount = cookieCount + 1;
  funcUpdateHTML();
}
var funcEnlistGrandma = function(){
  if ( cookieCount >= grandmaCost ) {
    cookieCount = cookieCount - grandmaCost;
    grandmaCount = grandmaCount + 1;
    grandmaCost = grandmaCost +5;
    funcUpdateHTML();
  }
}

var funcBuyFactory = function(){
  if ( cookieCount >= factoryCost ) {
    cookieCount = cookieCount - factoryCost;
    factoryCount = factoryCount + 1;
    factoryCost = factoryCost +10;
    funcUpdateHTML();
    }
}

var funcLoop = function(){
  cookieCount = cookieCount + grandmaCount + (factoryCount*5);
  totalCookieCount = totalCookieCount + grandmaCount + (factoryCount*5)
  funcUpdateHTML();
}

buttonBakeCookie.addEventListener('click', funcBakeCookie);
buttonEnlistGrandma.addEventListener('click', funcEnlistGrandma);
buttonBuyFactory.addEventListener('click', funcBuyFactory);
setInterval(funcLoop, 1000);
