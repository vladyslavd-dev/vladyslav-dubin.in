import Icon from "@/components/Icon";

import classes from "./TextSection.module.scss";

import textSection1 from "@/assets/img/textSection1.webp";
import gennadiy from "@/assets/img/genadiy.webp";

const TextSection = ({ text }) => {
    return (
        <section>
            <div className={classes.about}>
                <img src={textSection1} alt="Vladyslav Dubinin" />
                <div className="commonContainer">
                    <h2>{text.h2}</h2>
                    <div className={classes.textSmall}>
                        <div>
                            <Icon type="pigeon" />
                            <p className={classes.text}>
                                {text.about[0]}
                            </p>
                        </div>
                        <div>
                            <Icon type="swords" />
                            <p className={classes.text}>
                                {text.about[1]}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.gennadiy}>
                <img loading="lazy" src={gennadiy} alt="The dog Gennadiy" />
                <div className={classes.gennadiyText}>
                    <p className={classes.title}>
                        {text.gennadiy[0]}
                    </p>
                    <p className={classes.title}>
                        {text.gennadiy[1]}
                    </p>
                    <p className={classes.title}>
                        {text.gennadiy[2]}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TextSection;
