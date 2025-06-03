

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var dropdown = document.querySelector(".dropdown-content");

  header.classList.toggle("abajo", window.scrollY > 0);

  dropdown.classList.toggle("abajo", window.scrollY > 0);
})

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function toggleMenu() {
  var sideMenu = document.getElementById("side-menu");
  if (sideMenu.classList.contains("active")) {
    sideMenu.classList.remove("active");
  } else {
    sideMenu.classList.add("active");
  }
}