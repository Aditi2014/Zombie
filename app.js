const bulb = document.getElementById("bulb")
const bulbon = document.getElementById("bulbon")
const bulboff = document.getElementById("bulboff")
const Zombie = document.getElementById("Zombie")
const body = document.querySelector("body")

var status = "bulboff"

bulb.onclick =()=>{
    if(status === "bulboff"){
        body.style.backgroundColor = "white"
        bulbon.style.display = "block"
        bulboff.style.display = "none"
        Zombie.style.display = "block"
        status = "bulbon"
    } else {
        body.style.backgroundColor = "black"
        bulbon.style.display = "none"
        bulboff.style.display = "block"
        Zombie.style.display = "none"
        status = "bulboff"         
    }
}