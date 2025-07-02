import Button from "../../Button/Button";

import classes from "./Case.module.scss";

import foil from "../../../assets/img/foil.webp";

const Case = ({ name, link, imgName, stack, onMouseMove, onMouseLeave, isList, buttonText }) => {
    const caseStack = stack.map((technology, index) => {
        return <Button key={index} text={technology} color="white" />;
    });

    const caseClasses = isList ? `${classes.container} ${classes.list}` : classes.container

    return (
        <a target="_blanc" href={link} className={caseClasses} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
            <div className={classes.foilContainer}>
                <img
                    className={classes.caseImage}
                    src={`/cases/${imgName}.webp`}
                    loading="lazy"
                    alt={name}
                />
                <img loading="lazy" className={classes.foilImage} src={foil} role="presentation" />
            </div>
            <footer className={classes.footer}>
                <h2>{name}</h2>
                <div className={classes.technologies}>{caseStack}</div>
                <Button text={buttonText.props.text} color="dark" />
            </footer>
        </a>
    );
};

export default Case;
