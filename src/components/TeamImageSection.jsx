import React from 'react';
import { Box, Container } from '@mui/material';
import teamImage from '../Assets/Images/Rectangle 13 (2).png';

const TeamImageSection = ({
  image = teamImage,
  alt = "Team image",
  borderRadius = 20,
  height = 650,
  maxWidth = 1320
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'transparent',
        pt: { xs: 6, sm: 8, md: 10 },
        pb: { xs: 6, sm: 8, md: 10 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: '100%',
          maxWidth: `${maxWidth}px !important`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '100%',
            height: { xs: 'auto', sm: 'auto', md: height },
            aspectRatio: { xs: '16/9', sm: '16/10', md: 'unset' },
            borderRadius: { xs: '16px', sm: '24px', md: `${borderRadius}px` },
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          }}
        >
          <Box
            component="img"
            src={image}
            alt={alt}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default TeamImageSection;
