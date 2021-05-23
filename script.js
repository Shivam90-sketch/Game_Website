var num1 = Math.floor(Math.random() * 6)+1;

var randomdiceimage = "dice" + num1 + ".png";

var randomimagesource = "Dice/images/" + randomdiceimage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimagesource);

var num2 = Math.floor(Math.random()*6)+1;

var randomdiceimage2 ="Dice/images/dice"+num2+".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdiceimage2);


if(num1 > num2){
    document.querySelector("h1").innerHTML = "Player 1 Win's 🚩⛳ ";
    }
else if(num1 < num2){
    document.querySelector("h1").innerHTML ="Player 2 Win's 🚩⛳";
 }else{
    document.querySelector("h1").innerHTML ="Match Draw  ";
    }