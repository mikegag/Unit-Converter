const meterFeetRatio = 3.281  //ratio to convert between feet and meters
const litreGallonRatio = 3.785  //ratio to convert between litres and gallons
const kiloPoundRatio = 2.205  //ratio to convert between kilograms and pounds
const lengthDsc = document.getElementById("length-dsc")  //access to calculations text area for "Length(meter/feet)"
const volumeDsc = document.getElementById("volume-dsc") //access to calculations text area for "volume(litres/gallons)"
const massDsc = document.getElementById("mass-dsc") //access to calculations text area for "mass(kilograms/pounds)"
const fieldInput = document.getElementById("unit-input") //access to value input area above "convert" button
const btnInput = document.getElementById("cvt-btn")  //access to "convert" button below value input area
btnInput.addEventListener("click", convert) // listens for "convert" button clicks

function convert() //triggered by convert button, formats calculations in each of the three conversion sections
{
   lengthDsc.innerHTML = ` ${fieldInput.value} meters = ${meterToFeet(fieldInput.value)} feet | 
                            ${fieldInput.value} feet = ${FeetToMeter(fieldInput.value)} meters  `
   
   volumeDsc.innerHTML = ` ${fieldInput.value} litres = ${litreToGallon(fieldInput.value)} gallons | 
                            ${fieldInput.value} gallons = ${GallonTolitre(fieldInput.value)} litres  `
   
   massDsc.innerHTML = ` ${fieldInput.value} kilos = ${kiloToPound(fieldInput.value)} pounds | 
                            ${fieldInput.value} pounds = ${PoundToKilo(fieldInput.value)} kilos  `
}

function meterToFeet(input) //converts input from meters to feet, rounded to three decimals
    { return (input * meterFeetRatio).toFixed(3) }

function FeetToMeter(input) //converts input from feet to meters, rounded to three decimals
    { return (input / meterFeetRatio).toFixed(3) }

function litreToGallon(input) //converts input from litres to gallons, rounded to three decimals
    { return (input / litreGallonRatio).toFixed(3) }

function GallonTolitre(input) //converts input from gallons to litre, rounded to three decimals
    { return (input * litreGallonRatio).toFixed(3) }

function kiloToPound(input) //converts input from kilograms to pounds, rounded to three decimals
    { return (input * kiloPoundRatio).toFixed(3) }

function PoundToKilo(input) //converts input from pounds to kilograms, rounded to three decimals
    { return (input / kiloPoundRatio).toFixed(3) }