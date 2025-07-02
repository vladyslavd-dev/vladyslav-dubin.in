import { useEffect, useRef } from "react";
import classes from "./Cell.module.scss";

const Section = ({ char }) => {
    const sectionRef = useRef(null);
    const topRef = useRef(null);
    const bottomRef = useRef(null);
    const backRef = useRef(null);
    const backBottomRef = useRef(null);
    const prevChar = useRef(null);

    const isLetter = /[a-zA-Zа-яА-Я]/.test(char);
    const sectionClass = `${classes.section} ${isLetter ? classes.letter : ""
        } ${classes.flip}`;

    useEffect(() => {
        if (char !== prevChar.current) {
            if (prevChar.current !== null) {
                backRef.current.setAttribute("data-value", prevChar.current);
                bottomRef.current.setAttribute("data-value", prevChar.current);
            }

            topRef.current.textContent = char;
            backBottomRef.current.setAttribute("data-value", char);

            sectionRef.current.classList.remove(classes.flip);
            void sectionRef.current.offsetWidth;
            sectionRef.current.classList.add(classes.flip);

            prevChar.current = char;
        }
    }, [char]);

    return (
        <div className={sectionClass} ref={sectionRef}>
            <div className={classes.card}>
                <div className={classes.cardTop} ref={topRef}></div>
                <div className={classes.cardBottom} ref={bottomRef}></div>
                <div className={classes.cardBack} ref={backRef}>
                    <div
                        className={classes.cardBottom}
                        ref={backBottomRef}
                    ></div>
                </div>
            </div>
        </div>
    );
};

const Cell = ({ content = [], timeFormat = false }) => {
    const timeClass = timeFormat ? classes.timeFormat : "";

    return (
        <div className={`${classes.cell} ${timeClass}`}>
            {content.map((char, idx) => (
                <Section key={idx} char={char} />
            ))}
        </div>
    );
};

export default Cell;
