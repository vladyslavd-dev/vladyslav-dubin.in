import { useState, useEffect, useRef } from "react";
import classes from "./Screen.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { updateScreen } from "../Key/KeyHelper";

const Screen = () => {
    const footerScreen = useSelector((state) => state.screen.footerScreen);

    const [animate, setAnimate] = useState(false);
    const [displayedRows, setDisplayedRows] = useState(footerScreen);

    const prevScreen = useRef(footerScreen);

    useEffect(() => {
        if (prevScreen.current !== footerScreen) {
            setAnimate(true);
            const timer = setTimeout(() => {
                setDisplayedRows(footerScreen);
                setAnimate(false);
                prevScreen.current = footerScreen;
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [footerScreen]);

    const dispatch = useDispatch();
    const handleMouseClick = () => {
        updateScreen(dispatch);
    };

    return (
        <div
            onClick={handleMouseClick}
            className={`${classes.screen} ${animate ? classes.animate : ""}`}
            onMouseEnter={handleMouseClick}
        >
            <div className={classes.container}>
                {displayedRows.map((row, index) => (
                    <div key={index} className={classes.row}>
                        {row}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Screen;
