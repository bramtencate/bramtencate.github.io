// Get the modal
var modal = document.getElementById("myModal");

modal.onclick = function(){
  document.getElementById('inlineFrame').src += '';
  modal.style.display = "none";
  $("body").css("overflow", "auto");
}

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("main_img");
var modalImg = document.getElementById("inlineFrame");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  $("body").css("overflow", "hidden");
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  document.getElementById('inlineFrame').src += '';
  modal.style.display = "none";
  $("body").css("overflow", "auto");
}