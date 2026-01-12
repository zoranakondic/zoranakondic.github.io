/* DINAMICKI ISPIS MENIJA */

const usluge = [
    { naziv: "Nega lica", ikona: "fa-solid fa-spa" },
    { naziv: "Manikir & Pedikir", ikona: "fa-solid fa-hand-sparkles" },
    { naziv: "Šminkanje", ikona: "fa-solid fa-paintbrush" },
    { naziv: "Relaks tretmani", ikona: "fa-solid fa-leaf" }
];

const servicesDiv = document.getElementById("services");

usluge.forEach(usluga => {
    const div = document.createElement("div");
    div.className = "service";

    div.innerHTML = `
    <i class="${usluga.ikona}"></i>
    <h3>${usluga.naziv}</h3>
  `;

    div.addEventListener("click", function () {
        document.getElementById("usluga-opis").innerHTML = `<strong>${usluga.naziv}</strong>: ${usluga.opis}`;
    });

    servicesDiv.appendChild(div);
});


// Niz slika koje se smenjuju
const slike = [
    "images/demo/slika1.jpg",
    "images/demo/slika2.jpg",
    "images/demo/slika3.jpg"
];

// Trenutni indeks slike
let index = 0;

// Element headera
const header = document.querySelector("header");

// Prva slika
header.style.backgroundImage = `url(${slike[index]})`;

// Smena svakih 4 sekunde
setInterval(() => {
    index = (index + 1) % slike.length;
    header.style.backgroundImage = `url(${slike[index]})`;
}, 4000);

const textElement = document.querySelector(".intro-heading");
const text = textElement.textContent;
textElement.textContent = ""; // da očisti tekst

let indexText = 0;

function type() {
    if (indexText < text.length) {
        textElement.textContent += text.charAt(indexText);
        indexText++;
        setTimeout(type, 100); // brzina kucanja (manje = brže)
    }
}

type();

if (indexText === text.length) {
    setTimeout(() => {
        textElement.textContent = "";
        indexText = 0;
        type();
    }, 2000);
}

