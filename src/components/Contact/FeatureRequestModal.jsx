import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  Grid,
  Snackbar,
  Alert
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton';

const FeatureRequestModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    mobile: '',
    featureRequest: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.featureRequest) newErrors.featureRequest = 'Feature request is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        fullName: '',
        company: '',
        email: '',
        mobile: '',
        featureRequest: ''
      });
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 1500);
    }, 1500);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '20px',
            p: 2,
            backgroundColor: '#F9FAFB'
          }
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#1A1A1A', fontFamily: "'Inter', sans-serif" }}>
            Feature Request
          </Typography>
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormInput
                  label="Full Name"
                  name="fullName"
                  placeholder="Your Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  error={!!errors.fullName}
                  helperText={errors.fullName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormInput
                  label="Company"
                  name="company"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormInput
                  label="Email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormInput
                  label="Mobile No"
                  name="mobile"
                  placeholder="Your Mobile No"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormInput
                  label="Enter Your Feature Request"
                  name="featureRequest"
                  placeholder="Write Your Feature Request Here"
                  multiline
                  rows={4}
                  value={formData.featureRequest}
                  onChange={handleChange}
                  error={!!errors.featureRequest}
                  helperText={errors.featureRequest}
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 1 }}>
                <SubmitButton loading={loading} onClick={handleSubmit}>
                  Send Enquiry
                </SubmitButton>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>

      <Snackbar open={success} autoHideDuration={3000} onClose={() => setSuccess(false)}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Feature request submitted successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default FeatureRequestModal;
