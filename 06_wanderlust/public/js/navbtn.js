const btn = document.getElementById("navbtn");
const hiddenNav = document.getElementById("collapsedNav")

btn.addEventListener("click",()=>{
    hiddenNav.classList.toggle("-translate-y-[400px]")
    hiddenNav.classList.toggle("translate-y-0")
})

// hiddenNav.childNodes.addEventListener("click",()=>{
//     hiddenNav.classList.toggle("translate-y-0")
//     hiddenNav.classList.toggle("-translate-y-[400px]")

// })  
