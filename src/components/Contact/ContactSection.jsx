import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';

const ContactSection = ({
  heading,
  description,
  cardsData,
  tagText,
  onTagClick,
  formHeader,
  formPlaceholders,
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#FFFFFF', // changed to white
        position: 'relative',
        py: { xs: 8, md: 10 },
        overflow: 'hidden',
      }}
    >
      {/* Background Gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          left: '-10%',
          transform: 'translateY(-50%)',
          width: { xs: '300px', sm: '400px', md: '600px' },
          height: { xs: '300px', sm: '400px', md: '600px' },
          background: 'radial-gradient(circle, rgba(247,206,37,0.2) 0%, rgba(247,150,40,0.1) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 10 }, position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8, lg: 12 }} alignItems="flex-start">

          {/* LEFT SECTION */}
          <Grid item xs={12} lg={5}>
            <Box sx={{ maxWidth: '480px', margin: { xs: '0 auto', lg: '0' } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '32px', md: '42px', lg: '44px' },
                  fontWeight: 700,
                  color: '#1A1A1A',
                  mb: 2,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {heading}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: '14px', md: '16px' },
                  color: '#6B7280',
                  lineHeight: 1.7,
                  mb: 6,
                  maxWidth: '420px',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {description}
              </Typography>

              {/* Contact Cards Stack */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
                {cardsData && cardsData.map((card, index) => (
                  <ContactCard
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    subtitle={card.subtitle}
                  />
                ))}
              </Box>

              {/* Bottom Tag / Button */}
              {tagText && (
                <Button
                  variant="outlined"
                  onClick={onTagClick}
                  sx={{
                    borderRadius: '50px',
                    px: 3,
                    py: 1,
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '14px',
                    borderColor: 'rgba(60, 96, 182, 0.5)',
                    color: '#3C60B6',
                    backgroundColor: 'transparent',
                    fontFamily: "'Inter', sans-serif",
                    '&:hover': {
                      backgroundColor: 'rgba(60, 96, 182, 0.05)',
                      borderColor: '#3C60B6',
                    }
                  }}
                >
                  {tagText}
                </Button>
              )}
            </Box>
          </Grid>

          {/* RIGHT SECTION: FORM */}
          <Grid item xs={12} lg={7}>
            <Box sx={{ maxWidth: '700px', margin: '0 auto' }}>
              <ContactForm formHeader={formHeader} formPlaceholders={formPlaceholders} />
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
