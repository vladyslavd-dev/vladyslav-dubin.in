import React from "react";

export const splitText = (text, classes) => {
    const words = text.split(" ");

    if (words.length <= 2) {
        return (
            <span className={classes.wordNowrap}>
                {text.split("").map((char, index) => (
                    <span
                        style={{ transitionDelay: `${index * 50 + 400}ms` }}
                        key={index}
                        className={`${classes.word} ${classes.title}`}
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </span>
        );
    } else {
        return words.map((word, index) => (
            <React.Fragment key={index}>
                <span
                    style={{ transitionDelay: `${index * 10 + 400}ms` }}
                    className={classes.word}
                >
                    {word}
                </span>{" "}
            </React.Fragment> 
        ));
    }
};