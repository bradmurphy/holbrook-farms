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
        case 'UPDATE_FORM':
            return {
                ...state,
                ...action.payload
            };
        case 'SEND_FORM':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default reducer;