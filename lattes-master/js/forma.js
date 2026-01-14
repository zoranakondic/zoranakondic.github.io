// OBRADA KONTAKT FORME SA VALIDACIJOM, REGEX PROVEROM, ISPISIVANJEM GRESAKA I PORUKE O USPESNOM SLANJU
const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

const output = document.getElementById("formOutput");

// Regex
const nameRegex = /^[A-Za-zČĆŠĐŽčćšđž\s]{3,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{8,10}$/;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let errors = 0;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("messageError").textContent = "";
    output.textContent = "";

    // VALIDACIJA IMENA
    if (!nameRegex.test(nameInput.value.trim())) {
        document.getElementById("nameError").textContent = "Ime mora imati bar 3 slova.";
        errors++;
    }

    // VALIDACIJA EMAIL-a
    if (!emailRegex.test(emailInput.value.trim())) {
        document.getElementById("emailError").textContent = "Email nije validan.";
        errors++;
    }

    // VALIDACIJA TELEFONA
    if (!phoneRegex.test(phoneInput.value.trim())) {
        document.getElementById("phoneError").textContent = "Telefon mora sadržati 8-10 cifara.";
        errors++;
    }

    // VALIDACIJA PORUKE
    if (messageInput.value.trim().length < 5) {
        document.getElementById("messageError").textContent = "Poruka treba da ima bar 5 karaktera.";
        errors++;
    }

    if (errors > 0) return;


    output.style.color = "green";
    output.style.fontWeight = "500";
    output.textContent = "Hvala, vaša poruka je poslata!";


    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    messageInput.value = "";
});