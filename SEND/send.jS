/* ELEMENT MODIFIBALE */
let balance = '14821.89';

/* BOXES DE CONTACT */
let contactButton = document.getElementsByClassName("contact-right")[0]
let contactSection = document.getElementsByClassName("contact-section")[0];
let numberOfContact = document.getElementsByClassName("contact-box").length;

/* SECTION DE CONTACT INDIVIDUELLES */
let firstContact = document.getElementsByClassName("contact-box")[1];
let secondContact = document.getElementsByClassName("contact-box")[2];
let thirdContact = document.getElementsByClassName("contact-box")[3];

/* PRENOM DES CONTACTS */
let contactPrenom0 =  document.getElementsByClassName("contact-name-prenom")[0];
let contactPrenom1 =  document.getElementsByClassName("contact-name-prenom")[1];
let contactPrenom2 =  document.getElementsByClassName("contact-name-prenom")[2];
let contactPrenom3 =  document.getElementsByClassName("contact-name-prenom")[3];

/* NOM DES CONTACTS */
let contactNom0 =  document.getElementsByClassName("contact-name-family")[0];
let contactNom1 =  document.getElementsByClassName("contact-name-family")[1];
let contactNom2 =  document.getElementsByClassName("contact-name-family")[2];
let contactNom3 =  document.getElementsByClassName("contact-name-family")[3];

/* COMPTE EN BANQUE */

let bankAccount = [
    '5545051839781030',
    '5134639799763118',
    '5211429745165238',
    '5218906968817812']

let bankAccount0 = document.getElementsByClassName("contact-account")[0];
let bankAccount1 = document.getElementsByClassName("contact-account")[1];
let bankAccount2 = document.getElementsByClassName("contact-account")[2];
let bankAccount3 = document.getElementsByClassName("contact-account")[3];

bankAccount0.textContent = bankAccount[0];
bankAccount1.textContent = bankAccount[1];
bankAccount2.textContent = bankAccount[2];
bankAccount3.textContent = bankAccount[3];

/* CLIC POUR DEFILEMENT CONTACT */
contactButton.addEventListener('click', () => {
    contactButton.classList.toggle("rotate");
    contactSection.classList.toggle("all")
})

/* CLIC SUR PREMIER CONTACT */
firstContact.addEventListener('click', () => {
    contactButton.classList.remove("rotate");

    const tempPrenom = contactPrenom0.textContent;
    contactPrenom0.textContent = contactPrenom1.textContent;
    contactPrenom1.textContent = tempPrenom;
    
    const tempNom = contactNom0.textContent;
    contactNom0.textContent = contactNom1.textContent;
    contactNom1.textContent = tempNom;

    const tempBank = bankAccount0.textContent;
    bankAccount0.textContent = bankAccount1.textContent;
    bankAccount1.textContent = tempBank;

    contactSection.classList.toggle("all")
})

/* CLIC SUR DEUXIEME CONTACT */
secondContact.addEventListener('click', () => {
    contactButton.classList.remove("rotate");

    const tempPrenom = contactPrenom0.textContent;
    contactPrenom0.textContent = contactPrenom2.textContent;
    contactPrenom2.textContent = tempPrenom;
    
    const tempNom = contactNom0.textContent;
    contactNom0.textContent = contactNom2.textContent;
    contactNom2.textContent = tempNom;

    const tempBank = bankAccount0.textContent;
    bankAccount0.textContent = bankAccount2.textContent;
    bankAccount2.textContent = tempBank;

    contactSection.classList.toggle("all")
})

/* CLIC SUR TROISIEME CONTACT */
thirdContact.addEventListener('click', () => {
    contactButton.classList.remove("rotate");

    const tempPrenom = contactPrenom0.textContent;
    contactPrenom0.textContent = contactPrenom3.textContent;
    contactPrenom3.textContent = tempPrenom;
    
    const tempNom = contactNom0.textContent;
    contactNom0.textContent = contactNom3.textContent;
    contactNom3.textContent = tempNom;

    const tempBank = bankAccount0.textContent;
    bankAccount0.textContent = bankAccount3.textContent;
    bankAccount3.textContent = tempBank;

    contactSection.classList.toggle("all")
})

/* BALANCE */
let balanceBox = document.getElementsByClassName("balance-number")[0];
balanceBox.textContent = balance;

/* UNITÉ */
let devise = 0; /* EUR= 0; USD=1 */

/* CONVERSION */
let EURtoUSD = '1.06';
let USDtoEUR = '0.94';

/* CALCULATRICE */

/* BOUTONS D'OPERATION */

let button1 = document.getElementsByClassName("calculator-box")[0];
let button2 = document.getElementsByClassName("calculator-box")[1];
let button3 = document.getElementsByClassName("calculator-box")[2];
let button4 = document.getElementsByClassName("calculator-box")[3];
let button5 = document.getElementsByClassName("calculator-box")[4];
let button6 = document.getElementsByClassName("calculator-box")[5];
let button7 = document.getElementsByClassName("calculator-box")[6];
let button8 = document.getElementsByClassName("calculator-box")[7];
let button9 = document.getElementsByClassName("calculator-box")[8];
let buttonDot = document.getElementsByClassName("calculator-box")[9];
let button0 = document.getElementsByClassName("calculator-box")[10];
let buttonBack = document.getElementsByClassName("calculator-box")[11];

