import React from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import footerLogo from "../Assets/Images/Logo.png";

const products = [
  { name: "RONO Jobs", link: "https://job.ronohub.com/" },
  { name: "RONO Recruiter", link: "#" },
  { name: "RONO HRMS", link: "#" },
  { name: "RONO LMS", link: "https://lmsapp.ronohub.com/" },
  { name: "RONO LR", link: "#" },
];
const company = ["About Us", "Blogs", "Contact", "Careers"];

const footerTextSx = {
  color: "#000000",
  fontSize: { xs: 15, md: 18 },
  fontWeight: 500,
  lineHeight: { xs: "28px", md: "25px" },
  letterSpacing: 0,
};

const Footer = () => {
  const socialLinks = [
    { icon: InstagramIcon, url: "https://www.instagram.com/ronohub__/", label: "Instagram" },
    { icon: LinkedInIcon, url: "https://www.linkedin.com/company/rono-hub/", label: "LinkedIn" },
    { icon: FacebookRoundedIcon, url: "https://www.facebook.com/people/Rono-hub/61582466687839/", label: "Facebook" },
  ];

  const handleLinkClick = (text) => {
    if (text !== "Careers") {
      console.log(`Navigate to ${text}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "#f3f3f5",
        pt: { xs: 5, lg: "200px" },
        pb: 3,
        px: { xs: 2.5, lg: "60px" },
        boxSizing: "border-box",
      }}
    >
      <Container maxWidth={false} sx={{ width: "100%", maxWidth: "1200px", mx: "auto", px: "0 !important" }}>

        <Box
          sx={{
            mx: "auto",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: { xs: 5, lg: 5 },
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Box sx={{ flexBasis: { lg: "30%" }, maxWidth: { lg: "30%" }, flexShrink: 0 }}>
            <Box
              component="img"
              src={footerLogo}
              alt="Rono"
              sx={{
                width: { xs: 120, md:200 },
                height: "auto",
                display: "block",
                mx: { xs: "auto", lg: 0 },
                mb: { xs: 3, md: 8 },
              }}
            />

            <Typography
              sx={{
                ...footerTextSx,
                maxWidth: { xs: "100%", md: 420 },
                textAlign: { xs: "center", lg: "left" },
                mb: { xs: 3, md: 6 },
              }}
            >
              With a 10-year roadmap to achieve Level 5 maturity, RONO is on a
              mission to become a trusted global partner for businesses and
              individuals seeking digital transformation.
            </Typography>

            <Box
              sx={{
                width: { xs: "100%", sm: 380 },
                mx: { xs: "auto", lg: 0 },
                maxWidth: "100%",
                height: 52,
                display: "flex",
                alignItems: "center",
                bgcolor: "#ffffff",
                borderRadius: "999px",
                overflow: "hidden",
                border: "1px solid #E5E7EB",
              }}
            >
              <InputBase
                placeholder="Subscribe to our newsletter"
                sx={{
                  flex: 1,
                  px: { xs: 2, md: 3 },
                  color: "#4e4e4e",
                  fontSize: { xs: 14, md: 15 },
                  fontWeight: 600,
                  "& input::placeholder": {
                    color: "#9CA3AF",
                    opacity: 1,
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  width: 100,
                  minWidth: 100,
                  height: 44,
                  mr: "4px",
                  borderRadius: "999px",
                  bgcolor: "#111111",
                  color: "#ffffff",
                  boxShadow: "none",
                  fontSize: 15,
                  fontWeight: 500,
                  lineHeight: 1,
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#000000",
                    boxShadow: "none",
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>

          {/* Middle Section: Products and Company */}
          <Box
            sx={{
              display: "flex",
              flex: 1,
              justifyContent: { xs: "center", sm: "center", lg: "center" },
              gap: { xs: "50px", sm: "80px", lg: "120px" },
              px: { xs: 0, lg: 4 },
              mt: { xs: 4, lg: 0 },
            }}
          >
            <Stack spacing={{ xs: 3, md: 4 }} sx={{ flexShrink: 0, alignItems: { xs: "center", lg: "flex-start" } }}>
              <Typography sx={{ ...footerTextSx }}>Products</Typography>
              {products.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  target={item.link !== "#" ? "_blank" : "_self"}
                  rel={item.link !== "#" ? "noopener noreferrer" : ""}
                  underline="none"
                  sx={{ ...footerTextSx, "&:hover": { color: "#3c60b6" } }}
                >
                  {item.name}
                </Link>
              ))}
            </Stack>

            <Stack spacing={{ xs: 3, md: 4 }} sx={{ flexShrink: 0, alignItems: { xs: "center", lg: "flex-start" } }}>
              <Typography sx={{ ...footerTextSx }}>Company</Typography>
              {company.map((item) => (
                <Link
                  key={item}
                  underline="none"
                  onClick={() => handleLinkClick(item)}
                  sx={{ ...footerTextSx, cursor: "pointer", "&:hover": { color: "#3c60b6" } }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Box>

          <Box sx={{ flexShrink: 0, ml: { lg: "auto" } }}>
            <Typography
              sx={{
                ...footerTextSx,
                maxWidth: 280,
                textAlign: { xs: "center", lg: "left" },
                mb: { xs: 3, md: 3 },
                lineHeight: 1.6,
              }}
            >
              6/5/989, Srinagar Colony, Anantapur, Andhra Pradesh, 515002.
            </Typography>

            <Stack spacing={1.5} sx={{ mb: 4, alignItems: { xs: "center", lg: "flex-start" } }}>
              <Stack direction="row" spacing={1.25} alignItems="center">
                <EmailRoundedIcon sx={{ color: "#000000", fontSize: 20 }} />
                <Typography sx={{ ...footerTextSx, fontSize: 16 }}>contact@ronohub.com</Typography>
              </Stack>
              <Stack direction="row" spacing={1.25} alignItems="center">
                <PhoneRoundedIcon sx={{ color: "#000000", fontSize: 20 }} />
                <Typography sx={{ ...footerTextSx, fontSize: 16 }}>040-40261333</Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={1.5} alignItems="center" justifyContent={{ xs: "center", lg: "flex-start" }}>
              {socialLinks.map((item, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: "#000000",
                    color: "#ffffff",
                    "&:hover": { bgcolor: "#333333" }
                  }}
                >
                  <item.icon sx={{ fontSize: 18 }} />
                </IconButton>
              ))}
            </Stack>
          </Box>
        </Box>

        <Box
          sx={{
            maxWidth: "100%",
            mx: "auto",
            mt: { xs: 4, md: 6, lg: "60px" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ ...footerTextSx, fontSize: 16 }}>© 2026 Rono</Typography>
          <Typography sx={{ ...footerTextSx, fontSize: 16 }}>All rights reserved.</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
