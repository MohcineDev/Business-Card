const body = document.querySelector('body')
const green = document.querySelector('.leftEdge')
const dark = document.querySelector('.site')
//get input color 
const firstColor = document.querySelector('#firstColor')
const secondColor = document.querySelector('#secondColor')
//initialize the inputs when the page reloaded
firstColor.value ='rgb(0,0,0)'
secondColor.value ='rgb(0,0,0)'

const canvas2 = document.getElementById('canvas2')
const canvas3 = document.getElementById('canvas3')

//get the colors from css
let darkColor = getComputedStyle(dark)
let greencolor = getComputedStyle(green)

//change the var color in css with the selected one
firstColor.addEventListener('change', function () {
    body.style.setProperty('--col', firstColor.value)

    drawlogo(ctx)
    drawPath()
    drawlogo(ctx1)
})

secondColor.addEventListener('change', function () {
    body.style.setProperty('--col0', secondColor.value)
    drawlogo(ctx)
    drawlogo(ctx1)
})

//--------------------

const canvas = document.querySelector('#canvas0')
const ctx = canvas.getContext('2d')
const canvas1 = document.querySelector('#canvas1')
const ctx1 = canvas1.getContext('2d')

function drawlogo(c) {
    //add .backgroundColor here to change it when we call this method in input color listener
    c.strokeStyle = darkColor.backgroundColor
    c.beginPath()
    c.moveTo(175, 10)
    c.lineTo(125, 10)
    c.lineTo(100, 50)
    c.lineTo(125, 90)
    c.lineTo(175, 90)
    c.lineTo(200, 50)
    c.lineTo(175, 10)
    c.closePath()
    c.lineWidth = 6
    c.stroke()
    c.strokeStyle = greencolor.backgroundColor
    c.beginPath()
    c.moveTo(160, 20)
    c.lineTo(130, 20)
    c.lineTo(112, 50)
    c.lineTo(130, 80)
    c.lineTo(170, 80)
    c.lineTo(188, 50)
    c.lineTo(170, 20)
    c.closePath()
    c.lineWidth = 6
    c.stroke()
}

//---- Logo -----------

drawlogo(ctx)
drawlogo(ctx1)
//---- Line -----------

let ctx2 = canvas2.getContext('2d')
let ctx3 = canvas3.getContext('2d')

function drawPath() {

    ctx2.beginPath()
    ctx2.moveTo(3, 0)
    ctx2.lineTo(3, 30)
    ctx2.lineTo(40, 30)
    ctx2.strokeStyle = darkColor.backgroundColor

    ctx2.lineWidth = 2
    ctx2.stroke()

    //---- Details Line -----------

    ctx3.beginPath()
    ctx3.moveTo(42, 34)
    ctx3.lineTo(3, 34)
    ctx3.lineTo(3, 142)
    ctx3.lineTo(42, 142)
    ctx3.strokeStyle = darkColor.backgroundColor

    ctx3.lineWidth = 2
    ctx3.stroke()
}
drawPath()

/*
https://kit.fontawesome.com/a076d05399.js" 
https://cdnjs.cloudflare.com/ajax/libs/fontawesome-iconpicker/3.2.0/js/fontawesome-iconpicker.min.js
*/