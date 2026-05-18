import React from 'react';
import { Box, Typography } from '@mui/material';

const BlogCard = ({ image, title, description, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: '100%',
        maxWidth: '424px',
        height: { xs: 'auto', md: '442px' },
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'all 0.4s ease-in-out',
        '&:hover': {
          transform: 'translateY(-6px)',
          '& .blog-image': {
            transform: 'scale(1.08)',
          },
          '& .blog-image-container': {
            boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
          }
        },
      }}
    >
      {/* Blog Image */}
      <Box
        className="blog-image-container"
        sx={{
          width: '100%',
          height: '320px',
          borderRadius: '24px',
          overflow: 'hidden',
          transition: 'all 0.4s ease-in-out',
        }}
      >
        <Box
          className="blog-image"
          component="img"
          src={image}
          alt={title}
          loading="lazy"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease-in-out',
            display: 'block',
          }}
        />
      </Box>

      {/* Blog Title */}
      <Typography
        variant="h6"
        sx={{
          fontSize: '22px',
          fontWeight: 700,
          color: '#111111',
          mt: '24px',
          mb: '8px',
          fontFamily: "'Inter', sans-serif",
          lineHeight: 1.3,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          minHeight: '58px',
        }}
      >
        {title}
      </Typography>

      {/* Blog Description */}
      <Typography
        sx={{
          fontSize: '15.5px',
          fontWeight: 400,
          color: '#6B7280',
          lineHeight: 1.7,
          fontFamily: "'Inter', sans-serif",
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          minHeight: '80px',
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default BlogCard;
