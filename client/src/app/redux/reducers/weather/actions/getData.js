const axios = require('axios');

const getData = (payload) => {
    return {
        type: 'GET_DATA',
        payload: axios.post('https://efbfsoii0d.execute-api.eu-central-1.amazonaws.com/prod/weather', payload)
    };
};

export default getData;