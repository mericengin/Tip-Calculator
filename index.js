const billAmountBox = document.getElementById("billAmountBox");
const tipPercentageBox = document.getElementById("tipPercentageBox");
const calculateBtn = document.getElementById("calculateBtn");
const totalResult = document.getElementById("totalResult");

function calculateTip() {

    let billAmount = parseFloat(billAmountBox.value);
    let tipPercentage = parseFloat(tipPercentageBox.value);

    if(isNaN(billAmount) || isNaN(tipPercentage)) {
        totalResult.style.color = "#dc3545";
        totalResult.textContent = "Please enter both: Bill Amount and Tip Percentage!"
    }
    else {
        totalResult.style.color = "#28a745";
        const totalVal = billAmount * (1 + tipPercentage / 100);
        totalResult.textContent = `$${totalVal.toFixed(2)}`
    }

}

calculateBtn.addEventListener("click", calculateTip);

document.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        calculateTip();
    }
});