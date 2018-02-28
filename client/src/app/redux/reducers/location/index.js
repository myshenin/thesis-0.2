const location = (state = {lat: -34.397, lng: 150.644}, action) => {
    switch (action.type) {
        case 'CHOOSE_LOCATION':
            state = action.payload;
            break;
    }
    return state;
};

export default location;