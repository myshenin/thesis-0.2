const inputOutputSwitcher = (state = true, action) => {
    switch(action.type) {
        case 'INPUT_OUTPUT_SWITCH': {
            state = Object.assign(action.payload, {
                _input: ((parseInt(action.payload.width) < 768) || (action.payload.mode === 'INPUT')),
                _output: ((parseInt(action.payload.width) < 768) || (action.payload.mode === 'OUTPUT')),
            });
        } break;
    }
    return state;
};

export default inputOutputSwitcher;