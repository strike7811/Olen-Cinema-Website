/*For navigation bar*/
function openNav() {
  document.getElementById("side_nav").style.width = "250px";

}

function closeNav() {
  document.getElementById("side_nav").style.width = "0";
  document.body.style.backgroundColor = "#080808";
}

/*For Main Page Sub Tab*/
function main_tab(evt, movie_category) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("main_tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("main_tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(movie_category).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();