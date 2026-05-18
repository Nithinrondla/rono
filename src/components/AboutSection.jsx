import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const AboutSection = ({ title, description, subDescription }) => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        py: { xs: 8, sm: 10, md: 12 },
        overflow: 'hidden',
      }}
    >
      {/* Soft gradient background effect */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: '-10%',
          transform: 'translateY(-50%)',
          width: { xs: '400px', sm: '600px', md: '800px' },
          height: { xs: '400px', sm: '600px', md: '800px' },
          background: 'radial-gradient(circle, rgba(247,206,37,0.35) 0%, rgba(247,150,40,0.2) 35%, rgba(242,88,40,0.05) 55%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: '100%', sm: '600px', md: '800px' },
            mx: 'auto',
            textAlign: 'center',
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {/* Main Title */}
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '5rem' },
              fontWeight: 700,
              color: '#000000',
              mb: { xs: 3, sm: 4, md: 5 },
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </Typography>

          {/* Main Description */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.125rem' },
              color: '#4E4E4E',
              lineHeight: 1.7,
              mb: { xs: 4, sm: 5, md: 6 },
              maxWidth: '100%',
              fontWeight: 500,
            }}
          >
            {description}
          </Typography>

          {/* Sub Description */}
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.125rem' },
              color: '#4E4E4E',
              lineHeight: 1.6,
              fontWeight: 500,
            }}
          >
            {subDescription}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
