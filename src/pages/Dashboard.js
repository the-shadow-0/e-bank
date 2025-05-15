import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PaymentsIcon from '@mui/icons-material/Payments';
import { useNavigate } from 'react-router-dom';
import { cardStyles } from '../components/styles/CardStyles';

function Dashboard() {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Account Balance',
      value: '25,750 MAD',
      description: 'Your current available balance',
      icon: AccountBalanceIcon,
      route: '/account-management'
    },
    {
      title: 'Recent Transfers',
      value: '3 Transactions',
      description: 'Last 7 days activity',
      icon: PaymentsIcon,
      route: '/fund-management'
    },
    {
      title: 'Investment Portfolio',
      value: '50,000 MAD',
      description: 'Total invested amount',
      icon: TrendingUpIcon,
      route: '/trading'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
        مرحباً | Welcome to E-Bank Morocco
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ color: 'secondary.main', mb: 4 }}>
        Your trusted banking partner for secure and modern financial services
      </Typography>

      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={cardStyles.card}>
              <CardContent sx={cardStyles.cardContent}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: 3
                }}>
                  <Typography variant="h6" sx={cardStyles.cardTitle}>
                    {feature.title}
                  </Typography>
                  <feature.icon sx={{ 
                    color: 'primary.main',
                    fontSize: 32
                  }} />
                </Box>
                <Typography sx={cardStyles.cardValue}>
                  {feature.value}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'secondary.main'
                    }
                  }}
                  onClick={() => navigate(feature.route)}
                >
                  {feature.description}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      {/* Recent Transactions Section */}
      <Box sx={{ mt: 4 }}>
        // Add more content...
      </Box>
    </Container>
  );
}

export default Dashboard;
