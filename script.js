let title=document.getElementById("title");
let image=document.getElementById("image");
let description=document.getElementById("description");
let link = document.getElementsByTagName("a"); 
let button=document.getElementById("but1");

button.addEventListener("click",function(){
title.innerText="Nature: Green Forest";
   console.log(title.innerText);
image.src="forest.jpg";
   console.log(image.src);
image.alt="Green Forest";
   console.log(image.alt);
description.innerText="Experience the beauty of nature with lush green forests and fresh air.";
   console.log(description.innerText);
link[0].href="https://images.search.yahoo.com/search/images;_ylt=Awr98W.IbtpnHwIAUR9XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=natural+green+forest&fr2=piv-web&type=E210US885G0&fr=mcafee#id=0&iurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fbeautiful-green-forest-trees-vivid-color-nature-landscape-delightful-view-lush-woods-treetop-o_124507-11523.jpg%3Fw%3D2000&action=close";
   console.log(link[0].href);
link[0].innerText="Green Forest";
    console.log(link[0].innerText); 
button.innerText="Changed";
    console.log(button.innerText);
});
function bike() {
title.innerText="Bike: RS200";
  console.log(title.innerText);
image.src="RS200.jpg";
   console.log(image.src);
image.alt="RS200";
  console.log(image.alt);
description.innerText="The Bajaj RS200 is a high-performance sports bike with a powerful engine and sleek design.";
  console.log(description.innerText);
link[0].href="https://www.bikewale.com/bajaj-bikes/rs-200/";
  console.log(link[0].href);
button.innerText="Change to Nature";
  console.log(button.innerText);
link[0].innerText="RS200";
  console.log(link[0].innerText); 
}
