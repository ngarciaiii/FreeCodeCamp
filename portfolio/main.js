
function toggleNav(){
  var elementSide = document.getElementById("mySidenav");
  var elementMain = document.getElementById("main");
  var elementIcon = document.getElementById("icon")

  if (elementSide.style.width == "130px") {
    elementSide.style.width = "0px";
    elementMain.style.marginLeft = "0px";
    elementIcon.className = "fa fa-bars"
  } else {
    elementSide.style.width = "130px";
    elementMain.style.marginLeft = "130px"
    elementIcon.className = "fa fa-arrow-left"
  }
}
