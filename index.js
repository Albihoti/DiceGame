randomNumber1 = parseInt(Math.random()*6 +1);
randomNumber2 = parseInt(Math.random()*6 +1);


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 wins";

}
else if(randomNumber1==randomNumber2){
  document.querySelector("h1").innerHTML="Equal";


}
document.querySelector(".img1").setAttribute("src",`images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src",`images/dice${randomNumber2}.png`);
