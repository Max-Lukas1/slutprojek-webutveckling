function init()
{
    const form = document.querySelector("form");

    form.addEventListener("submit",  event=>{
        getForm(form);
        event.preventDefault();
    })


}
window.onload = init;

function getForm(form){
    const age = form.elements.age.value;
    const intensity = form.elements.intensity.value;

    let maxHeartRate = 220-age;
    let result;

    if (intensity === 'low')
    {
        result = maxHeartRate*0.5;
    }
    else if (intensity === 'moderate')
    {
        result = maxHeartRate*0.75;
    }
    else if (intensity === 'high')
    {
        result = maxHeartRate*0.85;
    }

    form.elements.result.value = result;
   
}