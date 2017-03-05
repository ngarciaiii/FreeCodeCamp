

  // function openNav() {
  //     document.getElementById("mySidenav").style.width = "130px";
  //     document.getElementById("main").style.marginLeft = "130px";
  // }
  //
  // function closeNav() {
  //     document.getElementById("mySidenav").style.width = "0";
  //     document.getElementById("main").style.marginLeft = "0";
  // }

function toggleNav(){
  var elementSide = document.getElementById("mySidenav");
  var elementMain = document.getElementById("main");
  if (elementSide.style.width == "130px") {
    elementSide.style.width = "0px";
    elementMain.style.marginLeft = "0px";
  } else {
    elementSide.style.width = "130px";
    elementMain.style.marginLeft = "130px"
  }
}
