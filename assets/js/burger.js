let openNavBurger = document.querySelector("#openNavBurger")
let navBurger = document.querySelector("#navBurger")
let header = document.querySelector("header")
let contain = document.querySelector('#contain')
let logo = document.querySelector('#logo')
let turnNav = 0;

openNavBurger.addEventListener('click', (event) => {
    displayNav(event)
})

function displayNav(event) {
    if(turnNav == 0){
        contain.style.marginLeft = "17vw"
        navBurger.style.display = "flex"
        logo.style.display= 'block'
        header.style.transition = "0.2s ease-out"
        header.style.borderRight = "1px solid black"
        header.style.backgroundColor = "whitesmoke"
        turnNav++
    }else{
        contain.style.marginLeft = "15vw"
        navBurger.style.display = "none"
        logo.style.display= 'none'
        header.style.transition = "0.2s ease-out"
        header.style.border = "unset"
        header.style.backgroundColor = "unset"
        turnNav--
    }
}