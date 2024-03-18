document.querySelector("#clicker").addEventListener("click",starterFx);
function starterFx()
{
 var ad =new Audio("assets/diceFX.mp3");ad.play();
 var a = Math.floor(Math.random() * 6) + 1;
 var b = Math.floor(Math.random() * 6) + 1;
 var die1 = document.querySelector("#die1");
 var die2 = document.querySelector("#die2");
 var txt = document.querySelector("#welcomeTxt");
 
 var address1 = "assets\\i"+a+".JPG"; var address2 = "assets\\i"+b+".JPG";
 console.log(address1); console.log(address2);
 die1.src=address1; 
 die2.src=address2;
 
 if(a==b)
 {
    txt.innerHTML = " It's a Tie!";
 }else if(a>b)
 {
    txt.innerHTML = " Player 1 Wins";
 }else
 {
    txt.innerHTML = " Player 2 Wins";
 }
}