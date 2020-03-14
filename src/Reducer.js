const Reducer = (state, action) => {
    switch (action.type) {
        case 'OPEN_MENU':
            return {
                ...state,
                menu: true
            };
        case 'CLOSE_MENU':
            return {
                ...state,
                menu: false
            };
        default:
            return state;
    }
};

export default Reducer;