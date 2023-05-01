const inputValueEl = document.getElementById("inputValue");
const maxValueEl = document.getElementById("maxValue");
const verticalBarEl = document.getElementById("verticalBar");
const verticalBarPercentageEl = document.getElementById("verticalBarPercentage");
const pieChartEl = document.getElementById("pieChart");
const pieChartPercentageEl = document.getElementById("pieChartPercentage");
const verticalGradientBarEl = document.getElementById("verticalGradientBar");
const verticalGradientPercentageEl = document.getElementById("verticalGradientPercentage");

let inputValue = 70;
let maxValue = 100;

function showingInTheGraph(fixedValue) {
    verticalBarEl.style.height = `${fixedValue}%`;
    verticalBarPercentageEl.textContent = `${fixedValue}%`;

    let convertionToDegree = (fixedValue / 100) * 360;
    let fixedDegrees = convertionToDegree.toFixed(2);
    pieChartEl.style.backgroundImage = `conic-gradient(#C2E3FF 0deg, #C2E3FF ${360 - fixedDegrees}deg, #008CFF ${360 - fixedDegrees}deg, #008CFF ${fixedDegrees}deg)`;
    pieChartPercentageEl.textContent = `${fixedValue}%`;

    verticalGradientBarEl.style.backgroundImage = `linear-gradient(#C2E3FF ${100 - fixedValue}%, #008CFF 100%)`;
    verticalGradientPercentageEl.textContent = `${fixedValue}%`;
}


function findTotalPercentage() {
    if (inputValue <= maxValue) {
        let totalPercentage = (inputValue / maxValue) * 100;
        let fixedValue = totalPercentage.toFixed(2);
        showingInTheGraph(fixedValue);
    } else {
        alert("Enter the Input value Less than Max value");
    }
}

inputValueEl.addEventListener("change", function() {
    inputValue = parseInt(inputValueEl.value);
    findTotalPercentage();
});

maxValueEl.addEventListener("change", function() {
    maxValue = parseInt(maxValueEl.value);
    findTotalPercentage();
});

findTotalPercentage();