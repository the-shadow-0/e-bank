import React from 'react';
import { Container, Card, CardContent, TextField, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Login({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #c1272d 0%, #006233 100%)',
        py: 8
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            borderRadius: 4,
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            overflow: 'hidden'
          }}
        >
          <Box
            sx={{
              p: 4,
              background: 'linear-gradient(135deg, rgba(193,39,45,0.1) 0%, rgba(0,98,51,0.1) 100%)',
            }}
          >
            <Typography variant="h4" align="center" gutterBottom sx={{ color: '#c1272d', fontWeight: 600 }}>
                Welcome | مرحبا بكم
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 4, color: '#006233' }}>
              Access your E-Bank account
            </Typography>
            
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                sx={{ backgroundColor: 'white' }}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                sx={{ backgroundColor: 'white' }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: '#c1272d',
                  '&:hover': {
                    backgroundColor: '#006233',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                Login
              </Button>
            </form>
            
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography variant="body2">
                Don't have an account?{' '}
                <Link to="/signup" style={{ color: '#006233', fontWeight: 500 }}>
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}

export default Login;
