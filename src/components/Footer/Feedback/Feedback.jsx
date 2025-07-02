import { useFeedbackForm } from './FeedbackHelper';
import { FormInput, FormTextarea } from './input/FormInput';
import FormSuccess from './FormSuccess';
import classes from './Feedback.module.scss';
import Button from '@/components/Button/Button';
import Icon from '@/components/Icon';

const Feedback = ({ text, lenis }) => {
  const {
    formData, errors, isSuccess, isSubmitting,
    serverMessage, handleChange, handleSubmit
  } = useFeedbackForm();

  return (
    <form className={classes.form} onSubmit={handleSubmit} noValidate>
      <Icon type="Chamomile" />
      <h3>{text.contact.form.title}</h3>

      <FormInput
        id="name"
        name="name"
        placeholder={text.contact.form.name}
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        hiddenLabel
      />

      <FormInput
        id="email"
        name="email"
        type="email"
        placeholder={text.contact.form.email}
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        hiddenLabel
      />

      <FormTextarea
        id="message"
        name="message"
        placeholder={text.contact.form.message}
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        hiddenLabel
      />

      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ display: 'none' }}
        autoComplete="off"
        tabIndex={-1}
      />

      <Button
        text={isSubmitting ? text.contact.succeccForm.waiting : text.contact.form.button}
        color="gray"
        disabled={isSubmitting}
      />

      {serverMessage && <p className={classes.serverError}>{serverMessage}</p>}

      <FormSuccess text={text.contact.succeccForm} lenis={lenis} isVisible={isSuccess} />
    </form>
  );
};

export default Feedback;
