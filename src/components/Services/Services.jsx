import { getServices, getTechnologies } from "./data/data";
import serviceSection1 from "@/assets/img/serviceSection1.webp";

import { useSelector } from "react-redux";

import classes from "./Services.module.scss";

const Services = ({ text }) => {
    const currentLanguage = useSelector(state => state.language.currentLanguage)

    return (
        <section>
            <div className={classes.services} id="services">
                <h2>{text.services.h2}</h2>
                <div className={classes.content}>
                    <p>
                        {text.services.textsection[0]}
                        <strong>{text.services.textsection[1]}</strong>
                        {text.services.textsection[2]}
                        <strong>{text.services.textsection[3]}</strong>
                        {text.services.textsection[4]}
                        <strong>{text.services.textsection[5]}</strong>
                    </p>
                    <div className={classes.servicesContainer}>
                        {getServices(currentLanguage)}
                    </div>
                </div>
            </div>
            <div className={classes.technologies} id="stack">
                <h2>{text.technologies.h2[0]}<wbr></wbr>{text.technologies.h2[1]}</h2>
                <div className={classes.technologiesContainer}>
                    {getTechnologies(currentLanguage)}
                </div>
                <img
                    className={classes.serviceImage}
                    src={serviceSection1}
                    alt="Airplane at VDNKh in Kyiv"
                    loading="lazy"
                />
            </div>
        </section>
    );
};

export default Services;
