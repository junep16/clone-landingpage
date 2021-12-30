const subscribeButton = document.querySelector(".sub-contents.three .contact-wrapper .button-subscribe"); 
const modal = document.querySelector(".modal"); 
const menuControl = document.querySelector(".header");
const subMenu = document.querySelector(".header .navigation"); 
// const menuButton = document.querySelector(".header nav a img"); 

function handleModal(){
  subscribeButton.addEventListener('click', function (event) {
      modal.classList.add("on");  

  }); 
  modal.addEventListener('click', function (event) { 
    if(event.target.nodeName === "BUTTON"){
      modal.classList.remove("on");
    } 
  }
  )}; 
handleModal(); 

function handleMenu() {
  menuControl.addEventListener('click', function (event) {
   if (event.target.nodeName === "IMG") {
    subMenu.classList.add("on");
   }
});
  subMenu.addEventListener('click', function (event) {
    if (event.target.nodeName === "LI") { 
      subMenu.classList.remove("on");
    }
  }) 
} 
handleMenu();