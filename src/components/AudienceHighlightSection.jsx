import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

const AudienceHighlightSection = ({ 
  title = "Rono is built for",
  backgroundText = "Rono is built for", 
  cards = [
    {
      text: "Founders who want efficient systems",
      position: "topLeft"
    },
    {
      text: "Professionals who value simplicity",
      position: "topRight"
    },
    {
      text: "Teams that need clarity in operations",
      position: "bottomLeft"
    },
    {
      text: "Businesses tired of overcomplicated software",
      position: "bottomRight"
    }
  ],
  backgroundColor = "#FFFFFF",
  sectionHeight = 612,
  maxWidth = 1440
}) => {
  
  const getCardPosition = (position) => {
    const positions = {
      topLeft: {
        top: { xs: '10%', sm: '15%', md: '20%' },
        left: { xs: '5%', sm: '8%', md: '10%' }
      },
      topRight: {
        top: { xs: '10%', sm: '15%', md: '20%' },
        right: { xs: '5%', sm: '8%', md: '10%' }
      },
      bottomLeft: {
        bottom: { xs: '10%', sm: '15%', md: '20%' },
        left: { xs: '5%', sm: '8%', md: '10%' }
      },
      bottomRight: {
        bottom: { xs: '10%', sm: '15%', md: '20%' },
        right: { xs: '5%', sm: '8%', md: '10%' }
      }
    };
    return positions[position] || positions.topLeft;
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: sectionHeight,
        backgroundColor: backgroundColor,
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, sm: 10, md: 12 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Center radial gradient glow */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '380px', sm: '520px', md: '680px' },
          height: { xs: '380px', sm: '520px', md: '680px' },
          background: 'radial-gradient(circle, rgba(242,88,40,0.88) 0%, rgba(247,150,40,0.65) 22%, rgba(247,206,37,0.42) 50%, rgba(255,255,255,0) 72%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          zIndex: 1,
        }}
      />

      {/* Circular rings */}
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
        {[1, 1.5, 2, 2.5, 3].map((scale, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              width: { xs: `${150 * scale}px`, sm: `${220 * scale}px`, md: `${280 * scale}px` },
              height: { xs: `${150 * scale}px`, sm: `${220 * scale}px`, md: `${280 * scale}px` },
              border: '1.2px dashed rgba(200, 150, 120, 0.35)',
              borderRadius: '50%',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </Box>

      {/* Large faded background typography */}
      <Typography
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: { xs: '80px', sm: '100px', md: '120px' },
          fontWeight: 700,
          color: 'rgba(255, 255, 255, 0.7)',
          zIndex: 3,
          textAlign: 'center',
          letterSpacing: '-0.02em',
          whiteSpace: 'nowrap',
        }}
      >
        {backgroundText}
      </Typography>

      {/* Main centered heading */}
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 700,
            color: '#000000',
            textAlign: 'center',
            zIndex: 4,
            position: 'relative',
            mb: 0,
          }}
        >
          {title}
        </Typography>
      </Container>

      {/* Floating cards */}
      {cards.map((card, index) => {
        const position = getCardPosition(card.position);
        return (
          <Paper
            key={index}
            sx={{
              position: 'absolute',
              ...position,
              backgroundColor: '#FFFFFF',
              borderRadius: { xs: 2, sm: 2.5, md: 3 },
              padding: { xs: 2, sm: 2.5, md: 3 },
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(255, 183, 77, 0.2)',
              zIndex: 5,
              maxWidth: { xs: '200px', sm: '250px', md: '280px' },
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px) scale(1.02)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                border: '1px solid rgba(255, 183, 77, 0.3)',
              },
              // Mobile responsive - stack vertically
              display: { xs: 'none', sm: 'block' },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem' },
                color: '#374151',
                fontWeight: 500,
                textAlign: 'center',
                lineHeight: 1.4,
              }}
            >
              {card.text}
            </Typography>
          </Paper>
        );
      })}

      {/* Mobile cards - stacked vertically */}
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'column',
          gap: 2,
          mt: 8,
          width: '100%',
          px: 2,
          zIndex: 5,
        }}
      >
        {cards.map((card, index) => (
          <Paper
            key={index}
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: 2,
              padding: 2,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(255, 183, 77, 0.2)',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: '0.875rem',
                color: '#374151',
                fontWeight: 500,
                textAlign: 'center',
                lineHeight: 1.4,
              }}
            >
              {card.text}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default AudienceHighlightSection;
