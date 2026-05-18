import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BlogSection from '../components/Blog/BlogSection';
import Footer from '../components/Footer';
import { blogsData } from '../data/blogsData';
import Ready from '../components/Ready';

const NewsHero = () => {
    return (
        <Box 
            sx={{ 
                width: '100%',
                height: { xs: '300px', md: '400px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                // Adding the soft gradient blur as seen in the image
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '-10%',
                    right: '-10%',
                    width: '40%',
                    height: '60%',
                    background: 'radial-gradient(circle, rgba(255, 230, 200, 0.6) 0%, rgba(255, 255, 255, 0) 70%)',
                    filter: 'blur(60px)',
                    zIndex: 1,
                }
            }}
        >
            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
                <Typography 
                    variant="h1" 
                    sx={{ 
                        fontSize: { xs: '48px', md: '72px' },
                        fontWeight: 600,
                        color: '#111111',
                        mb: 2,
                        fontFamily: "'Inter', sans-serif",
                    }}
                >
                    News
                </Typography>
                <Typography 
                    sx={{ 
                        fontSize: { xs: '16px', md: '18px' },
                        color: '#6B7280',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.6,
                        fontFamily: "'Inter', sans-serif",
                    }}
                >
                    Practical insights and thoughtful content focused on solving real-world challenges with clarity and simplicity.
                </Typography>
            </Container>
        </Box>
    );
};

const News = () => {
    const navigate = useNavigate();

    const handleCardClick = (blog) => {
        navigate('/news-detail');
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1 }}>
                <NewsHero />
                <BlogSection 
                    blogs={blogsData} 
                    onCardClick={handleCardClick}
                />
            </Box>
            <Ready />
            <Footer />
        </div>
    );
};

export default News;