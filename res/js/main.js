const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const autoclicker = document.getElementById("autoclicker");
const clickupgrade = document.getElementById("clickupgrade");                //tady vše se propojuje s html idečkama

let number = 0;             //nazev čísel těch cookiesek které jsme naklikali

let autoclickerPrice = 100;           //cena vylepšení
let autoclickerIncrease = 0;          //hodnota která je klikaná za interval

let clickupgradePrice = 50;          //cena vylepšení
let clickupgradeIncrease = 1;        //hodnota kterou klikneme

//    () => - arrow function
cookie.onclick = () => {
  number += clickupgradeIncrease; // nebo to muze byt napsane "number++ nebo number += 1, ale když nemame upgrader"
  counter.innerHTML = number;           // tímto příkazem je to vidět pro uživatele
};

clickupgrade.onclick = () => {                  //funkce pro clickupgrader
    if (number >= clickupgradePrice) {
        number -= clickupgradePrice;               //odečet peněz z upgraderu
        counter.innerHTML = number;            //pro uživatele vizuálne vidět zde
        clickupgradePrice *= 3;                  //jeho cena se násobí 3x
        clickupgrade.innerHTML = `Buy click upgrade: ${clickupgradePrice}`         //pro uživatele vizuálne vidět zde
        clickupgradeIncrease *= 2;       //kliker se násobí 2x
    }
}

autoclicker.onclick = () => {
  if (number >= autoclickerPrice) {
    number -= autoclickerPrice;
    counter.innerHTML = number;
    autoclickerPrice *= 2;
    autoclicker.innerHTML = `Buy autoclicker: ${autoclickerPrice}`;
    if (autoclickerIncrease == 0) {
      setInterval(() => {
        number += autoclickerIncrease;
        counter.innerHTML = number;
      }, 1000);  // to je za jak dlouho udělá click
    }
    autoclickerIncrease++;
  }
};

