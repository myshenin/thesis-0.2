const weather = (state = [], action) => {
    switch(action.type) {
        case 'GET_DATA_FULFILLED': {
            state = action.payload.data.map(period => period.map(point => ({x: point[0], y: point[1]})));
        } break;
    }
    return state;
};

export default weather;