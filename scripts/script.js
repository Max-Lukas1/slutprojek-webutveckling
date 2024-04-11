/*document.addEventListener("DOMContentLoaded", init);

{
    const form = document.getElementById('healthForm');
    const ageInput = document.getElementById('age');
    const pulseInput = document.getElementById('pulse');
    const IntesityInput = document.getElementById('intensity')
    
    form.addEventListener('submit', function(event) {
        let valid = true;
    
        if (ageInput.value.trim() === '' || parseInt(ageInput.value) < 1) {
            setErrorFor(ageInput, 'Snälla skriv en giltig ålder');
            valid = false;function init()
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

    function calculateHeartRate()
    {
        var age = parseInt(document.getElementById('age').value);
        var intensity = document.getElementById('intensity').value;

        var maxHeartRate = 220-age;

        if (intensity === 'low')
        {
            document.getElementById('result').value = maxHeartRate*0.5;
        }
        if (intensity === 'moderate')
        {
            document.getElementById('result').value = maxHeartRate*0.75;
        }
        if (intensity === 'high')
        {
            document.getElementById('result').value = maxHeartRate*0.85;
        }

        
        
    }
/*}*/

