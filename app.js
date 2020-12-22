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
  setTimeout(()=> {
    cookie.style.width = "45vh";
  },100);
  cookie.style.width = "40vh";
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
  let vitesse = parseInt(buy.querySelector(".perSecond").innerHTML);
  niveau = Number(niveau);

  //Si assez de cookies pour acheter
  if(nbrCookieTotal > prixAchat) {
    //Achat en cookies
    nbrCookieTotal -= prixAchat;
    nbrCookie.innerHTML = `${nbrCookieTotal} cookies`;

    //Augmentation niveau
    niveau++;
    buy.querySelector(".niveau").innerHTML = niveau;

    //Augmentation prix Achat élément
    prixAchat = Math.ceil(prixAchat * 1.5);
    buy.querySelector(".cost").innerHTML = prixAchat + " cookies";

    //Augmentation par seconde cookies
    cookieSec += vitesse;
    nbrSecCookie.innerHTML ="par seconde : " + cookieSec; 

    //Augmentation vitesse Cookie/seconde
    // vitesse = Math.ceil(vitesse * 1.5);
    buy.querySelector(".perSecond").innerHTML = vitesse + "/sec";
  }
}

//Function augmentation automatique de cookies
let counter = () => {
  nbrCookieTotal += cookieSec/10;
  nbrCookieTotal = Math.round((nbrCookieTotal + Number.EPSILON) * 100) / 100
  nbrCookie.innerHTML = `${nbrCookieTotal} cookies`;
}

setInterval(counter,100);