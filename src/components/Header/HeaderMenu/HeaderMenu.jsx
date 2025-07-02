import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { closeMenu } from "@/store/menu/menuActions";

import classes from "./HeaderMenu.module.scss";

const HeaderMenu = ({ isMobile, text, lenis }) => {

  const dispatch = useDispatch();
  const navClasses = isMobile
    ? `${classes.menu} ${classes.mobile}`
    : classes.menu;


  useEffect(() => {
    const links = document.querySelectorAll(`.${classes.link}[href^="#"]`);

    const handleClick = (e) => {
      lenis.start();
      dispatch(closeMenu());
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);

      if (targetEl) {
        const top = targetEl.getBoundingClientRect().top + window.scrollY;
        lenis.scrollTo(top, { duration: 2 });
      }
    };

    links.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, [classes.link]);

  return (
    <nav className={navClasses}>
      <ul className={classes.menuList}>
        <li>
          <a href="#portfolio" className={classes.link}>{text[1]}</a>
        </li>
        <li>
          <a href="#services" className={classes.link}>{text[2]}</a>
        </li>
        <li>
          <a href="#stack" className={classes.link}>{text[3]}</a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderMenu;
