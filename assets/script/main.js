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
wireflow.addEventListener('animationend', scaleHover)

function scaleHover() {
  wireflow.classList.toggle('scale')
}

// Labels
let labels = document.querySelector('a:nth-of-type(17)')

labels.addEventListener('mouseover', shakeHover)
labels.addEventListener('animationend', shakeHover)

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

// Flow
let flow = document.querySelector('a:nth-of-type(8)')

flow.addEventListener('click', moveClick)

function moveClick() {
  flow.classList.toggle('move')
}

// &
let teken = document.querySelector('a:nth-of-type(3)')

teken.addEventListener('dblclick', zoomDubbleClick)
teken.addEventListener('animationend', zoomDubbleClick)

function zoomDubbleClick() {
  teken.classList.toggle('zoom')
}

// Navigation
let navigation = document.querySelector('a:nth-of-type(19)')

navigation.addEventListener('mouseover', jumpClick)
navigation.addEventListener('animationend', jumpClick)

function jumpClick() {
  navigation.classList.toggle('jumping')
}