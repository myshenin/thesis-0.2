const tabs = (state = [true, false, false], action) => {
    switch (action.type) {
        case 'CHANGE_TAB':
            state = action.payload;
            break;
    }
    return state;
};

export default tabs;