document.addEventListener("DOMContentLoaded", init);

function init(){/*
    const form = document.getElementById('healthForm');
    const ageInput = document.getElementById('age');
    const pulseInput = document.getElementById('pulse');
    const IntesityInput = document.getElementById('intensity')
    
    form.addEventListener('submit', function(event) {
        let valid = true;
    
        if (ageInput.value.trim() === '' || parseInt(ageInput.value) < 1) {
            setErrorFor(ageInput, 'Snälla skriv en giltig ålder');
            valid = false;
        } else {
            setSuccessFor(ageInput);
        }
    
        if (pulseInput.value.trim() === '' || parseInt(pulseInput.value) < 1) {
            setErrorFor(pulseInput, 'Snälla skriv en giltig pulse');
            valid = false;
        } else {
            setSuccessFor(pulseInput);
        }
    
        if (!valid) {
            event.preventDefault();
        }
    
        if  (IntesityInput.value === 'Välj intensitet') {
          setErrorFor(IntesityInput, 'Snälla välja en tränings intesitet')
        }
    
    });
    
    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const errorMessage = formControl.querySelector('.error');
    
        formControl.className = 'error';
        errorMessage.innerText = message;
    }
    
    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = '';
    }*/

    function calculateHeartRate(){
        var age = document.getElementById("age").value;
        var age = intensity = document.getElementById("intensity").value;

        var maxHeartRate = 220-age
        var targetHeartrate = 0

        if (intensity === "low"){
        targetHeartrate = maxHeartRate * 0,5;
        }
        else if (intensity === "moderate"){
            targetHeartrate = maxHeartRate *0.,7;
        }
        else if (intensity === "high"){
            targetHeartrate = maxHeartRate *0.,85;
        }

        document.getElementById("result").innerHTML = "Din mål puls är: " + Math.round(targetHeartrate) + "bpm"
        
    }
}
