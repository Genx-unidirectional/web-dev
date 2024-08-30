const successBtn = document.getElementById("successbtn")
const successmsg = document.getElementById("successmsg")
const errorBtn = document.getElementById("failurebtn")
const errorMsg = document.getElementById("failuremsg")

if(successBtn){
    successBtn.addEventListener("click",()=>{
        successmsg.classList.toggle("hidden")
    })
}
if(errorBtn){
    errorBtn.addEventListener("click",()=>{
        errorMsg.classList.toggle("hidden")
    })
}