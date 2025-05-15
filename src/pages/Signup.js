import React from 'react';
import { Container, Card, TextField, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Grid, MenuItem } from '@mui/material';

function Signup() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #c1272d 0%, #006233 100%)',
        py: 4
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {/* Info Section */}
          <Grid item xs={12} md={5}>
            <Box sx={{ color: 'white', pr: 2 }}>
              <Typography variant="h3" gutterBottom>
                Join E-Bank
              </Typography>
              <Typography variant="h5" gutterBottom>
                انضم إلينا
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Benefits:
                </Typography>
                {['Free account management', 'Secure online banking', '24/7 support', 'Mobile banking'].map((benefit) => (
                  <Box key={benefit} sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <Box sx={{ 
                      width: 8, 
                      height: 8, 
                      borderRadius: '50%', 
                      backgroundColor: '#006233',
                      mr: 2 
                    }} />
                    <Typography>{benefit}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Signup Form */}
          <Grid item xs={12} md={7}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                minHeight: '100%', 
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Box
                sx={{
                  p: 4,
                  background: 'linear-gradient(135deg, rgba(193,39,45,0.1) 0%, rgba(0,98,51,0.1) 100%)',
                }}
              >
                <Typography variant="h4" align="center" gutterBottom sx={{ color: '#c1272d', fontWeight: 600 }}>
                  Create Account | إنشاء حساب
                </Typography>
                <Typography variant="body1" align="center" sx={{ mb: 4, color: '#006233' }}>
                  Join E-Bank today
                </Typography>
                
                <form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        variant="outlined"
                        sx={{ backgroundColor: 'white' }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        variant="outlined"
                        sx={{ backgroundColor: 'white' }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        variant="outlined"
                        sx={{ backgroundColor: 'white' }}
                      />
                    </Grid>
                    
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        sx={{ backgroundColor: 'white' }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        sx={{ backgroundColor: 'white' }}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                      <TextField
                        select
                        fullWidth
                        label="Account Type"
                        defaultValue=""
                        variant="outlined"
                        margin="normal"
                        sx={{ 
                          backgroundColor: 'white',
                          mt: 2,
                          mb: 1
                        }}
                      >
                        <MenuItem value="personal">Personal Account</MenuItem>
                        <MenuItem value="business">Business Account</MenuItem>
                        <MenuItem value="savings">Savings Account</MenuItem>
                        <MenuItem value="investment">Investment Account</MenuItem>
                      </TextField>
                    </Grid>

                  <Button
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
                    Create Account
                  </Button>
                </form>
                
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Typography variant="body2">
                    Already have an account?{' '}
                    <Link to="/login" style={{ color: '#006233', fontWeight: 500 }}>
                      Login
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Signup;
