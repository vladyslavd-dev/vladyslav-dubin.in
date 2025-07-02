import { useRef, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import Key from "./Key/Key";
import Screen from "./Screen/Screen";
import classes from "./Keyboard.module.scss";
import keyboard from "@/assets/img/keyboard.webp";
import data from "./data.json";

import { reload } from "@/store/footerScreen/screenActions";

const Keyboard = ({ lenis }) => {
    const dispatch = useDispatch();
    const containerRef = useRef(null);
    const timeoutRef = useRef(null);

    const handleMouseLeave = useCallback(() => {
        timeoutRef.current = setTimeout(() => {
            dispatch(reload());

            timeoutRef.current = setTimeout(() => {
                dispatch(reload());
            }, 400);

        }, 2000);
    }, [dispatch]);

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.addEventListener("mouseleave", handleMouseLeave);
        container.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            container.removeEventListener("mouseleave", handleMouseLeave);
            container.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [handleMouseLeave]);

    const keys = Object.values(data).map((key) => (
        <Key
            key={key.name}
            name={key.name}
            link={key.link}
            size={key.size}
            lenis={lenis}
        />
    ));

    return (
        <div className={classes.container} ref={containerRef}>
            <img loading="lazy" src={keyboard} alt="keyboard" />
            <Screen />
            <div className={classes.keysContainer}>{keys}</div>
        </div>
    );
};

export default Keyboard;
