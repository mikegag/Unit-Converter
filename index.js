const input = document.getElementById("unit-input") //access to user input value
const unitRatioIDs = ["length-description", "volume-description", "mass-description"] //stores IDs of each unit conversion section

//listens for body clicks and sends current element ID to each function
document.body.addEventListener("click", (e) => {
    unitConversion(e.target.id)
    keyboardCopier(e.target.id)
})
 
//updates each unit section with related conversion calculations
function unitConversion(id) 
{
    if(id === document.getElementById("convert-btn").id) {
        //prevents user from entering NaN
        if(input.value * 0 === 0) { 
            //unit ratio conversions
            const feet = input.value * 3.281
            const meter = input.value / 3.281
            const gallon = input.value * 0.264
            const liter = input.value / 0.264
            const pound = input.value * 2.204
            const kilo = input.value / 2.204
                
            document.getElementById(unitRatioIDs[0]).innerHTML = 
                ` ${input.value} meters = ${feet.toFixed(3)} feet | ${input.value} feet = ${meter.toFixed(3)} meters  `
            
            document.getElementById(unitRatioIDs[1]).innerHTML = 
                ` ${input.value} litres = ${gallon.toFixed(3)} gallons | ${input.value} gallons = ${liter.toFixed(3)} litres `
            
            document.getElementById(unitRatioIDs[2]).innerHTML = 
                ` ${input.value} kilos = ${pound.toFixed(3)} pounds | ${input.value} pounds = ${kilo.toFixed(3)} kilos  `  
        }
    }   
}

//copies selected conversion calculations to keyboard
function keyboardCopier(id) 
{
    unitRatioIDs.forEach(currentID => {
        if(id === currentID) {
            const currentConversion = document.getElementById(currentID)
            navigator['clipboard'].writeText(currentConversion.textContent)
            
            //checks if alert message structure exists
            if(!document.getElementById("alert")) { 
                document.getElementById("convert-section").innerHTML+= 
                    `<div class ="alert" id ="alert"> COPIED CONVERSION: </br> 
                        <span id ="alert-conversion"> ${currentConversion.textContent} </span> </div>`

                setTimeout(()=>{
                    document.getElementById("alert").classList.toggle("none")
                }, 2700)
            }
            //if alert message structure exists, its conversion is replaced with new selection
            else {
                document.getElementById("alert").classList.toggle("none")
                document.getElementById("alert-conversion").textContent = currentConversion.textContent
                
                setTimeout(()=>{
                    document.getElementById("alert").classList.toggle("none")
                }, 2700)
            }
        }
    })
}

