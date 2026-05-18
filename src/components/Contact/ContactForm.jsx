import React, { useState } from 'react';
import { Box, Typography, Grid, Snackbar, Alert } from '@mui/material';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton';

const ContactForm = ({ formHeader, formPlaceholders }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName) tempErrors.fullName = 'Full Name is required';
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.mobile) {
      tempErrors.mobile = 'Mobile Number is required';
    } else if (!/^\d{10,15}$/.test(formData.mobile)) {
      tempErrors.mobile = 'Mobile Number is invalid (10-15 digits)';
    }
    if (!formData.subject) tempErrors.subject = 'Subject is required';
    if (!formData.message) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        // Reset form
        setFormData({
          fullName: '',
          company: '',
          email: '',
          mobile: '',
          subject: '',
          message: '',
        });
      }, 1500);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        backgroundColor: '#F9FAFB',
        borderRadius: '20px',
        p: { xs: 3, md: 5 },
        width: '100%',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: '24px', md: '28px' },
          fontWeight: 700,
          color: '#1A1A1A',
          mb: 4,
          lineHeight: 1.3,
          fontFamily: "'Inter', sans-serif",
          whiteSpace: 'pre-line',
        }}
      >
        {formHeader}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormInput
            name="fullName"
            label="Full Name"
            placeholder={formPlaceholders?.fullName || 'John Doe'}
            value={formData.fullName}
            onChange={handleChange}
            error={!!errors.fullName}
            helperText={errors.fullName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormInput
            name="company"
            label="Company"
            placeholder={formPlaceholders?.company || 'Your Company'}
            value={formData.company}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormInput
            name="email"
            label="Email"
            placeholder={formPlaceholders?.email || 'john@example.com'}
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormInput
            name="mobile"
            label="Mobile No"
            placeholder={formPlaceholders?.mobile || '1234567890'}
            value={formData.mobile}
            onChange={handleChange}
            error={!!errors.mobile}
            helperText={errors.mobile}
          />
        </Grid>

        <Grid item xs={12}>
          <FormInput
            name="subject"
            label="Subject"
            placeholder={formPlaceholders?.subject || 'How can we help?'}
            value={formData.subject}
            onChange={handleChange}
            error={!!errors.subject}
            helperText={errors.subject}
          />
        </Grid>

        <Grid item xs={12}>
          <FormInput
            name="message"
            label="Message"
            placeholder={formPlaceholders?.message || 'Write your message here...'}
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            error={!!errors.message}
            helperText={errors.message}
          />
        </Grid>

        <Grid item xs={12} sx={{ mt: 2, display: 'flex', justifyContent: 'flex-start' }}>
          <SubmitButton loading={loading} onClick={handleSubmit}>
            Send Enquiry
          </SubmitButton>
        </Grid>
      </Grid>

      <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
          Your message has been sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
