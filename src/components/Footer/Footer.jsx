import Icon from "@/components/Icon";
import Keyboard from "./Keyboard/Keyboard";
import Feedback from "./Feedback/Feedback"

import classes from "./Footer.module.scss";

import footerSection1 from "@/assets/img/footerSection1.webp";

const Footer = ({ text, lenis }) => {
    return (
        <section>
            <div className={classes.contactSection}>
                <img
                    src={footerSection1}
                    alt="Palace of Culture at VDNKh in Kyiv"
                    loading="lazy"
                />
                <div className="commonContainer" id="contact">
                    <h2>{text.contact.h2}</h2>
                    <Feedback text={text} lenis={lenis} />
                </div>
            </div>
            <footer className={classes.footer}>
                <div className={classes.info}>
                    <div className={classes.annotation}>
                        <Icon type="shuriken2" />
                        <h3>{text.footer.text.titles[0]}</h3>
                        <a
                            href="mailto:hello@vladyslav-dubin.in"
                            target="_blank"
                        >
                            hello@vladyslav-dubin.in
                        </a>
                    </div>
                    <div className={classes.annotation}>
                        <Icon type="crown" />
                        <h3>{text.footer.text.titles[1]}</h3>
                        <p>
                            {text.footer.text.subtitle}
                        </p>
                    </div>
                    <p className={classes.link}>{text.footer.text.footer[0]}</p>
                    <a className={classes.link} href="https://www.instagram.com/vadimpasishnyk/" target="_blank">
                        {text.footer.text.footer[1]}
                    </a>
                </div>
                <Keyboard lenis={lenis} />
            </footer>
        </section>
    );
};

export default Footer;
