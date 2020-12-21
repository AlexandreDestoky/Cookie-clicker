// DOM
const cookie = document.querySelector("#cookieClick");
const nbrSecCookie = document.querySelector(".secCookie");
const nbrCookie = document.querySelector(".nbrCookie");
const allBuy = document.querySelectorAll(".buy");


//Variables de travail
let cookieSec = 0;
let nbrCookieTotal = 0;

nbrCookie.innerHTML = `${nbrCookieTotal} cookies`;


//APP
//Quand on clique sur le cookies
cookie.addEventListener("click",()=> {
  nbrCookieTotal++;
  nbrCookie.innerHTML = `${nbrCookieTotal} cookies`;
})

