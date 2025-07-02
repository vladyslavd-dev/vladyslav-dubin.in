import HeaderMenu from "./HeaderMenu/HeaderMenu";
import Button from "@/components/Button/Button";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";

import classes from "./Header.module.scss";

import { useDispatch } from "react-redux";
import { openMenu } from "@/store/menu/menuActions";

const Header = ({ text, lenis }) => {
    const dispatch = useDispatch();

    const handleLinkClick = () => {
        lenis.scrollTo(0, {
            duration: 1,
            onComplete: () => {
                lenis.stop();
            }
        });
        dispatch(openMenu())
    }

    return (
        <header className={classes.header}>
            <div className={classes.showMobile}>
                <Button
                    onClick={handleLinkClick}
                    text="Menu"
                    color="transparent"
                />
            </div>
            <div className={classes.hideMobile}>
                <HeaderMenu text={text['menu']} lenis={lenis} />
            </div>
            <h1 className={classes.title}>Vladyslav–Dubinin</h1>
            <div className={classes.extraMenu}>
                <div className={classes.hideMobile}>
                    <LanguageSwitcher />
                </div>
                <Button onClick={() => lenis.scrollTo("#contact", { duration: 2 })} text="Contact" color="dark" />
            </div>
        </header>
    );
};

export default Header;
