import React from 'react';
import { Button, CircularProgress } from '@mui/material';

const SubmitButton = ({ loading, children, onClick, disabled }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      disabled={disabled || loading}
      sx={{
        background: 'linear-gradient(98.76deg, #3C60B6 -45.06%, #3C60B6 34.8%, #4EB2CE 114.24%)',
        color: '#FFFFFF',
        height: '42px',
        px: 4,
        borderRadius: '50px',
        fontWeight: 500,
        fontSize: '14px',
        textTransform: 'none',
        fontFamily: "'Inter', sans-serif",
        boxShadow: '0 4px 14px rgba(60, 96, 182, 0.2)',
        transition: 'all 0.2s ease',
        '&:hover': {
          opacity: 0.9,
          boxShadow: '0 6px 20px rgba(60, 96, 182, 0.3)',
        },
        '&:active': {
          transform: 'scale(0.98)',
        },
        '&.Mui-disabled': {
          background: '#9CA3AF',
          color: '#F3F4F6',
          boxShadow: 'none',
        },
      }}
    >
      {loading ? <CircularProgress size={20} color="inherit" /> : children}
    </Button>
  );
};

export default SubmitButton;
