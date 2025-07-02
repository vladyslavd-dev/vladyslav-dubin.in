import classes from "./Service.module.scss";

import Icon from "@/components/Icon";

const Service = (props) => {
    return (
        <article className={classes.service}>
            <Icon type={props.iconName} />
            <h3>{props.name}</h3>
            <div className={classes.stackContainer}>{props.stack}</div>
        </article>
    );
};

export default Service;
