const axios = require('axios');

const getData = (payload) => {
    return {
        type: 'GET_DATA',
        payload: axios.post('https://r1p98olugb.execute-api.eu-central-1.amazonaws.com/prod/weather', payload)
    };
};

export default getData;