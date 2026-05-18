// src/components/layout/BuiltForSection.js

import { Box, Typography, Container, useTheme, useMediaQuery } from '@mui/material';

const cards = [
  'Founders who want efficient systems',
  'Professionals who value simplicity',
  'Teams that need clarity in operations',
  'Businesses tired of overcomplicated software',
];

const Card = ({ label }) => (
  <Box
    sx={{
      width: 'fit-content',
      height: 50,
      boxSizing: 'border-box',
      border: '1px solid transparent',
      backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(93.64deg, #F25828 -15.8%, #F7CE25 149.03%)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      borderRadius: '8px',
      px: 3,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 1,
    }}
  >
    <Typography
      sx={{
        fontSize: 13,
        color: '#1a1a1a',
        fontWeight: 400,
        lineHeight: 1.2,
        textAlign: 'center',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </Typography>
  </Box>
);

const BuiltForSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          bgcolor: '#fff',
          /* NO minHeight, NO overflow:hidden on outer — let content dictate height */
        }}
      >
        {/* ── Decorative layer (absolutely positioned, purely visual) ── */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          {/* Watermark */}
          <Typography
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: isMobile ? 64 : isTablet ? 100 : 140,
              fontWeight: 900,
              color: 'rgba(0,0,0,0.045)',
              whiteSpace: 'nowrap',
              userSelect: 'none',
              letterSpacing: '-2px',
            }}
          >
            Rono is built for
          </Typography>

          {/* Radial gradient blob */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: isMobile ? 380 : isTablet ? 520 : 680,
              height: isMobile ? 380 : isTablet ? 520 : 680,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(242,88,40,0.88) 0%, rgba(247,150,40,0.65) 22%, rgba(247,206,37,0.42) 50%, rgba(255,255,255,0) 72%)',
            }}
          />

          {/* Concentric rings */}
          {[1, 1.6, 2.25].map((scale, i) => (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: isMobile ? 260 * scale : isTablet ? 360 * scale : 460 * scale,
                height: isMobile ? 260 * scale : isTablet ? 360 * scale : 460 * scale,
                borderRadius: '50%',
                border: '1.2px solid rgba(200,150,120,0.22)',
              }}
            />
          ))}
        </Box>

        {/* ── Content layer ── */}
        {isMobile ? (
          /* Mobile: simple vertical stack */
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              px: 2,
              py: 10,
            }}
          >
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: 800,
                color: '#111',
                textAlign: 'center',
                letterSpacing: '-0.5px',
                mb: 1,
                whiteSpace: 'nowrap',
              }}
            >
              Rono is built for
            </Typography>
            {cards.map((label, i) => (
              <Card key={i} label={label} />
            ))}
          </Box>
        ) : (
          /* Desktop / Tablet: 3-column × 3-row grid — container grows with content */
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr',
              gridTemplateRows: 'auto auto auto',
              columnGap: isTablet ? 6 : 10,
              rowGap: isTablet ? 8 : 12,
              px: isTablet ? 6 : 12,
              py: isTablet ? 10 : 14,
              alignItems: 'center',
            }}
          >
            {/* Row 1 */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Card label={cards[0]} />
            </Box>
            <Box /> {/* centre column empty */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Card label={cards[1]} />
            </Box>

            {/* Row 2 — heading */}
            <Box /> {/* left empty */}
            <Typography
              sx={{
                fontSize: isTablet ? 42 : 52,
                fontWeight: 800,
                color: '#111',
                textAlign: 'center',
                letterSpacing: '-0.5px',
                px: 2,
                whiteSpace: 'nowrap',
              }}
            >
              Rono is built for
            </Typography>
            <Box /> {/* right empty */}

            {/* Row 3 */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Card label={cards[2]} />
            </Box>
            <Box />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Card label={cards[3]} />
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default BuiltForSection;
 