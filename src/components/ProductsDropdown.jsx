import React from 'react';
import { Box, Typography, Grid, Paper, useTheme, useMediaQuery } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import AssignmentIndIconImg from '../Assets/Images/AssignmentIndIcon.png';
import Icons2xImg from '../Assets/Images/Icons@2x.png';
import RonojobsImg from '../Assets/Images/Ronojobs.png';
import SchoolImg from '../Assets/Images/School.png';
import LocalshippingImg from '../Assets/Images/Localshipping.png';

const products = [
  { title: "RONO Recruiter", icon: <Box component="img" src={AssignmentIndIconImg} sx={{ width: 24, height: 24 }} />, description: "" },
  { title: "RONO LMS", icon: <Box component="img" src={SchoolImg} sx={{ width: 24, height: 24 }} />, description: "" },
  { title: "RONO HRMS", icon: <Box component="img" src={Icons2xImg} sx={{ width: 24, height: 24 }} />, description: "" },
  { title: "RONO LR", icon: <Box component="img" src={LocalshippingImg} sx={{ width: 24, height: 24 }} />, description: "" },
  { title: "RONO Jobs", icon: <Box component="img" src={RonojobsImg} sx={{ width: 24, height: 24 }} />, description: "" },
];

const DropdownItem = ({ title, icon }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      p: 1.5,
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        backgroundColor: '#f8f9fa',
        transform: 'scale(1.02)',
        '& .arrow-icon': {
          transform: 'translateX(4px)',
          opacity: 1,
        }
      },
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          color: '#F25828', // Rono theme color
        }}
      >
        {icon}
      </Box>
      <Typography
        sx={{
          fontSize: '15px',
          fontWeight: 600,
          color: '#333',
        }}
      >
        {title}
      </Typography>
    </Box>
    <ArrowForwardIosIcon
      className="arrow-icon"
      sx={{
        fontSize: 12,
        color: '#999',
        opacity: 0.5,
        transition: 'all 0.2s'
      }}
    />
  </Box>
);

const CTACard = ({ title, subtitle, gradient, onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      background: gradient,
      borderRadius: '16px',
      p: 3,
      color: '#fff',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'translateY(-4px)',
      },
      mb: 2,
    }}
  >
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
        {title}
      </Typography>
      <NorthEastIcon sx={{ fontSize: 20 }} />
    </Box>
    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, fontWeight: 500 }}>
      {subtitle}
    </Typography>
  </Box>
);

const ProductsDropdown = ({ handleClose }) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Paper
      elevation={10}
      sx={{
        p: 4,
        borderRadius: '20px',
        minWidth: isTablet ? '600px' : '850px',
        backgroundColor: '#ffffff',
        border: '1px solid rgba(0,0,0,0.05)',
      }}
    >
      <Grid container spacing={4}>
        {/* Left Section: Product Grid */}
        <Grid item xs={12} md={7.5}>
          <Grid container spacing={1}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <DropdownItem title={product.title} icon={product.icon} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Vertical Divider (optional visual) */}
        <Grid item xs={12} md={0.5} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box sx={{ width: '1px', height: '100%', backgroundColor: '#eee', mx: 'auto' }} />
        </Grid>

        {/* Right Section: CTA Cards */}
        <Grid item xs={12} md={4}>
          <CTACard
            title="Try Live Demo"
            subtitle="Call to get our demo at your place"
            gradient="linear-gradient(135deg, #3C60B6 0%, #4EB2CE 100%)"
            onClick={() => console.log('Live Demo Clicked')}
          />
          <CTACard
            title="Feature List"
            subtitle="Click to know feature list"
            gradient="linear-gradient(135deg, #F25828 0%, #F7CE25 100%)"
            onClick={() => console.log('Feature List Clicked')}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductsDropdown;
