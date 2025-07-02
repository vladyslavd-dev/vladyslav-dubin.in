let storageLanguage = localStorage.getItem("language");

if (!storageLanguage) {
    const browserLang = navigator.language || navigator.userLanguage;
    const shortLang = browserLang.toLowerCase().slice(0, 2);

    switch (shortLang) {
        case "en":
            storageLanguage = "eng";
            break;
        case "ru":
            storageLanguage = "rus";
            break;
        case "uk":
            storageLanguage = "ukr";
            break;
        case "cs":
            storageLanguage = "czk";
            break;
        default:
            storageLanguage = "eng";
    }

    localStorage.setItem("language", storageLanguage);
}

const initialState = {
    isOpen: false,
    currentLanguage: storageLanguage,
};

const languageSwitcherReducer = (state = initialState, action) => {
    switch (action.type) {
        case "OPEN-MENU":
            if (state.isOpen) return state;
            return { ...state, isOpen: true };
        case "CLOSE-MENU":
            if (!state.isOpen) return state;
            return { ...state, isOpen: false };
        case "TOGGLE-MENU":
            return { ...state, isOpen: !state.isOpen };
        case "CHANGE-LANGUAGE":
            localStorage.setItem("language", action.language);
            return { ...state, isOpen: !state.isOpen, currentLanguage: action.language };
        default:
            return state;
    }
};

export default languageSwitcherReducer;
