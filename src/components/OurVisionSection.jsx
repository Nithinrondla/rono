import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const OurVisionSection = ({
  title = "Our Vision",
  subtitle = "To empower businesses and individuals with tools that are intuitive, practical, and built around real-world needs — not complexity.",
  imageSrc = "./Assets/Images/Frame 39.png", // Replaceable via prop
  imageAlt = "Our Vision collaboration"
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1000px',
        mx: 'auto',
        minHeight: { xs: 'auto', md: '880px' },
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 2, sm: 2, md: 2 },
        pb: { xs: 8, sm: 10, md: '80px' },
        px: { xs: '20px', sm: '40px', md: '60px' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflowX: 'hidden',
      }}
    >
      {/* Background Visual Flair - Gradients */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255, 182, 193, 0.15) 0%, rgba(255, 160, 122, 0.05) 100%)',
          filter: 'blur(100px)',
          borderRadius: '50%',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255, 236, 139, 0.2) 0%, rgba(255, 255, 255, 0) 100%)',
          filter: 'blur(100px)',
          borderRadius: '50%',
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Text Group */}
        <Box
          sx={{
            textAlign: 'center',
            mb: '40px',
            maxWidth: '800px'
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.25rem', md: '3.5rem' },
              fontWeight: 550,
              color: '#000000',
              mb: 2,
              letterSpacing: '-0.02em',
              fontFamily: '"Inter", "SF Pro", sans-serif',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.0rem' },
              color: '#4b5563',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              fontWeight: 400,
              fontFamily: '"Inter", "SF Pro", sans-serif',
            }}
          >
            {subtitle}
          </Typography>
        </Box>

        {/* Media Asset - The Image */}
        <Box
          sx={{
            width: '100%',
            maxWidth: '1000px',
            height: { xs: '300px', sm: '400px', md: '500px' },
            borderRadius: { xs: '24px', md: '32px' },
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)',
            backgroundColor: '#f3f4f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src={imageSrc}
            alt={imageAlt}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default OurVisionSection;
