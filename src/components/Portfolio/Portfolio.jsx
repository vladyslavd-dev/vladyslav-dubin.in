import Case from "./Case";
import Icon from "@/components/Icon";
import Button from "@/components/Button/Button";
import { useState } from "react";
import CustomCursor from "@/components/customCursor/CustomCursor";

import classes from "./Portfolio.module.scss";

import stillCoding from "@/assets/img/stillCoding.webp";

import data from "./data";

const Portfolio = ({ text, currentLanguage }) => {
    const [cursorData, setCursorData] = useState({
        x: 0,
        y: 0,
        type: null,
        visible: false,
    });

    const [isList, setIsList] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleList = () => {
        setIsAnimating(true);

        setTimeout(() => {
            setIsList((prev) => !prev);
        }, 500);

        setTimeout(() => {
            setIsAnimating(false);
        }, 1000);
    };

    const buttonText = isList
        ? text.portfolio.types[1]
        : text.portfolio.types[0];

    const handleMouseMove = (e, type) => {
        setCursorData({
            x: e.clientX,
            y: e.clientY,
            type,
            visible: true,
            isList,
        });
    };

    const handleMouseLeave = () => {
        setCursorData((prev) => ({ ...prev, visible: false }));
    };


    const cases = Object.values(data[currentLanguage]).map((value, index) => {
        return (
            <Case
                name={value.name}
                type={value.type}
                link={value.link}
                imgName={value.imgName}
                stack={value.stack}
                key={index}
                isList={isList ? true : false}
                onMouseMove={(e) => handleMouseMove(e, value.type)}
                onMouseLeave={handleMouseLeave}
                buttonText={text.portfolio.button}
            />
        );
    });

    const portfolioClasses = isList ? `${classes.portfolio} ${classes.list}` : classes.portfolio;

    return (
        <section>
            <div className={classes.stillCoding}>
                <div className="commonContainer">
                    <header className={classes.header}>
                        <h2>{text.coding.h2}</h2>
                        <p>
                            {text.coding.subtitle[0]}
                            <strong>{text.coding.subtitle[1]}</strong>
                            {text.coding.subtitle[2]}
                            <strong>{text.coding.subtitle[3]}</strong>
                            {text.coding.subtitle[4]}
                        </p>
                    </header>
                    <div className={classes.mainText}>
                        <div>
                            <Icon type="flower" />
                            <p>{text.coding.textsection[0]}</p>
                        </div>
                        <div>
                            <Icon type="cicada" />
                            <p>{text.coding.textsection[1]}</p>
                        </div>
                    </div>
                </div>
                <img loading="lazy" src={stillCoding} alt="Squidward Q. Tentacles" />
            </div>
            <div className={portfolioClasses} id="portfolio">
                <header className={classes.header}>
                    <h2>{text.portfolio.h2}</h2>
                    <Button
                        text={buttonText}
                        color="grayDark"
                        onClick={toggleList}
                    />
                </header>
                <div
                    className={`${classes.worksGrid} ${isAnimating ? classes.animateBlur : ''}`}
                >
                    {cases}
                </div>
            </div>
            <CustomCursor {...cursorData} />
        </section>
    );
};

export default Portfolio;
