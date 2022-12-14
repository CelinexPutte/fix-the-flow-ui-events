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

// Interface
let interface = document.querySelector('a:nth-of-type(10)')

interface.addEventListener('click', backgroundChangeClick)

function backgroundChangeClick() {
  interface.classList.toggle('background')
}

// Sprint 5
let sprint = document.querySelector('a:nth-of-type(5)')

sprint.addEventListener('dblclick', rotateHandler)
sprint.addEventListener('animationend', rotateHandler)

function rotateHandler() {
  sprint.classList.toggle('rotate')
}

// Wireflow
let wireflow = document.querySelector('a:nth-of-type(14)')

wireflow.addEventListener('mouseover', scaleHover)
wireflow.addEventListener('mouseout', scaleHover)

function scaleHover() {
  wireflow.classList.toggle('scale')
}

// Labels
let labels = document.querySelector('a:nth-of-type(17)')

labels.addEventListener('mouseover', shakeHover)
labels.addEventListener('mouseout', shakeHover)

function shakeHover() {
  labels.classList.toggle('shake')
}

// Code
let code = document.querySelector('a:nth-of-type(20)')

code.addEventListener('click', hangClick)
code.addEventListener('animationend', hangClick)

function hangClick() {
  code.classList.toggle('hang')
}