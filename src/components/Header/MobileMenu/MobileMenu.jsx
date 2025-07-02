import classes from "./MobileMenu.module.scss";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import Button from "@/components/Button/Button";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

import { useSelector, useDispatch } from "react-redux";
import { closeMenu } from "@/store/menu/menuActions";

const MobileMenu = ({ text, lenis }) => {
    const isActive = useSelector((state) => state.menu.isOpen);
    const dispatch = useDispatch();

    const handleLinkClick = () => {
        lenis.start();
        dispatch(closeMenu());
    }

    const navClasses = isActive
        ? `${classes.container} ${classes.active}`
        : classes.container;

    return (
        <div className={navClasses}>
            <nav className={classes.mobileMenu}>
                <Button
                    onClick={handleLinkClick}
                    text={text[0]}
                    color="transparent"
                />
                <HeaderMenu isMobile={true} text={text} />
                <LanguageSwitcher />
            </nav>
        </div>
    );
};

export default MobileMenu;
