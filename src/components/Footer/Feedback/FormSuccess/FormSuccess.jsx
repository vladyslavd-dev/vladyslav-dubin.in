import classes from '../Feedback.module.scss';
import Icon from '@/components/Icon';
import Button from '@/components/Button/Button';

const FormSuccess = ({ text, lenis, isVisible }) => {
  return (
    <div
      className={classes.success}
      style={{
        pointerEvents: isVisible ? 'auto' : 'none',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }}
    >
      <Icon type="musonry" />
      <h3>{text.title}</h3>
      <p>{text.text}</p>
      <Button
        text={text.button.props.text}
        color="dark"
        onClick={() => lenis.scrollTo("#portfolio", { duration: 2 })}
      />
    </div>
  );
};

export default FormSuccess;
