var icon = document.getElementById("icon");

icon.onclick = function() {
  if (this.className === "Icon") {
    this.className = "Icon open"; 
  } else {
    this.className = "Icon";
  }
};

let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

btn.onclick = function() {
    sidebar.classList.toggle("active");
}
searchBtn.onclick = function() {
    sidebar.classList.toggle("active");
}
