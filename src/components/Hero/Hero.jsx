import Watches from "@/components/Hero/Watches";
import heroPhoto from "@/assets/img/heroPhoto.webp";
import classes from "./Hero.module.scss";

const Hero = ({ text, visible }) => {
    return (
        <section className={`${classes.hero} heroSection ${visible ? classes.active : ''}`}>
            <div className={classes.container}>
                <p className={classes.text}>{text["text"]}</p>
                <Watches text={text["watches"]} />
                <img src={heroPhoto} alt="Vladyslav Dubinin" loading="lazy" />
            </div>
        </section>
    );
};

export default Hero;
