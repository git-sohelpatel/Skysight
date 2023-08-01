const toggleButton = document.getElementsByClassName("menu")[0]
const items = document.getElementsByClassName("items")[0]

toggleButton.addEventListener('click', () =>{
    items.classList.toggle("active")
})