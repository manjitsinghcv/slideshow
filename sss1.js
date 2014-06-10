
var imagee1 = new Image();
imagee1.src="images/SHOE1.jpg";
var imagee2 = new Image();
imagee2.src="images/SHOE2.jpg";
var imagee3 = new Image();
imagee3.src="images/SHOE3.jpg";


var step=1;
function slide2it(){
document.images.slide2.src=eval("imagee"+step+".src");
if(step<3)
step++
else
step=1;
setTimeout("slide2it()",4800);
}
slide2it();




