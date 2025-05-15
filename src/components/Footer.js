import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f8f9fa',
        color: 'text.secondary',
        py: 6,
        borderTop: '1px solid',
        borderColor: 'divider',
        background: 'linear-gradient(180deg, white 0%, rgba(193,39,45,0.05) 100%)'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ color: '#c1272d', fontWeight: 600 }} gutterBottom>
              E-Bank المغرب
            </Typography>
            <Typography variant="body2" sx={{ color: '#006233' }}>
              Your trusted partner in modern banking solutions. Experience excellence in digital banking.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ color: '#c1272d' }} gutterBottom>
              Services
            </Typography>
            <Link href="/online-banking" color="inherit" display="block" sx={{ mb: 1, color: '#006233' }}>
              Online Banking
            </Link>
            <Link href="/investments" color="inherit" display="block" sx={{ mb: 1, color: '#006233' }}>
              Investments
            </Link>
            <Link href="/insurance" color="inherit" display="block" sx={{ mb: 1, color: '#006233' }}>
              Insurance
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ color: '#c1272d' }} gutterBottom>
              Connect With Us
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton sx={{ color: '#006233', '&:hover': { color: '#c1272d' } }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton sx={{ color: '#006233', '&:hover': { color: '#c1272d' } }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: '#006233', '&:hover': { color: '#c1272d' } }}>
                <FacebookIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 5, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#006233' }}>
            © {new Date().getFullYear()} E-Bank Morocco. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
