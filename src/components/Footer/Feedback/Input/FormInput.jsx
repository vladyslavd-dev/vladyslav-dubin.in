import classes from '../Feedback.module.scss';

export const FormInput = ({ id, name, type = "text", placeholder, value, onChange, error, hiddenLabel }) => (
    <>
        <label htmlFor={id} className={hiddenLabel ? classes.visuallyHidden : ''}>{placeholder}</label>
        <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={error ? classes.error : ''}
            aria-invalid={error ? 'true' : 'false'}
        />
    </>
);

export const FormTextarea = ({ id, name, placeholder, value, onChange, error, hiddenLabel }) => (
    <>
        <label htmlFor={id} className={hiddenLabel ? classes.visuallyHidden : ''}>
            {placeholder}
        </label>
        <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={error ? classes.error : ''}
            aria-invalid={error ? 'true' : 'false'}
        />
    </>
);
