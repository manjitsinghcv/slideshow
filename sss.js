
var image1 = new Image();
image1.src="images/BALL1.jpg";
var image2 = new Image();
image2.src="images/BALL2.jpg";
var image3 = new Image();
image3.src="images/BALL3.jpg";


var step=1;
function slide1it(){
document.images.slide1.src=eval("image"+step+".src");
if(step<3)
step++
else
step=1;
setTimeout("slide1it()",5000);
}
slide1it();




