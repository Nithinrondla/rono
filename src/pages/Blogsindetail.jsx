import React from 'react';
import { Box, Typography, Container, Grid, Divider, Chip } from '@mui/material';
import Navbar from '../components/Navbar';
import Ready from '../components/Ready';
import Footer from '../components/Footer';
import NewsDetailImg from '../Assets/Images/Newsindetail.png';
import RelatedNewsImg from '../Assets/Images/Rectangle 14.png';

const NewsDetailHero = ({ category, title, date, description }) => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '400px',
        pt: { xs: 8, md: 12 },
        pb: { xs: 4, md: 6 },
        position: 'relative',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '-10%',
          width: '50%',
          height: '70%',
          background: 'radial-gradient(circle, rgba(255, 235, 180, 0.5) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(80px)',
          zIndex: 1,
        }
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <Chip 
          label={category || "Category Will Go here"} 
          sx={{
            backgroundColor: '#FFF1F0',
            color: '#FF4D4F',
            fontWeight: 500,
            fontSize: '12px',
            fontFamily: "'Inter', sans-serif",
            mb: 4,
            px: 1,
            '& .MuiChip-label': { px: 2 }
          }}
        />

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '36px', md: '56px' },
            fontWeight: 800,
            color: '#111111',
            lineHeight: 1.2,
            mb: 3,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {title || "Designing Simplicity in a Complex World"}
        </Typography>

        <Typography
          sx={{
            fontSize: '14px',
            color: '#111111',
            mb: 4,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {date || "13 June 2026"}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '16px', md: '18px' },
            color: '#4B5563',
            lineHeight: 1.8,
            maxWidth: '800px',
            margin: '0 auto',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {description || "Explore how thoughtful design and purposeful tools can simplify everyday challenges, improve workflows, and create meaningful experiences for modern businesses and individuals."}
        </Typography>
      </Container>
    </Box>
  );
};

const NewsDetailImage = ({ src, alt }) => {
  return (
    <Container maxWidth="xl" sx={{ px: { xs: 3, md: 10 }, pb: 8 }}>
      <Box
        sx={{
          width: '100%',
          height: { xs: '300px', sm: '500px', md: '650px' },
          borderRadius: '40px',
          overflow: 'hidden',
          backgroundColor: '#F3F4F6',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        }}
      >
        <Box
          component="img"
          src={src || NewsDetailImg}
          alt={alt || "Blog Detail Image"}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
    </Container>
  );
};

const RelatedNewsCard = ({ image, title, description }) => (
  <Box sx={{ mb: 6, cursor: 'pointer' }}>
    <Box 
      sx={{ 
        width: '100%', 
        height: '240px', 
        borderRadius: '32px', 
        overflow: 'hidden',
        mb: 2 
      }}
    >
      <Box 
        component="img" 
        src={image} 
        alt={title}
        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </Box>
    <Typography 
      sx={{ 
        fontWeight: 700, 
        fontSize: '18px', 
        color: '#111111', 
        mb: 1, 
        fontFamily: "'Inter', sans-serif",
        lineHeight: 1.3
      }}
    >
      {title}
    </Typography>
    <Typography 
      sx={{ 
        color: '#6B7280', 
        fontSize: '14px', 
        lineHeight: 1.5,
        fontFamily: "'Inter', sans-serif" 
      }}
    >
      {description}
    </Typography>
  </Box>
);

const NewsDetailContent = () => {
  const sections = [
    {
      title: "How AI is Transforming Recruitment",
      text: "In a fast-moving digital landscape, businesses and individuals don't just need more tools—they need the right ones. At Ronohub, the focus is simple: create solutions that solve real problems with clarity, usability, and purpose. Every product is built with intention, ensuring it delivers value where it truly matters."
    },
    {
      title: "Understanding the Problem First",
      text: "Before building anything, the priority is streamlining the challenge. Whether it's streamlining learning processes, improving transportation workflows, or connecting people to better opportunities, each solution begins with a clear problem statement. This approach ensures that every product is not just functional, but meaningful."
    },
    {
      title: "Designing for Simplicity",
      text: "Complex systems often lead to confusion and inefficiency. That's why simplicity sits at the core of every Ronohub product. Clean interfaces, intuitive interactions, and focused features allow users to achieve more with less effort. The goal is not to add more—but to refine what truly matters."
    },
    {
      title: "Built for Reliability",
      text: "In real-world applications, reliability is everything. Users depend on tools that perform consistently without friction. Ronohub products are designed to be stable, dependable, and ready for everyday use—whether for businesses managing operations or individuals organizing their daily tasks."
    },
    {
      title: "Connecting Technology with Purpose",
      text: "Technology is powerful, but only when it serves a purpose. Each Ronohub solution bridges the gap between innovation and practical use. By aligning technology with real needs, the products become more than just tools—they become enablers of growth and efficiency."
    },
    {
      title: "A Unified Philosophy",
      text: "While every product under Ronohub addresses a unique problem, they all share a common philosophy: clarity, usability, and trust. This consistency ensures that users always know what to expect—simple, reliable solutions that work."
    },
    {
      title: "Conclusion",
      text: "Ronohub continues to grow as a digital brand focused on impact. By staying grounded in real-world challenges and designing with purpose, it aims to create tools that not only solve problems but also improve the way people work and live."
    }
  ];

  const relatedNews = [
    {
      image: RelatedNewsImg,
      title: "How AI is Transforming Recruitment",
      description: "Discover how AI is reshaping hiring with faster screening, smarter matching, and better candidate experiences."
    },
    {
      image: RelatedNewsImg,
      title: "How AI is Transforming Recruitment",
      description: "Discover how AI is reshaping hiring with faster screening, smarter matching, and better candidate experiences."
    }
  ];

  return (
    <Container maxWidth="xl" sx={{ px: { xs: 3, md: 10 }, pb: 10 }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        gap: { xs: 6, md: 10 } 
      }}>
        {/* Left Section: Main Article Content (Strict 70% Width) */}
        <Box sx={{ width: { xs: '100%', md: '70%' } }}>
          {sections.map((section, index) => (
            <Box key={index} sx={{ mb: 6 }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 2, 
                  color: '#111111', 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '24px'
                }}
              >
                {section.title}
              </Typography>
              <Typography 
                sx={{ 
                  color: '#4B5563', 
                  lineHeight: 1.8, 
                  fontSize: '17px', 
                  fontFamily: "'Inter', sans-serif" 
                }}
              >
                {section.text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Right Section: Related News Sidebar (Strict 30% Width) */}
        <Box sx={{ width: { xs: '100%', md: '30%' } }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700, 
              mb: 5, 
              color: '#111111', 
              fontFamily: "'Inter', sans-serif",
              fontSize: '28px'
            }}
          >
            Related News
          </Typography>
          
          {relatedNews.map((news, index) => (
            <RelatedNewsCard key={index} {...news} />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

const Blogsindetail = () => {
  const newsData = {
    category: "Category Will Go here",
    title: "Designing Simplicity in a Complex World",
    date: "13 June 2026",
    description: "Explore how thoughtful design and purposeful tools can simplify everyday challenges, improve workflows, and create meaningful experiences for modern businesses and individuals."
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <NewsDetailHero {...newsData} />
        <NewsDetailImage />
        <NewsDetailContent />
      </Box>
      <Ready />
      <Footer />
    </Box>
  );
};

export default Blogsindetail;