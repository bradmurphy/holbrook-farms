const reducer = (state, action) => {
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
        case 'THUMB_MOBILE':
            return {
                ...state,
                thumbnailPos: 'bottom'
            };
        case 'THUMB_DESKTOP':
            return {
                ...state,
                thumbnailPos: 'left'
            };
        default:
            return state;
    }
};

export default reducer;