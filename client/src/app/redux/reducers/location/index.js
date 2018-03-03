const location = (state = {lat: 52.52, lng: 13.405}, action) => {
    switch (action.type) {
        case 'CHOOSE_LOCATION':
            state = action.payload;
            break;
    }
    return state;
};

export default location;