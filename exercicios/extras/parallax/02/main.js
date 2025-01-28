let onda1 = document.getElementById("onda1")
let onda2 = document.getElementById("onda2")
let onda3 = document.getElementById("onda3")
let onda4 = document.getElementById("onda4")

window.addEventListener("scroll", () => {
    let pos = window.scrollY

    onda1.style.backgroundPositionX = 400 + pos * 4 + "px"
    onda2.style.backgroundPositionX = 300 + pos * (-4) + "px"
    onda3.style.backgroundPositionX = 200 + pos * 2 + "px"
    onda4.style.backgroundPositionX = 100 + pos * (-2) + "px"
})