/* DIVERS CONTAINERS */
let balanceUnit = document.getElementsByClassName("balance-unit")[0];
let unit = document.getElementsByClassName("indication-unit")[0];
let outputUnit = document.getElementsByClassName("indication-value-unit")[0];
let outputBox = document.getElementsByClassName("indication-value-number")[0];

/* VALEURS DES BOUTONS */

let etape = 0;
let current = 0;

/* ERREUR */    
function error(){  
    let value = outputBox.textContent;
    let value2 = value.toString();
    let parts = value2.split(".");
    let decimals = parts[1];

        if (decimals && decimals.length > 2) {
            current = current.slice(0, -1);
            outputBox.textContent = current;
            }}

/* BOUTON 1 */
button1.addEventListener('click', () => {

    if (etape === 0) {
        current = '1';
        etape++;
        outputBox.innerHTML = '1';
    } else {
        outputBox.textContent = current += '1';
        etape++;
        error();

    }})
/* BOUTON 2 */
button2.addEventListener('click', () => {

    if(etape === 0){
        current ='2';
        etape++;
        outputBox.innerHTML ='2';
        error()
    } else {
    outputBox.textContent = current += '2';
    etape++;
    error()
   }
})
/* BOUTON 3 */
button3.addEventListener('click', () => {

    if(etape === 0){
        current ='3';
        etape++;
        outputBox.innerHTML ='3';

    } else {
    outputBox.textContent = current += '3';
    etape++;
    error()
   }
})
/* BOUTON 4 */
button4.addEventListener('click', () => {

    if(etape === 0){
        current ='4';
        etape++;
        outputBox.innerHTML ='4';

    } else {
    outputBox.textContent = current += '4';
    etape++;
    error()
   }
})
/* BOUTON 5 */
button5.addEventListener('click', () => {

    if(etape === 0){
        current ='5';
        etape++;
        outputBox.innerHTML ='5';
        error()

    } else {
    outputBox.textContent = current += '5';
    etape++;
    error()
   }
})
/* BOUTON 6 */
button6.addEventListener('click', () => {

    if(etape === 0){
        current ='6';
        etape++;
        outputBox.innerHTML ='6';
        error()
    } else {
    outputBox.textContent = current += '6';
    etape++;
    error()
   }
})
/* BOUTON 7 */
button7.addEventListener('click', () => {

    if(etape === 0){
        current ='7';
        etape++;
        outputBox.innerHTML ='7';

    } else {
    outputBox.textContent = current += '7';
    etape++;
    error()
   }
})
/* BOUTON 8 */
button8.addEventListener('click', () => {

    if(etape === 0){
        current ='8';
        etape++;
        outputBox.innerHTML ='8';
    } else {
    outputBox.textContent = current += '8';
    etape++;
    error()
   }
})
/* BOUTON 9 */
button9.addEventListener('click', () => {

    if(etape === 0){
        current ='9';
        etape++;
        outputBox.innerHTML ='9';
    } else {
    outputBox.textContent = current += '9';
    etape++;
    error();
   }
})
/* BOUTON 0 */
button0.addEventListener('click', () => {

    if(etape === 0){
        current ='0';
        etape++;
        outputBox.innerHTML ='0';
    } else {
    outputBox.textContent = current += '0';
    etape++;error()
   }
})
/* BOUTON DOT */
buttonDot.addEventListener('click', () => {

    if(outputBox.textContent.includes(".")){

    } else {
    outputBox.textContent = current += '.';
    etape++;
}
})
/* BOUTON  BACK */
buttonBack.addEventListener('click', () => {

    if(etape === 0){
        current ='';
        outputBox.innerHTML ='';
    } else {
    current = current.slice(0, -1);
    outputBox.textContent = current;
    etape++;

   }
})

/* ELEMENT MODIFIBIABLE PAR L'UNITE */
unit.addEventListener('click', () => {
    
    if (devise === 0){
    unit.textContent = 'USD';

    balanceUnit.textContent = '$';
    outputUnit.textContent = '$';
    let reference = outputBox.textContent
    balanceBox.innerHTML = (parseFloat(balance) * parseFloat(EURtoUSD)).toFixed(2);

    outputBox.textContent = (reference * EURtoUSD).toFixed(2)
    
    devise = 1;}
    else {  
    unit.textContent = 'EUR';

    balanceUnit.textContent = '€';
    outputUnit.textContent = '€';

    devise = 0;

    balanceBox.innerHTML = balance;

    outputBox.textContent = (outputBox.textContent / EURtoUSD).toFixed(2)
    }
} )


let slider = document.querySelector(".swift-box");

let pressed = false;
let startX;
let x; 

slider.addEventListener('mousedown', (e) => {
    pressed = true;
    startX = e.offsetX; console.log(startX);
})

window.addEventListener('mouseup', () => {
    pressed = false
})

slider.addEventListener('mousemove', (e) => {
    if(!pressed) return;
    e.preventDefault();

    x = e.offsetX;

    slider.style.left = '$(x - startX)px';
})