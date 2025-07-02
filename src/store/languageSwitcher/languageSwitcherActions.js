export const openMenu = () => {
    return {
        type: "OPEN-MENU",
    };
};
export const closeMenu = () => {
    return {
        type: "CLOSE-MENU",
    };
};
export const toggleMenu = () => {
    return {
        type: "TOGGLE-MENU",
    };
};
export const changeLanguage = (language) => {
    return {
        type: "CHANGE-LANGUAGE",
        language
    };
};
