const chooseLocation = (payload) => {
    return {
        type: 'CHOOSE_LOCATION',
        payload
    };
};

export default chooseLocation;