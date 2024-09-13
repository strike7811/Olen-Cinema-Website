filterSelection("all") // Execute the function and show all columns
function filterSelection(item) {
  var x, i;
  x = document.getElementsByClassName("filter_column");
  if (item == "all") item = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    removeContent(x[i], "show");
    if (x[i].className.indexOf(item) > -1) addContent(x[i], "show");
  }
}

// Show filtered elements
function addContent(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeContent(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filter_container");
var btns = btnContainer.getElementsByClassName("filter");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function plus(a, b,c,d,e) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
  total.innerText = parseInt(total.innerText) + parseInt(document.getElementById(d).value);
  
  getPrice(a,b,c,d,e);
}

function minus(a, b,c,d,e) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 0) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
    total.innerText = parseInt(total.innerText) - parseInt(document.getElementById(d).value);
    
  }
  getPrice(a,b,c,d,e);
}

function getPrice(A,B,C,D,E){
  // for(let i = 0; i < AllPrice.length; i++){
  //   console.log(AllPrice[i]);
  // }
  var quantity = document.getElementById(C)
  var price = document.getElementById(D)
  var name = document.getElementById(E)
  var totalPrice = document.getElementById("total")
  localStorage.setItem("quantity",quantity.value);
  localStorage.setItem("price",price.value);
  localStorage.setItem("name",name.innerHTML);
  localStorage.setItem("totalPriceFNB",totalPrice.innerHTML)

}

