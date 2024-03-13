//Logica Volume
const div = document.querySelector("#volume")
const input = div.querySelector("input")

div.querySelector(".sub").addEventListener("click", (event) => {
    input.value = (input.value > 0) ? input.value -= 1 : input.value
    event.preventDefault()
})

div.querySelector(".add").addEventListener("click", (event) => { 
    input.value = (input.value == "" ? 1 : parseInt(input.value) + 1)
    event.preventDefault()
})

