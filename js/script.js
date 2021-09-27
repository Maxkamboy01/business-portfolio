function sideBarMove() {
  document.querySelector(".burger-menu").classList.toggle("icon-right");
  document.querySelector(".side-bar").classList.toggle("sidebar-right");
  console.log("working");
}

function onclicks(){
    document.querySelector('.side-bar').classList.remove('sidebar-right')
    document.querySelector('.burger-menu').classList.remove('icon-right')
}