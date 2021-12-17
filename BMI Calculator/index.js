


// Get the variables
const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");

const calculateButton = document.getElementById("btn-calculate");
const resetButton = document.getElementById("btn-reset");

const result = document.getElementById("dynamic__bmi");
const message = document.getElementById("bmi_text");


// Set Event
calculateButton.addEventListener('click', invalidHandler)
resetButton.addEventListener('click', resetBMI)





function calculateBMI() {
    console.log('Calcuted')
    let height, weight, bmi


    height = Number(heightInput.value)
    weight = Number(weightInput.value)
    bmi = weight / (height * 0.0254 *2)
    
    result.textContent = bmi.toFixed(2)
    
    message.textContent = showMessage(bmi)
    
}


function showMessage(bmiValue) {
    if(bmiValue < 16) {
        return 'You are Severe Thin'

    } else if(bmiValue >= 16 && bmiValue <= 17) {
        return 'You are Moderate Thin'

    } else if(bmiValue > 17 && bmiValue <= 18.5) {
        return 'You are Mid Thin'
    
    } else if(bmiValue > 18.5 && bmiValue <= 20) {
        return 'You are Normal'

    } else if(bmiValue > 20 && bmiValue <= 22) {
        return 'You are perfect'

    } else if (bmiValue > 22 && bmiValue <= 25) {
        return 'You are Overweight'
    }
}

function resetBMI() {
    console.log('Reset')
    
    heightInput.value =''
    weightInput.value =''
    result.textContent ='_______'
    message.textContent =''
}


function invalidHandler() {

    if (Number(heightInput.value) && Number(weightInput.value)) {
        calculateBMI()

    } else {
        alert('Please provide valid input')
        resetBMI()
    }
}





