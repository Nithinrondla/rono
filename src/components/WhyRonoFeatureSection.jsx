import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import icon1 from '../Assets/Images/Capa_1 (2).png';
import icon2 from '../Assets/Images/Capa_1 (3).png';
import icon3 from '../Assets/Images/Group (1).png';

const WhyRonoFeatureSection = ({
  title = "Why Rono",
  subtitle = "Every Rono product is built from scratch to be best in its space. Dedicated tools for specific use-cases",
  cards = [
    {
      title: "Clean, intuitive experiences without unnecessary clutter",
      icon: icon3,
      gradient: "linear-gradient(135deg, #F8E8A6 0%, #F5E6B5 100%)"
    },
    {
      title: "Scalable products that grow with your needs",
      icon: icon1,
      gradient: "linear-gradient(135deg, #D7E6F5 0%, #DDE8F2 100%)"
    },
    {
      title: "Designed to deliver value from day one",
      icon: icon2,
      gradient: "linear-gradient(135deg, #E8DDF2 0%, #D8C0E8 100%)"
    }
  ],
  backgroundColor = "#FFFFFF",
  sectionHeight = 562,
  maxWidth = 1440,
  cardGap = 32
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1200px',
        mx: 'auto',
        minHeight: 'auto',
        backgroundColor: backgroundColor,
        pt: { xs: 6, sm: 8, md: 10 },
        pb: { xs: 3, sm: 4, md: 5 },
        px: { xs: 2, sm: 4, md: 7.5 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflowX: 'hidden',
      }}
    >
      <Container sx={{ maxWidth: maxWidth }} maxWidth={false}>
        {/* Header Area */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, sm: 8, md: 10 } }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              fontWeight: 540,
              color: '#000000',
              mb: 2,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
              color: '#4E4E4E',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            {subtitle}
          </Typography>
        </Box>

        {/* Feature Cards Row */}
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: 'center',
            alignItems: 'stretch',
            flexWrap: { xs: 'wrap', md: 'nowrap' },
            maxWidth: '1280px',
            mx: 'auto',
          }}
        >
          {cards.map((card, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: { md: '33.33%' },
              }}
            >
              <Paper
                sx={{
                  width: '100%',
                  maxWidth: '413.33px',
                  height: '180px',
                  background: card.gradient,
                  borderRadius: '24px',
                  padding: '24px',
                  position: 'relative',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease-in-out',
                  cursor: 'pointer',
                  transform: 'rotate(0deg)',
                  opacity: 1,
                  '&:hover': {
                    transform: 'translateY(-8px) rotate(0deg)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)',
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {/* Icon Container */}
                <Box
                  sx={{
                    width: { xs: 50, sm: 56, md: 80 },
                    height: { xs: 50, sm: 56, md: 80 },
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                    zIndex: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={card.icon}
                    alt={`Icon for ${card.title}`}
                    sx={{
                      width: { xs: 24, sm: 28, md: 32 },
                      height: { xs: 24, sm: 28, md: 32 },
                      objectFit: 'contain',
                    }}
                  />
                </Box>

                {/* Card Text */}
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.0  rem' },
                    fontWeight: 500,
                    color: '#1f2937',
                    lineHeight: 1.4,
                    textAlign: 'left',
                    mt: 2,
                  }}
                >
                  {card.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyRonoFeatureSection;
