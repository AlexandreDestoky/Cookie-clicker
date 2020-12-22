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

//Quand on clique sur un élément du magasin
for (const buy of allBuy) {
  buy.addEventListener("click",()=> {
    achat(buy);
  })
}

//Fonction Achat d'un élément du magasin
let achat = (buy) => {
  let prixAchat = parseInt(buy.querySelector(".cost").innerHTML);
  let niveau = buy.querySelector(".niveau").innerHTML;
  niveau = Number(niveau);

  //Si assez de cookies pour acheter
  if(nbrCookieTotal > prixAchat) {
    nbrCookieTotal -= prixAchat;
    nbrCookie.innerHTML = `${nbrCookieTotal} cookies`;

    //Augmentation niveau
    niveau++;
    buy.querySelector(".niveau").innerHTML = niveau;
  }
}
