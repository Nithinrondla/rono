import React from 'react';
import { Box, Typography } from '@mui/material';

const ContactCard = ({ icon, title, subtitle }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2.5,
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        p: '16px 24px',
        border: '1px solid #E5E7EB',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        width: '100%',
        '&:hover': {
          borderColor: '#D1D5DB', // slightly darker border
          backgroundColor: '#F9FAFB',
        },
      }}
    >
      <Box
        sx={{
          width: 44,
          height: 44,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          color: '#1A1A1A',
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '16px',
            color: '#1A1A1A',
            mb: 0.5,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            color: '#6B7280', // light gray
            lineHeight: 1.4,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactCard;
