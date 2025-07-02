const initialState = {
    isOpen: false,
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_MENU":
            return { ...state, isOpen: !state.isOpen };
        case "OPEN_MENU":
            return { ...state, isOpen: true };
        case "CLOSE_MENU":
            return { ...state, isOpen: false };
        default:
            return state;
    }
};

export default menuReducer;
