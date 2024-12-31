class Weather {
    constructor(parameters) {
        this.temperature = 0;
        this.condition = "";
        this.cloudiness = 0;
    }
    updateWeather() {
        this.temperature = Math.floor(Math.random() * 50) - 10;
        if (this.temperature <= 0) {
            this.condition = ["snow"];
        } else {
            this.condition = ["rain", "clear"];
        }
    }
}