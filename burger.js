// burger menu javascritp
let burger = document.querySelector(".burger")
burger.addEventListener("click",()=>{
    let navLinks = document.querySelector(".nav-links")
    navLinks.classList.toggle("notHiddenAnymore")
})