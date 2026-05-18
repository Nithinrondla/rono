import React from 'react';
import { TextField, Typography, Box } from '@mui/material';

const FormInput = ({ label, placeholder, multiline, rows, value, onChange, error, helperText, name }) => {
  return (
    <Box sx={{ mb: 2 }}>
      {label && (
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: 500,
            color: '#1A1A1A',
            mb: 0.5,
            display: 'block',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {label}
        </Typography>
      )}
      <TextField
        fullWidth
        name={name}
        placeholder={placeholder}
        multiline={multiline}
        rows={rows || (multiline ? 4 : 1)}
        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#FFFFFF',
            borderRadius: '6px',
            minHeight: multiline ? '100px' : '40px',
            transition: 'all 0.2s',
            alignItems: multiline ? 'flex-start' : 'center',
            '& fieldset': {
              borderColor: '#E5E7EB', // light gray
            },
            '&:hover fieldset': {
              borderColor: '#D1D5DB',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#3C60B6',
              boxShadow: '0 0 0 3px rgba(60, 96, 182, 0.1)', // blue glow
            },
          },
          '& .MuiInputBase-input': {
            fontSize: '13px',
            color: '#1F2937',
            fontFamily: "'Inter', sans-serif",
            padding: multiline ? '8px 0px' : '0px', 
          },
        }}
      />
    </Box>
  );
};

export default FormInput;
