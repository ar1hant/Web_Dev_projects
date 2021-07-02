var rand_num1 = Math.floor(Math.random() * 6) + 1;
var rand_img1 = "dice" + rand_num1 + ".png";
var img_src1 = "images/" + rand_img1;
document.querySelectorAll("img")[0].setAttribute("src", img_src1);
var rand_num2 = Math.floor(Math.random() * 6) + 1;
var rand_img2 = "dice" + rand_num2 + ".png";
var img_src2 = "images/" + rand_img2;
document.querySelectorAll("img")[1].setAttribute("src", img_src2);

if(rand_num1 > rand_num2)
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
else if(rand_num1 < rand_num2)
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
else
  document.querySelector("h1").innerHTML = "DRAW!";