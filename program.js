class Weather {
    constructor(parameters) {
        this.temperature = 0;
        this.condition = "";
        this.cloudiness = 0;
        this.windspeed = 0;
    }
    updateWeather() {
        this.temperature = Math.floor(Math.random() * 50) - 10;
        this.cloudiness = Math.floor(Math.random() * 100);
        this.windspeed = Math.floor(Math.random() * 100);
        if (this.temperature <= 0) {
            this.condition = ["snow"];
        } else {
            let rand = Math.floor(Math.random() * 2);
                if (rand <= 0.5) {
                this.condition = ["rain",];
            }else{
                this.condition = ["clear"];
            }
        }
    }
}

let interval = setInterval(() => {
    let weather = new Weather();
    weather.updateWeather();
    document.getElementById("temperature-value").textContent = weather.temperature;
    document.getElementById("condition-value").textContent = weather.condition;
    document.getElementById("cloudiness-value").textContent = weather.cloudiness;
    document.getElementById("windspeed-value").textContent = weather.windspeed;
}, 3000);

function createRainElement() {
    const rain = document.createElement("div");
    rain.classList.add("rain");
    rain.innerText = "💧"
    rain.style.left = `${Math.random() * 100}vw`
    rain.style.animationDuration = `${Math.random() * 1 + 2}s`
    document.getElementById("rain-animation").appendChild(rain);
}

function createSnowElement() {
    const rain = document.createElement("div");
    rain.classList.add("snow");
    rain.innerText = "❄️"
    rain.style.left = `${Math.random() * 100}vw`
    rain.style.animationDuration = `${Math.random() * 1 + 2}s`
    document.getElementById("snow-animation").appendChild(snow);
}
createRainElement();

createSnowElement();
updateWeather();
setInterval(() => {
    createRainElement();
}, 10);

