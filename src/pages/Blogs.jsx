import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BlogSection from '../components/Blog/BlogSection';
import Footer from '../components/Footer';
import { blogsData } from '../data/blogsData';
import Ready from '../components/Ready';

const BlogHero = ({ title, description }) => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '350px',
        pt: { xs: 12, md: 16 },
        pb: { xs: 6, md: 8 },
        position: 'relative',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          right: '-10%',
          width: '50%',
          height: '100%',
          background: 'radial-gradient(circle, rgba(255, 235, 180, 0.4) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(60px)',
          zIndex: 1,
        }
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '42px', md: '64px' },
            fontWeight: 800,
            color: '#111111',
            lineHeight: 1.1,
            mb: 3,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {title || "Blogs"}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '16px', md: '18px' },
            color: '#4B5563',
            lineHeight: 1.6,
            maxWidth: '600px',
            margin: '0 auto',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {description || "Practical insights and thoughtful content focused on solving real-world challenges with clarity and simplicity."}
        </Typography>
      </Container>
    </Box>
  );
};

const Blogs = () => {
    const navigate = useNavigate();

    const handleCardClick = (blog) => {
        // Navigate to blog detail page
        navigate('/blogs-detail', { state: { blog } });
        // Scroll to top on navigation
        window.scrollTo(0, 0);
    };

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1 }}>
                <BlogHero />
                <BlogSection blogs={blogsData} onCardClick={handleCardClick} />
            </Box>
            <Ready />
            <Footer />
        </Box>
    );
};

export default Blogs;