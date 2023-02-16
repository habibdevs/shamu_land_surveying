let item = document.querySelector(".item");
let itemm = document.querySelector(".itemm");
let itemmm = document.querySelector(".itemmm");

let text = item.innerHTML;
let textt = itemm.innerHTML;
let texttt = itemmm.innerHTML;

console.log(text);

let textArr = text.split("");
let textArrr = textt.split("");
let textArrrr = texttt.split("");

let counter = -1;
let counterr = -1;
let counterrr = -1;

item.innerHTML = "";
itemm.innerHTML = "";
itemmm.innerHTML = "";

function typejs() {
  if (counter < text.length) {
    counter++;
    item.innerHTML += text.charAt(counter);

    console.log(item.innerHTML);

    textArr = text.split("");
  } else {
    textArr.pop("");
    console.log(textArr.pop(""));
    item.innerHTML = textArr.join("");
    if (textArr.length == 0) {
      counter = -1;
    }
  }
}
function typejss() {
  if (counterr < textt.length) {
    counterr++;
    itemm.innerHTML += textt.charAt(counterr);

    console.log(itemm.innerHTML);

    textArrr = textt.split("");
  } else {
    textArrr.pop("");
    console.log(textArrr.pop(""));
    itemm.innerHTML = textArrr.join("");
    if (textArrr.length == 0) {
      counterr = -1;
    }
  }
}
function typejsss() {
  if (counterrr < texttt.length) {
    counterrr++;
    itemmm.innerHTML += texttt.charAt(counterrr);

    console.log(itemmm.innerHTML);

    textArrrr = texttt.split("");
  } else {
    textArrrr.pop("");
    console.log(textArrrr.pop(""));
    itemmm.innerHTML = textArrrr.join("");
    if (textArrrr.length == 0) {
      counterrr = -1;
    }
  }
}

let stop = setInterval(function () {
  typejs();
}, item.dataset.speed);


let stopp = setInterval(function () {
  typejss();
}, itemm.dataset.speed);


let stoppp = setInterval(function () {
  typejsss();
}, itemmm.dataset.speed);




