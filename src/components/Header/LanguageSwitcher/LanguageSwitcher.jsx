import classes from "./LanguageSwitcher.module.scss";

import { useSelector, useDispatch } from "react-redux";
import {
    closeMenu,
} from "@/store/languageSwitcher/languageSwitcherActions";
import { getLanguages } from "./LanguageSwitcherHelper";

const LanguageSwitcher = () => {
    const dispatch = useDispatch();
    const isHovered = useSelector((state) => state.language.isOpen);

    const switcherContainerClasses = isHovered
        ? `${classes.switcher} ${classes.active}`
        : classes.switcher;

    const languagesRaw = ["ukr", "eng", "czk", "rus"];
    const currentLanguage = useSelector(
        (state) => state.language.currentLanguage,
    );

    const languages = [
        currentLanguage,
        ...languagesRaw.filter((lang) => lang !== currentLanguage),
    ];

    const languageButtons = getLanguages(languages, dispatch);

    return (
        <div
            onMouseLeave={() => dispatch(closeMenu())}
            className={switcherContainerClasses}
        >
            {languageButtons}
        </div>
    );
};

export default LanguageSwitcher;
