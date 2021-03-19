var activePage = {};

function setActiveLink(){
  var url = window.location.pathname;
  console.log("url: " + url);
  if (url === "/"){return;}
  var icons = $("i");
  $("nav a").each(function(i, test) {
    console.log(test.pathname);
    if (url == (test.pathname)) {
         // icons[i].addClass("active");
      icons[i].setAttribute("class", "material-icons active");
      console.log("icon: " + i);
      console.log(icons[i])
          //for making parent of submenu active
          //$(this).closest("li").parent().parent().addClass("active");
    }
    else{
        //icons[i].removeClass("active");
      icons[i].setAttribute("class", "material-icons");
    }
      //$(this).closest("i").addClass("active");
        //  var icon = tes.innerHtml;
         // console.log("icon: " + icon);
  });
}
/*
$(function() {
  // this will get the full URL at the address bar
  var url = window.location.href;
  console.log("url: " + url);
  // passes on every "a" tag
  $("nav a").each(function(i, test) {
      console.log(test+", "+ i+", "+this.getAttribute("href"));
      // checks if its the same on the address bar
      if (url == (this.href)) {
          $(this).closest("i").addClass("active");
          //for making parent of submenu active
          //$(this).closest("li").parent().parent().addClass("active");
      }
      else{
        $(this).closest("i").removeClass("active");
      }
  });
});        
*/
/*

$(document).ready(function(){
  
   activePage = $(location).attr('pathname'); // Returns path only 

  //var test = document.createElement("i");
  //test.addEventListener();
  console.log("page href:"+activePage);

  //get all the icons
  var navLinks = $("nav a");
  var icons = $("i");
  console.log("icons length:"+icons.length);
  for (var i = 0; i< navLinks.length; i++){
    navLinks[i].addEventListener("click", function(){
      console.log("click event change: "+ this.getAttribute("href"));
      if (navLinks[i].getAttribute("href") == activePage){
      console.log("got a match!");
      //icons[i].addClass("active");
      }
      else{
      //icons[i].removeClass("active");
      console.log("no match");
      }
    });
    console.log("page href:"+navLinks[i].getAttribute("href"));
  }
 
  if (activePage == "/"){
        console.log("i'M AT INDEX!");
   // icons[0].      
  }
  //remove the active class from all of them
  
});*/