import classes from './Button.module.scss';
import { getButtonColor } from './Button-helper'

const Button = (props) => {
    const buttonClassName = classes.button + getButtonColor(props.color, classes);
    const isDisabled = props.color === "white";

    return (
        <button onClick={props.onClick}
            onMouseEnter={props.onMouseEnter}
            onTouchEnd={props.onTouchEnd}
            className={buttonClassName} disabled={isDisabled}>{props.text}</button>
    )
}

export default Button;