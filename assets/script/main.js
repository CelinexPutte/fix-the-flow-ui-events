// interaction
let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// Frontend
let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('mouseover', backgroundChangeHover)
frontend.addEventListener('mouseout', backgroundChangeHover)

function backgroundChangeHover() {
  frontend.classList.toggle('background')
}

