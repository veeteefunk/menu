const tacos = document.getElementById("tacos")
const total = document.getElementById("total")

tacos.addEventListener('click', showTacosPrice)

function showTacosPrice() {
    total.innerText = "€9"
}