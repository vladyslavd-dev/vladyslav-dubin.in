import Button from "@/components/Button/Button";
import {
    openMenu,
    changeLanguage,
} from "@/store/languageSwitcher/languageSwitcherActions";

export const getLanguages = (languages, dispatch) => {
    return languages.map((language, index) => {
        if (index === 0) {
            return (
                <Button
                    onMouseEnter={() => dispatch(openMenu())}
                    onTouchEnd={() => dispatch(toggleMenu())}
                    text={language}
                    color="grayDark"
                    key={index}
                />
            );
        } else {
            return (
                <Button
                    onClick={() => {
                        setTimeout(() => {
                            dispatch(changeLanguage(language));
                        }, 50);
                    }}
                    text={language}
                    color="grayDark"
                    key={index}
                />
            );
        }
    });
};