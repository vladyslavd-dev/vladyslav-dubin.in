import { useState } from 'react';

export function useFeedbackForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverMessage, setServerMessage] = useState('');

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = true;
    if (!formData.message.trim()) newErrors.message = true;
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/form.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData),
      });

      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '', honeypot: '' });
        setServerMessage('');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return { formData, errors, isSuccess, isSubmitting, serverMessage, handleChange, handleSubmit };
}
