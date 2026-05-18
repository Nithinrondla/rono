import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Container,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../Assets/Images/Logo.png';
import ProductsDropdown from './ProductsDropdown';

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  // Dropdown states
  const [productsAnchor, setProductsAnchor] = useState(null);
  const [resourcesAnchor, setResourcesAnchor] = useState(null);

  const handleProductsOpen = (event) => setProductsAnchor(event.currentTarget);
  const handleProductsClose = () => setProductsAnchor(null);

  const handleResourcesOpen = (event) => setResourcesAnchor(event.currentTarget);
  const handleResourcesClose = () => setResourcesAnchor(null);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navLinks = [
    { label: 'About us', type: 'link' },
    { label: 'Products', type: 'dropdown', anchor: productsAnchor, open: handleProductsOpen, close: handleProductsClose },
    { label: 'Resources', type: 'dropdown', anchor: resourcesAnchor, open: handleResourcesOpen, close: handleResourcesClose },
    { label: 'Careers', type: 'link' },
    { label: 'Gallery', type: 'link' },
  ];

  const buttonStyle = {
    background: 'linear-gradient(98.76deg, #3C60B6 -45.06%, #3C60B6 34.8%, #4EB2CE 114.24%)',
    color: '#fff',
    textTransform: 'none',
    fontWeight: 600,
    px: 4,
    py: 1,
    borderRadius: '50px',
    fontSize: '1rem',
    '&:hover': {
      opacity: 0.9,
      boxShadow: '0px 4px 12px rgba(60, 96, 182, 0.3)',
    },
  };

  const linkStyle = {
    fontSize: 18,
    fontWeight: 500,
    color: '#333',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
    transition: 'color 0.2s',
    '&:hover': {
      color: '#3C60B6',
    },
  };

  const renderNavLinks = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      {navLinks.map((link) => (
        <Box key={link.label}>
          <Typography
            sx={linkStyle}
            onClick={link.type === 'dropdown' ? link.open : undefined}
          >
            {link.label}
            {link.type === 'dropdown' && <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />}
          </Typography>

          {link.label === 'Products' && link.type === 'dropdown' && (
            <Menu
              anchorEl={link.anchor}
              open={Boolean(link.anchor)}
              onClose={link.close}
              MenuListProps={{ onMouseLeave: link.close }}
              PaperProps={{
                elevation: 0,
                sx: { 
                  mt: 2, 
                  borderRadius: '20px', 
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  overflow: 'visible',
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    left: 40,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                }
              }}
            >
              <ProductsDropdown handleClose={link.close} />
            </Menu>
          )}

          {link.label === 'Resources' && link.type === 'dropdown' && (
            <Menu
              anchorEl={link.anchor}
              open={Boolean(link.anchor)}
              onClose={link.close}
              MenuListProps={{ onMouseLeave: link.close }}
              PaperProps={{
                elevation: 3,
                sx: { 
                  mt: 1, 
                  borderRadius: '12px', 
                  minWidth: 180,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  border: '1px solid #F3F4F6',
                }
              }}
            >
              <MenuItem 
                onClick={() => {
                  navigate('/blogs');
                  link.close();
                }}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  py: 1.5,
                  px: 2,
                  '&:hover': { backgroundColor: '#F9FAFB' }
                }}
              >
                <Typography sx={{ fontWeight: 500, fontSize: '14px', fontFamily: "'Inter', sans-serif" }}>
                  Blogs
                </Typography>
                <Box component="span" sx={{ fontSize: '14px', color: '#6B7280' }}>›</Box>
              </MenuItem>
              <MenuItem 
                onClick={() => {
                  navigate('/news');
                  link.close();
                }}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  py: 1.5,
                  px: 2,
                  '&:hover': { backgroundColor: '#F9FAFB' }
                }}
              >
                <Typography sx={{ fontWeight: 500, fontSize: '14px', fontFamily: "'Inter', sans-serif" }}>
                  News
                </Typography>
                <Box component="span" sx={{ fontSize: '14px', color: '#6B7280' }}>›</Box>
              </MenuItem>
            </Menu>
          )}
        </Box>
      ))}
    </Box>
  );

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 1.5,
          }}
        >
          {/* Left: Logo */}
          <Box 
            sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            <Box
              component="img"
              src={Logo}
              alt="RONO Logo"
              sx={{ height: { xs: 32, md: 40 }, width: 'auto' }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontSize: { xs: 20, md: 24 },
                color: '#1A1A1A',
                letterSpacing: '-0.02em',
                fontFamily: "'Inter', sans-serif",

              }}
            >
            </Typography>
          </Box>

          {/* Center: Desktop Nav */}
          {!isMobile && renderNavLinks()}

          {/* Right: Search & Action */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 2 } }}>
            <IconButton sx={{ color: '#333' }}>
              <SearchIcon />
            </IconButton>

            {!isMobile && (
              <Button 
                variant="contained" 
                sx={buttonStyle}
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </Button>
            )}

            {isMobile && (
              <IconButton onClick={handleDrawerToggle} sx={{ color: '#333' }}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Box>
      </Container>

      {/* Mobile Menu */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{ sx: { width: '80%', maxWidth: 300 } }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <React.Fragment key={link.label}>
              <ListItem 
                button 
                onClick={() => {
                  if (link.type === 'link') {
                    navigate('/'); // Default to home for other links
                    handleDrawerToggle();
                  } else {
                    // For mobile, maybe just navigate to a main page or toggle sub-menu
                    // For now, let's just make Blogs/News visible if it's Resources
                  }
                }}
              >
                <ListItemText primary={link.label} />
                {link.type === 'dropdown' && <KeyboardArrowDownIcon />}
              </ListItem>
              
              {/* Mobile Sub-menu for Resources */}
              {link.label === 'Resources' && (
                <Box sx={{ pl: 4 }}>
                  <ListItem button onClick={() => { navigate('/blogs'); handleDrawerToggle(); }}>
                    <ListItemText primary="Blogs" />
                  </ListItem>
                  <ListItem button onClick={() => { navigate('/news'); handleDrawerToggle(); }}>
                    <ListItemText primary="News" />
                  </ListItem>
                </Box>
              )}
            </React.Fragment>
          ))}
          <ListItem sx={{ mt: 2 }}>
            <Button 
              variant="contained" 
              fullWidth 
              sx={buttonStyle}
              onClick={() => {
                navigate('/contact');
                handleDrawerToggle();
              }}
            >
              Contact Us
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;
