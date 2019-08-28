var modal = document.getElementById("myModal");

//modal.onclick = function(){
//  document.getElementById('inlineFrame').src += '';
//  modal.style.display = "none";
//  $("body").css("overflow", "auto");
//}

let img = document.getElementById("main_img");
let modalImg = document.getElementById("inlineFrame");
img.onclick = function(){
  setPosition();
  modal.style.display = "block";
  $("body").css("overflow", "hidden");
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  $('#inlineFrame').attr('src', $('#inlineFrame').attr('src'));
  modal.style.display = "none";
  $("body").css("overflow", "auto");
}

function setPosition(){
  let w = document.documentElement.clientWidth;
  let h = document.documentElement.clientHeight;
  
  let x = (w / 2) - (1441.2 / 2);
  let y = (h / 2) - (921.2 / 2);
  
  if (x < 0) x = 0; 
  if (y < 0) y = 0; 
  
  document.getElementById("inlineFrame").style.left = x + "px";
  document.getElementById("inlineFrame").style.top = y + "px";
}

window.addEventListener("resize", setPosition);