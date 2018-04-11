const axios = require('axios');

const getData = (payload) => {
    return {
        type: 'GET_DATA',
        payload: axios.post('https://vfurc2tlyg.execute-api.eu-central-1.amazonaws.com/dev/result', payload)
    };
};

export default getData;