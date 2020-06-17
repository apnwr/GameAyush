var randomNumber1 = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber1);

var b1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", b1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber2);

var b2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", b2);


if (randomNumber2 === randomNumber1) {
    document.querySelector("h1").innerHTML = "Draw!";

} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player2 Wins! 🚩";

} else {

    document.querySelector("h1").innerHTML = "🚩 Player1 Wins!";
}