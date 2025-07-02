import { useKeyLogic } from "./KeyHelper";
import classes from "./Key.module.scss";
import keySmall from "@/assets/img/keySmall.webp";
import keyBig from "@/assets/img/keyBig.webp";

const Key = (props) => {
  const { isClicked, handleClick, handleHover } = useKeyLogic(props);
  const imageLink = props.size === "small" ? keySmall : keyBig;

  const keyClass = `${classes.key} ${classes[props.size]} ${isClicked ? classes.clicked : ""}`;

  return (
    <a
      onClick={handleClick}
      onMouseEnter={handleHover}
      className={keyClass}
      href={props.link}
    >
      <span>{props.name}</span>
      <img src={imageLink} alt={`Key ${props.name}`} />
    </a>
  );
};

export default Key;
