// Get references to DOM elements
let checkbox = document.getElementById("checkbox");
let display = document.getElementById("display");
let button = document.getElementById("roll");
let container=document.querySelector("container");
let imgarr=['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg'];
button.onclick = function () {
if(navigator.onLine==true){
  if (checkbox.checked) {
    const rand = Math.floor(Math.random() * 6) + 1;
    let imagePath = `images/${rand}.jpg`;
    display.innerHTML = `<img src="${imgarr[rand-1]}" alt="Dice ${rand}">`;

  } else {
    display.textContent = `Check the Box First `;
  }
}
else{
  display.textContent = `You are of offline`;
}
};


