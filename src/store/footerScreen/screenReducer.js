import data from "@/components/footer/KeyBoard/Screen/data.json";

const initialState = {
    footerScreen: [data[0], data[1], data[2]],
};

const ScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE": {
            return {
                ...state,
                footerScreen: [
                    state.footerScreen[1],
                    state.footerScreen[2],
                    action.payload,
                ],
            };
        }
        case "RELOAD": {
            return {
                ...state,
                footerScreen: [
                    state.footerScreen[1],
                    data[0],
                    state.footerScreen[2],
                ],
            };
        }
        default:
            return state;
    }
};

export default ScreenReducer;
