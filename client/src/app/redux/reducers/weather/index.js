const weather = (state = [], action) => {
    switch(action.type) {
        case 'GET_DATA_FULFILLED': {
            state = action.payload.data;
        } break;
    }
    return state;
};

export default weather;