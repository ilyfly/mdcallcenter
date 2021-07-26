// function multiplierParDeux(nombre)
// {
//     return nombre*2;
// }

// var fruits=['banane','raisin','pomme','annanas'];

// alert(fruits[0]);
// alert(document.getElementById('nom').value);

// document.getElementById('mon-bouton').onclick = alert('bonjour !');

// var element = document.getElementById('mon-bouton');
// element.onclick = function() {
//   element.style.backgroundColor = 'yellow';
// };

// document.getElementById('mon-bouton').onclick = function(event) {
//     alert(event.currentTarget);
//   };

//   $('body').css('background-color', 'orange');

//   $('mon-bouton').on('mouseover', function() { alert("Coucou!") }

// alert(typeof(fruits));
// alert(Math.random());
// prenom=prompt("Vote prénom");
// alert('Bonjour '+prenom+' :)');
// console.log( prenom );
// if (condition) {

// } else {

// }
// alert("Bonjour les amis !");
// console.log("Bonjour les amis !");
// var prenom = null;

// console.log(1 + 1);
// if(){

// }else{

// }
function faireQuelqueChose() {
  console.log("Salut");
}
faireQuelqueChose();
const faireUneTache = (tache) => {
  console.log("Je fais : " + tache);
};
faireUneTache("la course");
faireUneTache("le menage");
function calc(x, y) {
  return console.log(x + y);
}
calc(2, 2);
(function maFonction() {
  console.log("Je me joue toute seule");
})();
(() => {
  console.log("Je me joue aussi toute seule.");
})();
function add() {
  var a = 8;
  console.log(a);
  return a + 2;
}
add();
SELECTOR: document.querySelector("h4").style.background = "yellow";
//CLICK EVENT :
document.querySelector(".box").addEventListener("click", () => {
  // document.querySelector("h4").style.background = "yellow";
  document.querySelector(".box").classList.toggle("click");
});
document.getElementById("btn-1");
console.log(document.getElementById("btn-1"));

document.getElementById("btn-1").addEventListener("click", function () {
  document.querySelector("p").style.visibility = "visible";
  document.querySelector("p").style.color = "green";
});
document.getElementById("btn-2").addEventListener("click", function () {
  document.querySelector("p").style.visibility = "visible";
  document.querySelector("p").style.color = "red";
});

/* <div> > #id > .class > baliseHTML */

// Mouse Events :

window.addEventListener("mousemove", function (e) {
  document.querySelector(".mousseevent").style.left = e.pageX + "px";
  document.querySelector(".mousseevent").style.top = e.pageY + "px";
  console.log(e.pageX);
  console.log(e.pageY);
});

window.addEventListener("mousedown", function () {
  console.log("Souris en bas !");
});

document.addEventListener("keypress", function (e) {
  document.querySelector(".keypress").textContent = e.key;
  playSong();
});

function playSong() {
  var sons = new Audio();
  sons.src = "./Enter.mp3";
  sons.play();
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 120) {
    document.querySelector("nav").style.top = "0px";
  } else {
    document.querySelector("nav").style.top = "-50px";
  }
});
var nom;
document
  .querySelector('input[type="text"]')
  .addEventListener("input", function (e) {
    nom = e.target.value;
  });

document.querySelector("select").addEventListener("input", function (event) {
  console.log(event.target.value);
});
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  if (check.checked) {
    document.querySelector("form > div").innerHTML =
      '<h3 style="color: black;">Votre non est :</h3>' + nom;
  } else {
    alert("veuillez accepter les conditions générals");
  }
});

window.addEventListener("load", function () {
  console.log("Document chargé !");
});

console.log(document.getElementsByClassName("box"));

// ForEach :

document.querySelectorAll("box").forEach((element) => {
  element.addEventListener("click", function (e) {
    e.target.style.transform = "scale(0.7)";
  });
});

//addEventListner vs onclick :

document.body.onclick = function () {
  console.log("Arrêter de cliquez sur le Body! Grrrrr");
};

//Bubbling => se déclanche à la fin
document.body.addEventListener(
  "click",
  function () {
    console.log("click 1 !!!!");
  },
  false
);
//Usecapture => se déclanche au début
document.body.addEventListener(
  "click",
  function () {
    console.log("click 2 !!!!");
  },
  true
);

// Stop propagation

document.querySelector(".box").addEventListener("click", function (e) {
  alert("Stop propagation");
  e.stopPropagation();
});

// removeEventListner :

// BOM :

console.log("Height : " + window.innerHeight);
console.log("ScrollY : " + window.scrollY);
//window.open("http://google.com", "Cour js", "height=600,width=800");
//window.close();

//Evénement adossés à Window :
//alert("hello");
//confirm("Voulez-vous vraiment appuyer ?");
//prompt("Entrez votre nom");
//setTimeout(function () {document.querySelector(".box").style.color="red";},2000);
// setInterval(function () {
//   document.body.innerHTML +=
//     '<div style="background-color: #F2805B ;"class="box"><h2>Nouvel Boite!</h2></div>';
// }, 1000);
//clearInterval();

document.body.addEventListener("click", function (e) {
  e.target.remove();
});

// location :

console.log(location.href);
console.log(location.host);
console.log(location.pathname);
// console.log(location.search);
//location.replace("http://google.co.ma");

// Navigator :

console.log(navigator.userAgent);

// History
// console.log(window.history);
// window.history.back();

// SetProperty :
// window.addEventListener("mousemove", function (e) {
//   document.querySelector("nav").style.setProperty("--x", e.layerX + "px");
// });

// Type de donnée :
var string = "chaine"; //string
var number = 25; //number
var boolean = true; //boolean
var maVariable; //undefined
var maVariable = null; //object

console.log(typeof maVariable);

// Tableaux :

var array = ["Casablanca", "24", true, [1.2], { nom: "Denis" }];

//console.log(array[0][3].nom);

var object = {
  pseudo:"denis",
  age:33,
  technos:["javascript","React","NodeJs"]
};

console.log(object);
