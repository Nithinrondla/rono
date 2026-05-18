import React from 'react';
import { Box, Container } from '@mui/material';
import BlogCard from './BlogCard';

const BlogSection = ({ blogs, onCardClick }) => {
  return (
    <Box 
      sx={{ 
        backgroundColor: '#FFFFFF',
        width: '100%',
        pb: 10
      }}
    >
      <Container 
        maxWidth={false}
        sx={{ 
          maxWidth: '1440px !important',
          margin: '0 auto',
          px: { xs: '20px', sm: '40px', md: '60px' },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            // Desktop: 3 columns, Tablet: 2 columns, Mobile: 1 column
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)'
            },
            rowGap: '56px',
            columnGap: '24px',
            alignItems: 'start',
            animation: 'fadeIn 0.8s ease-out',
            '@keyframes fadeIn': {
              from: { opacity: 0, transform: 'translateY(20px)' },
              to: { opacity: 1, transform: 'translateY(0)' }
            }
          }}
        >
          {blogs.map((blog) => (
            <Box 
              key={blog.id}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <BlogCard
                image={blog.image}
                title={blog.title}
                description={blog.description}
                onClick={() => onCardClick && onCardClick(blog)}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default BlogSection;
