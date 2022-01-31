let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

celsius.addEventListener('input', function () {

    //  getting user input
    let cel = this.value;
    // finding fahrenheit value using below formula
    let fah = (cel * 9 / 5) + 32;
    // after decimal, we need till 4 digit
    if (!Number.isInteger(fah)) {
        fah = fah.toFixed(4);
    }
    // updating value in fahrenheut box
    fahrenheit.value = fah;
})


fahrenheit.addEventListener('input', function () {

    //  getting user input
    let fah = this.value;
    // finding celsius value using below formula
    let cel = (fah - 32) * 5 / 9;
    // after decimal, we need till 4 digit
    if (!Number.isInteger(cel)) {
        cel = cel.toFixed(4);
    }
    // updating value in celsius box
    celsius.value = cel;

})