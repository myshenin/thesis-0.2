const request = require('request-promise');

module.exports.main = (event, context, callback) => {
    const {lat, lng, start, end} = event;
    request(`https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=${process.env.WEATHER_API_KEY}&format=json&q=${lat},${lng}&date=${start}&enddate=${end}`)
        .then(_response => {
            const data = JSON.parse(_response).data
                .weather
                .map(day => day.hourly
                    .map(hour => [
                        parseFloat(hour.tempC),
                        parseFloat(hour.windspeedKmph),
                        parseFloat(hour.winddirDegree),
                        parseFloat(hour.humidity),
                        parseFloat(hour.visibility),
                        parseFloat(hour.pressure),
                        parseFloat(hour.cloudcover),
                    ])
                )
                .reduce((accumulator, current) => {
                    return [...accumulator, ...current];
                }, []);

            callback(null, data);
        })
        .catch((error) => {
            callback(error);
        });
};