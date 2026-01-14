// NIZ SLIKA KOJE SE SMENJUJU
const slike = [
    "images/demo/slika1.jpg",
    "images/demo/slika2.jpg",
    "images/demo/slika3.jpg"
];

let index = 0;

const header = document.querySelector("header");

header.style.backgroundImage = `url(${slike[index]})`;

setInterval(() => {
    index = (index + 1) % slike.length;
    header.style.backgroundImage = `url(${slike[index]})`;
}, 4000);

const textElement = document.querySelector(".intro-heading");
const text = textElement.textContent;
textElement.textContent = "";

let indexText = 0;

function type() {
    if (indexText < text.length) {
        textElement.textContent += text.charAt(indexText);
        indexText++;
        setTimeout(type, 100);
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




// DINAMICKI ISPIS MENIJA 

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




// DINAMICKO ANIMIRANJE BROJEVA (COUNTER) PRILIKOM SKROLOVANJA DO SEKCIJE
const counters = document.querySelectorAll(".counter-item h2");

function animateCounter(counter) {
    const target = +counter.getAttribute("data-count");
    let value = 0;
    const speed = target / 100;

    const update = () => {
        value += Math.ceil(speed);
        counter.textContent = value;
        if (value < target) {
            requestAnimationFrame(update);
        } else {
            counter.textContent = target;
        }
    };

    update();
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains("done")) {
            animateCounter(entry.target.querySelector("h2"));
            entry.target.classList.add("done");
        }
    });
}, { threshold: 0.5 });

counters.forEach(c => observer.observe(c.parentElement));





//GALERIJA ISPIS
const galerija = [
    "images/demo/galerija1.jpg",
    "images/demo/galerija2.jpg",
    "images/demo/galerija3.jpg",
    "images/demo/galerija4.jpg",
    "images/demo/galerija5.jpg",
    "images/demo/galerija6.jpg"
];

const portfolioDiv = document.getElementById("portfolio-container");

galerija.forEach(slika => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    const div = document.createElement("div");
    div.className = "portfolio-item";

    const img = document.createElement("img");
    img.src = slika;

    div.appendChild(img);
    col.appendChild(div);
    portfolioDiv.appendChild(col);
});


//PARTNERI ISPIS
const partneri = [
    "images/demo/partners-1.png",
    "images/demo/partners-2.png",
    "images/demo/partners-3.png",
    "images/demo/partners-4.png",
    "images/demo/partners-5.png",
    "images/demo/partners-6.png",
    "images/demo/partners-7.png"
];

const partnerDiv = document.getElementById("partner-wrapper");

partneri.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.className = "partner-logo";
    partnerDiv.appendChild(img);
});




//DINAMICKO ISPISIVANJE TIMA
const tim = [
    {
        ime: "Mila Petrović",
        grad: "Beograd, Srbija",
        uloga: "Make-up Artist",
        opis: "Profesionalno šminkanje za sve prilike i foto šminka.",
        slika: "images/demo/radnik1.jpg"
    },
    {
        ime: "Marko Ilić",
        grad: "Beograd, Srbija",
        uloga: "Frizer",
        opis: "Specijalizovan za šišanje, stilizovanje i fen frizure.",
        slika: "images/demo/radnik2.jpg"
    },
    {
        ime: "Tea Jovanović",
        grad: "Beograd, Srbija",
        uloga: "Skin Care & Tretmani lica",
        opis: "Profesionalne maske, hidratacija i nega kože.",
        slika: "images/demo/radnik3.jpg"
    },
    {
        ime: "Katarina Marković",
        grad: "Beograd, Srbija",
        uloga: "Nails & Manikir",
        opis: "Uređivanje noktiju, gel tehnike i kreativni nail dizajn.",
        slika: "images/demo/radnik4.jpg"
    }
];

const teamContainer = document.getElementById("team-container");

tim.forEach(osoba => {
    const div = document.createElement("div");
    div.className = "col-md-3";

    div.innerHTML = `
		<div class="team-item">
			<div class="team-image">
				<img src="${osoba.slika}" class="img-responsive" alt="${osoba.ime}">
			</div>
			<div class="team-text">
				<h3>${osoba.ime}</h3>
				<div class="team-location">${osoba.grad}</div>
				<div class="team-position">– ${osoba.uloga} –</div>
				<p>${osoba.opis}</p>
			</div>
		</div>
	`;

    teamContainer.appendChild(div);
});

//AUTOR
$(document).ready(function () {

    $("#autor-info").hide();

    $("#btnVise").on("click", function () {
        $("#autor-info").slideToggle(250);

        $(this).text(
            $(this).text() === "Više" ? "Manje" : "Više"
        );
    });

});


