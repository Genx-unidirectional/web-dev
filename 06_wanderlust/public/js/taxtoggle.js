const toggler = document.getElementById("toggler");
const taxShowCases =document.getElementsByClassName("taxContent");


toggler.addEventListener("click",()=>{
    for(let taxItem of taxShowCases){
        taxItem.classList.toggle("hidden");
    }
})
