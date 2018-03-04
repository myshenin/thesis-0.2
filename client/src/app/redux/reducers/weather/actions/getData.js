const axios = require('axios');

const getData = (payload) => {
    return {
        type: 'GET_DATA',
        payload: axios.post('https://hvwpq7md22.execute-api.eu-central-1.amazonaws.com/dev/weather', payload)
    };
};

export default getData;