export const change = (payload) => {
    return {
        type: "CHANGE",
        payload,
    };
};

export const reload = () => {
    return {
        type: "RELOAD"
    };
};
