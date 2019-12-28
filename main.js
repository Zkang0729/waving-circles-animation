var circles = document.getElementsByTagName("span");
var i = 0;

for (i = 0; i < circles.length; i++) {
  circles[i].style.top = `${i}rem`;
  circles[i].style.left = `${i}rem`;
  circles[i].style.right = `${i}rem`;
  circles[i].style.bottom = `${i}rem`;
  circles[i].style.animationDelay = `${25 * i}ms`;
}
