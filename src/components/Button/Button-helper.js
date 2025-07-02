export const getButtonColor = (color = 'gray', classes) => {
    switch (color) {
        case 'dark':
            return ` ${classes.dark}`;
        case 'white':
            return ` ${classes.white}`;
        case 'transparent':
            return ` ${classes.transparent}`;
        case 'gray':
            return ` ${classes.gray}`;
        case 'grayDark':
            return ` ${classes.grayDark}`;
        default:
            return '';
    }
}