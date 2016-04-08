$(function () {
   // $("#header").load("../includes/header.html");
  $("#header").append("<h1>Erik Lindsay</h1><nav><a href='../includes/about.html'><span>About</span></a><a href='../index.html'><span class='on'>Portfolio</span></a></nav>");
    
 $("#footer").append("<div class='social'><a target='_blank' class='social' href='https://www.instagram.com/aikoeri/'><img class='social' alt='instagram' src='../images/Instagram.svg'><p  class='social'>Instagram</p></a><a target='_blank' class='social' href='https://github.com/ErikLin'><img class='social' alt='Git Hub' src='../images/Git_hub.svg'><p class='social'>Git Hub</p></a><a target='_blank' class='social' href='https://www.linkedin.com/in/erik-lindsay-106444a5'><img class='social' alt='Linked in' src='../images/Linkedin.svg'><p class='social'>LinkedIn</p></a></div><nav class='foot'><a href='includes/about.html'><span>About</span></a><a href='../index.html'><span class='on'>Portfolio</span></a></nav>");
 
 
  });


$(document).ready(function () {
  
 
  //$("h2, h1").css("color", "yellow");
//  $("span").toggleClass("on");
 // $("span").css("background", "red");
  
  var fileName = location.href.split("/").slice(-1); 
console.log(fileName[0]);
  if (fileName[0] == "about.html"){
    $("nav a span").toggleClass("on");
    
    //$("nav a:last-child").removeClass("on");
  } else if(fileName[0] != "index.html"){
    $("nav a span").removeClass("on");
  }
  
});
  