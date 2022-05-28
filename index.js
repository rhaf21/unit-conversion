let metersFeet = document.getElementById("meters-feet")
let feetMeters = document.getElementById("feet-meters")
let litersGallons = document.getElementById("liters-gallons")
let gallonsLiters = document.getElementById("gallons-liters")
let kilogramsPounds = document.getElementById("kilograms-pounds")
let poundsKilograms = document.getElementById("pounds-kilograms")
let unitValue = document.getElementById("unit-value")

document.addEventListener("wheel", function(event){
    if(document.activeElement.type === "number" &&
       document.activeElement.classList.contains("noscroll"))
    {
        document.activeElement.blur();
    }
});

function inputNumber () {
    let unitValue = document.getElementById("unit-value").value
    let metersToFeet = 3.28084
    let metersToFeetConv = unitValue * metersToFeet
    let feetToMeters = 0.3048
    let feetToMetersConv = unitValue * feetToMeters
    let litersToGallons = 0.264172
    let litersToGallonsConv = unitValue * litersToGallons
    let gallonsToLiters = 4.54609
    let gallonsToLitersConv = unitValue * gallonsToLiters
    let kilogramsToPounds = 2.20462
    let kilogramsToPoundsConv = unitValue * kilogramsToPounds
    let poundsToKilograms = 0.453592
    let poundsToKilogramsConv = unitValue * poundsToKilograms

    if (unitValue <= 0) {
        return metersFeet.textContent = unitValue + " " + "Meters" + " " + "=" + " " + metersToFeetConv + " " + "Feet",
        feetMeters.textContent = unitValue + " " + "Feet" + " " + "=" + " " + feetToMetersConv + " " + "Meters",
        litersGallons.textContent = unitValue + " " + "Liters" + " " + "=" + " " + litersToGallonsConv + " " + "Gallons",
        gallonsLiters.textContent = unitValue + " " + "Gallons" + " " + "=" + " " + gallonsToLitersConv + " " + "Liters",
        kilogramsPounds.textContent = unitValue + " " + "Kilograms" + " " + "=" + " " + kilogramsToPoundsConv + " " + "Pounds",
        poundsKilograms.textContent = unitValue + " " + "Pounds" + " " + "=" + " " + poundsToKilogramsConv + " " + "Kilograms"
    }
    else {
        return metersFeet.textContent = unitValue + " " + "Meters" + " " + "=" + " " + metersToFeetConv.toFixed(3) + " " + "Feet",
        feetMeters.textContent = unitValue + " " + "Feet" + " " + "=" + " " + feetToMetersConv.toFixed(3) + " " + "Meters",
        litersGallons.textContent = unitValue + " " + "Liters" + " " + "=" + " " + litersToGallonsConv.toFixed(3) + " " + "Gallons",
        gallonsLiters.textContent = unitValue + " " + "Gallons" + " " + "=" + " " + gallonsToLitersConv.toFixed(3) + " " + "Liters",
        kilogramsPounds.textContent = unitValue + " " + "Kilograms" + " " + "=" + " " + kilogramsToPoundsConv.toFixed(3) + " " + "Pounds",
        poundsKilograms.textContent = unitValue + " " + "Pounds" + " " + "=" + " " + poundsToKilogramsConv.toFixed(3) + " " + "Kilograms"
    }
}