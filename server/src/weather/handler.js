const request = require('request-promise');

module.exports.main = (event, context, callback) => {
    const {lat, lng, start, end} = event;
    request(`https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=${process.env.WEATHER_API_KEY}&format=json&q=${lat},${lng}&date=${start}&enddate=${end}`)
        .then(response => {
            const data = JSON.parse(response)
                .data
                .weather
                .map(day => {
                    return day.hourly.map(hour => {
                        return [
                            day.totalSnow_cm,
                            day.sunHour,
                            day.uvIndex,

                            hour.time,
                            hour.tempC,
                            hour.windspeedKmph,
                            hour.winddirDegree,
                            hour.humidity,
                            hour.visibility,
                            hour.pressure,
                            hour.cloudcover
                        ];
                    });
                });
            callback(null, data);
        })
        .catch((error) => {
            callback(error);
        });
};