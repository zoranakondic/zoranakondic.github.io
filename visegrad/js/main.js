// Galerija

let vrednostSm=[8,4,6,6,4,8];
let vrednostMd=[6,3,3,3,3,6];
let slikePath=[
    "images/g1.jpg",
    "images/g2.jpg",
    "images/g3.jpg",
    "images/g4.jpg",
    "images/g5.jpg",
    "images/g6.jpg"
]


function ispisiGaleriju(){
    let wrapper=document.getElementById("galleryWrapper");
    for(let i=0;i<vrednostSm.length;i++){
        let div1=document.createElement('div');
        div1.classList.add("col-sm-"+vrednostSm[i],"col-md-"+vrednostMd[i],"px-0");
        let slika=document.createElement('img');
        slika.setAttribute('src',slikePath[i]);
        slika.setAttribute('alt',"Slika"+i+1);
        let aTag=document.createElement('a');
        aTag.setAttribute('href',slikePath[i]);
        aTag.setAttribute('data-toggle',"lightbox");
        aTag.setAttribute('data-gallery','gallery');
        let iTag= document.createElement('i');
        iTag.classList.add('fa','fa-picture-o');
        iTag.setAttribute('aria-hidden','true');
        aTag.appendChild(iTag);
        let divImgBox=document.createElement('div');
        divImgBox.classList.add('img-box');
        divImgBox.style='height:450px;'
        divImgBox.appendChild(slika);
        divImgBox.appendChild(aTag);
        div1.appendChild(divImgBox);
        wrapper.appendChild(div1);
    }
    
}

ispisiGaleriju();



// Forma

let uzorakIme =
  /^[A-ZČĆŠĐŽ][a-zčćšđž]{2,15}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,15})?(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,20})\s*$/;


function proveriFormu(){
    let ime=document.getElementById("fullName").value;
    let number=document.getElementById("number").value;
    let email=document.getElementById("email").value;
    let numberOfGuests=document.getElementById("numberOfGuests").value;
    let dateOfReservation=document.getElementById("dateOfReservation");
    let message=document.getElementById("message").value;

    let p1=proveriIme();
    let p2=proveriTelefon();
    let p3=proveriEmail();

    if (numberOfGuests == 0) {
        document.getElementById("upozorenjeGosti").classList.remove("sakrij");
      } else {
        document.getElementById("upozorenjeGosti").classList.add("sakrij");
    }

    if (numberOfGuests != 0 && message != "" && proveriEmail() && proveriIme() && proveriTelefon() && !isNaN(dateOfReservation.valueAsNumber)) {
        document.getElementById("upozorenjePoruka").classList.add("sakrij");
        document.getElementById("upozorenjeGosti").classList.add("sakrij");
        console.log("Rezervacija poslata");
      } else if (message == "") {
        document.getElementById("upozorenjePoruka").classList.remove("sakrij");
      } else if (message != "") {
        document.getElementById("upozorenjePoruka").classList.add("sakrij");
      } else if (numberOfGuests == 0) {
        document.getElementById("upozorenjeGosti").classList.remove("sakrij");
      } else if (numberOfGuests != 0) {
        document.getElementById("upozorenjeGosti").classList.add("sakrij");
      } else if (!proveraIme()) {
        proveriIme();
      } else if (!proveriEmail()){
        proveriEmail();
      } else if (!proveriTelefon()){
        proveriTelefon();
      }

    if (isNaN(dateOfReservation.valueAsNumber)) {
        document.getElementById("upozorenjeDatum").classList.remove("sakrij");
      }
      if (!isNaN(dateOfReservation.valueAsNumber)) {
        document.getElementById("upozorenjeDatum").classList.add("sakrij");
      }
    
}

let txtIme=document.getElementById('fullName');
txtIme.addEventListener("blur", proveriIme);
function proveriIme() {
    let ime=txtIme.value;
    ime.replace(/\s\s+/g, " ");
    if (!uzorakIme.test(ime)) {
      let poljeIme = document.getElementById("upozorenjeIme");
      if (ime == "" || !ime.trim()) {
        poljeIme.innerHTML = "Niste popunili Ime i prezime!";
      } else {
        poljeIme.innerHTML = "Pogresan unos imena i prezimena!";
      }
      poljeIme.classList.remove("sakrij");
      return false;
    }
    if (uzorakIme.test(ime)) {
      let poljeIme = document.getElementById("upozorenjeIme");
      poljeIme.classList.add("sakrij");
      return true;
    }
}

let uzorakEmail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;

let txtEmail=document.getElementById('email');
txtEmail.addEventListener("blur", proveriEmail);
function proveriEmail() {
    let email=txtEmail.value;
  if (!uzorakEmail.test(email)) {
    let poljeEmail = document.getElementById("upozorenjeEmail");
    if (email == "" || !email.trim())
      poljeEmail.innerHTML = "Niste popunili email!";
    else poljeEmail.innerHTML = "Email nije u dobrom formatu!";

    poljeEmail.classList.remove("sakrij");
    return false;
  }
  if (uzorakEmail.test(email)) {
    let poljeEmail = document.getElementById("upozorenjeEmail");
    poljeEmail.classList.add("sakrij");
    return true;
  }
}

let uzorakTelefon = /^06[0-689][0-9]{6,7}$/;

let telefonTxt = document.getElementById("number");
telefonTxt.addEventListener("blur", proveriTelefon);

function proveriTelefon() {
  let telefon = telefonTxt.value;
  if (!uzorakTelefon.test(telefon)) {
    let poljeTelefon = document.getElementById("upozorenjeTelefon");
    if (telefon == "" || !telefon.trim())
      poljeTelefon.innerHTML = "Niste uneli telefon";
    else poljeTelefon.innerHTML = "Telefon nije u dobrom formatu!";

    poljeTelefon.classList.remove("sakrij");
    return false;
  }
  if (uzorakTelefon.test(telefon)) {
    let poljeTelefon = document.getElementById("upozorenjeTelefon");
    poljeTelefon.classList.add("sakrij");
    return true;
  }
}

var dugme = document.getElementById("scrollUp");

window.onscroll = function () {
  SkrolGore();
  progressBarScroll();
};



// DugmeBackToTop

function SkrolGore() {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    dugme.style.display = "block";
  } else {
    dugme.style.display = "none";
  }
}


// ScrollBar

function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}
