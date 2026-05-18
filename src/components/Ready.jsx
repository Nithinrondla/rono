import React from 'react';
import { Box, Typography, Button, Container, useTheme, useMediaQuery } from '@mui/material';
import mobileImg from '../Assets/Images/iPhone 17 - White (1).png';

const Ready = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const handleContactClick = () => {
    // Current App.js is single page, so we just log or scroll
    console.log('Contact Us clicked!');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Box
          sx={{
            position: 'relative',
            width: '1050px',
            background: 'linear-gradient(197.65deg, #F25828 36.25%, #F25828 36.48%, #F7CE25 82.13%)',
            backdropFilter: 'blur(174px)',
            borderRadius: '32px',
            px: isMobile ? 3 : isTablet ? 6 : 10,
            pt: isMobile ? 4 : 6,
            pb: isMobile ? 4 : 6,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            minHeight: isMobile ? 'auto' : '400px',
            // Allow phone to bleed outside
            overflow: 'visible',
          }}
        >
          {/* Left Side - Content */}
          <Box
            sx={{
              maxWidth: isMobile ? '100%' : '55%',
              zIndex: 2,
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 600,
                fontSize: isMobile ? 32 : isTablet ? 36 : 40,
                lineHeight: 1.1,
                letterSpacing: '-1px',
                color: '#fff',
                mb: 2,
              }}
            >
              Ready to Transform Your Workforce Management?
            </Typography>
            <Typography
              sx={{
                fontSize: isMobile ? 14 : 16,
                lineHeight: 1.5,
                color: 'rgba(255, 255, 255, 0.9)',
                mb: 4,
                maxWidth: '100%',
                mx: isMobile ? 'auto' : 0
              }}
            >
              Join hundreds of businesses using RONO HUB to streamline operations and scale faster.
            </Typography>
            <Button
              variant="contained"
              onClick={handleContactClick}
              sx={{
                bgcolor: '#fff',
                color: '#000',
                textTransform: 'none',
                px: 4,
                py: 1.5,
                fontSize: 16,
                fontWeight: 600,
                borderRadius: '50px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                '&:hover': {
                  bgcolor: '#f5f5f5',
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
  
          {/* Right Side - Image - Positioned to bleed top/bottom */}
          <Box
            sx={{
              position: isMobile ? 'relative' : 'absolute',
              right: isMobile ? 'auto' : '5%',
              bottom: 0,
              top: isMobile ? '10px' : '-30px',
              width: isMobile ? '100%' : '340px',
              maxWidth: isMobile ? '280px' : 'none',
              zIndex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              mt: isMobile ? 3 : 0,
            }}
          >
            <Box
              component="img"
              src={mobileImg}
              alt="Mobile App"
              sx={{
                height: '115%', // Slightly reduced from 115%
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
                transform: isMobile ? 'none' : 'scale(1)',
              }}
            />
          </Box>
      </Box>
    </Container >
  );
};

export default Ready;
