


const HamburgerButton = document.querySelector(" .nav-toggler")

const navigation = document.querySelector(".nav-responsive")

const buttonContinuer = document.getElementById('btn-continuer')
const sectionMain = document.querySelector(" .section-main")
const body = document.getElementById('body')


HamburgerButton.addEventListener("click", toggleNav)
navigation.addEventListener("click", toggleNav)
buttonContinuer.addEventListener("click", () => {
    console.log("Bonjour a vous")
    document.body.style.background = sectionMain

    
        
})

function toggleNav(){
    HamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}