let EUR = document.getElementsByClassName("device")[1];
let USD = document.getElementsByClassName("device")[0];
let moneyBox = document.getElementsByClassName("money")[0];
let evolution = ["857.00", "725.00", "636.00", "659.00",
"624.00", "522.00", "538.00", "629.00", "609.99", "110.00", "93.00"]
moneyBox.innerHTML = evolution[evolution.length - 1];
let devise = 0; 
let unitBox = document.getElementsByClassName("unit")[0];

let evolutionBox = document.getElementsByClassName("evolution")[0];
let actualSolde = evolution[evolution.length - 1];
let prevSolde = evolution[evolution.length - 2];
let diff = actualSolde - prevSolde;
let percentEvolution = ((diff / Math.abs(prevSolde)) * 100).toFixed(2);
let evolutionNumber =  document.getElementsByClassName("evolution-value")[0];

if (parseFloat(evolution[evolution.length - 1]) > parseFloat(evolution[evolution.length - 2])) {
  evolutionBox.style.backgroundColor = "#B8FF5D"
} else {evolutionBox.style.backgroundColor = "#ff002b"}

if (percentEvolution < 0){
  evolutionNumber.innerHTML = percentEvolution + '%';
} else { evolutionNumber.innerHTML ='+' + percentEvolution + '%';}


moneyBox.innerHTML = evolution[evolution.length - 1]

/* TAUX DE CHANGE */
let USD_EUR = 0.950;
let EUR_USD = 1 / USD_EUR;

let nameBox0 = document.getElementsByClassName("name-activities")[0];
let nameBox1 = document.getElementsByClassName("name-activities")[1];

class Activities {
  constructor (name, date, priceEuro, priceCent, png, status){
    this.name = name;
    this.date = date;
    this.euro = priceEuro;
    this.cent = priceCent;
    this.png = png;
    this.status = status
  }

  newBox(){
    const newDiv = document.createElement('div');
    newDiv.innerHTML =
    `<div class="container-activities">
      <div class="container-logo">
          <img src="${this.png}"class="logo">
      </div>
      <div class="center-activities">
          <div class="name-activities">${this.name}</div>
          <div class="time-activities">${this.date}</div>
      </div>
      <div class="right-activities">
          <div class="price-activities"><span class="unit">€</span> <span class="price">${this.euro}<span class="cents">${this.cent}</span></span></div>
          <div class="status"> <img class="check" src="done.png"> <div class="status-activities">${this.status}</div>
          </div>
      </div>
    </div>`;
    document.body.appendChild(newDiv);

    let imgDone = newDiv.querySelector(".check");
    let statusBox = newDiv.querySelector(".status-activities");
    let unitBox1 = newDiv.querySelector(".unit");
    let priceBox = newDiv.querySelector(".price");
    EUR.addEventListener('click', () => {
      unitBox1.innerHTML = "€";
      let price = parseFloat(priceBox.innerHTML);
      if (devise === 1){
      priceBox.innerHTML = (price * USD_EUR).toFixed(2)}

    })

    USD.addEventListener('click', () => {
      unitBox1.innerHTML = "$";
      let price = parseFloat(priceBox.innerHTML); 
      if (devise === 0){
      priceBox.innerHTML = (price * EUR_USD).toFixed(2);}

    })

    if (statusBox.innerHTML === "In Progress") {
      imgDone.style.opacity = "0";
    }
    
  }
}


let Netflix = new Activities("Netflix", "5 hours ago", "16.", "99", "netflix.png", "In Progress");
Netflix.newBox();
let Apple = new Activities("Apple", "2 days ago", "499.", "99", "apple.png", "Completed")
Apple.newBox();
/*let Apple = new Activities("Apple", "2 days ago", "499.", "99", "apple.png", "Completed")
Apple.newBox()*/

let imgDone = document.querySelectorAll(".check");
let statusActivities = document.querySelectorAll(".status-activities");

statusActivities.forEach(function (statusBox, index) {
  if (statusBox.innerHTML === "In Progress") {
    imgDone[index].style.display = "none";
    statusActivities[index].style.color = "#A7A7A7"
  }
});

EUR.addEventListener('click', function(){
  if (devise === 1){
  moneyBox.innerHTML = (moneyBox.innerHTML * USD_EUR) .toFixed(2)}
  USD.classList.remove("active");
  EUR.classList.add("active");
  unitBox.innerHTML = "€";
  devise = 0

})

USD.addEventListener('click', function(){
  if (devise === 0){
  moneyBox.innerHTML  =  (moneyBox.innerHTML * EUR_USD) .toFixed(2)}

  EUR.classList.remove("active");
  USD.classList.add("active");
  unitBox.innerHTML = "$";
    devise = 1
})
