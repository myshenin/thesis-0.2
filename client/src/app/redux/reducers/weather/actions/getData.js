const axios = require('axios');

const getData = (payload) => {
    return {
        type: 'GET_DATA',
        payload: axios.post('https://gpcsw6awq9.execute-api.eu-central-1.amazonaws.com/prod/', payload)
    };
};

export default getData;