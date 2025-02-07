
    let currentLight = 'red';
    let greenDuration = 5000;
    let yellowDuration = 2000;
    let redDuration = 4000;



function trafficLightDisplay(){
    console.log(currentLight + "light is On");

}

function lightChange(){
    if(currentLight === "red"){
        currentLight = "green";
        setTimeout(lightChange, greenDuration);
    } else if (currentLight === "green") {
        currentLight = "yellow";
        setTimeout(lightChange ,yellowDuration);
    } else if (currentLight === "yellow") {
        currentLight = "red";
        setTimeout(lightChange , redDuration);
    }

    trafficLightDisplay()
}

trafficLightDisplay();

setTimeout(lightChange , redDuration)


