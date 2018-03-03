const periods = (state = [{start: null, end: null}], action) => {
    switch (action.type) {
        case 'SET_START_DATE': {
            let newState = [...state];
            newState[action.payload.key].start = action.payload.date;
            state = newState;
        }
            break;

        case 'SET_END_DATE': {
            if (action.payload.key === state.length - 1) {
                let newState = [...state];
                newState[action.payload.key].end = action.payload.date;
                newState.push({
                    start: null,
                    end: null
                });
                state = newState;
            } else {
                let newState = [...state];
                newState[action.payload.key].end = action.payload.date;
                state = newState;
            }
        }
            break;
    }
    return state;
};

export default periods;