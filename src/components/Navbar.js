import React from 'react';
import { AppBar, Toolbar, Button, Box, Container, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import MoroccanFlag from './MoroccanFlag';

function Navbar({ onLogout }) {
  const navigate = useNavigate();

  const navButtons = [
    { text: 'Dashboard', path: '/' },
    { text: 'Accounts', path: '/account-management' },
    { text: 'Funds', path: '/fund-management' },
    { text: 'Trading', path: '/trading' }
  ];

  return (
    <AppBar position="static" sx={{ 
      backgroundColor: 'primary.main',
      '& .MoroccanFlag': {
        filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.3))'
      }
    }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <MoroccanFlag />
            <Typography variant="h6" component={Link} to="/" sx={{ 
              color: 'white',
              textDecoration: 'none',
              fontWeight: 600
            }}>
              E-Bank المغرب
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2 }}>
            {navButtons.map((button) => (
              <Button
                key={button.text}
                color="inherit"
                onClick={() => navigate(button.path)}
                sx={{
                  '&:hover': {
                    backgroundColor: 'secondary.main'
                  }
                }}
              >
                {button.text}
              </Button>
            ))}
            <Button
              color="inherit"
              onClick={onLogout}
              sx={{
                border: '1px solid',
                ml: 2,
                '&:hover': {
                  backgroundColor: 'secondary.main'
                }
              }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
