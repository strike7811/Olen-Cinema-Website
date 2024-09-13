/*For Main Page Sub Tab*/
function mov_tab(evt, mov_category) {
  var i, mov_tabcontent, mov_tablinks;

  mov_tabcontent = document.getElementsByClassName("mov_tabcontent");
  for (i = 0; i < mov_tabcontent.length; i++) {
    mov_tabcontent[i].style.display = "none";
  }
  mov_tablinks = document.getElementsByClassName("mov_tablinks");
  for (i = 0; i < mov_tablinks.length; i++) {
    mov_tablinks[i].className = mov_tablinks[i].className.replace(" active", "");
  }
  document.getElementById(mov_category).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("mov_defaultOpen").click();

function selectDate(date) {
  var header = document.getElementById("date_picker");
  var btns = header.getElementsByClassName("date");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  //save date
  localStorage.setItem("MovieDate",date);
  console.log(localStorage.getItem("MovieDate"));
}

