import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children, isAuthenticated, onLogout }) {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      {isAuthenticated && <Navbar onLogout={onLogout} />}
      <Box sx={{ flex: 1 }}>
        {children}
      </Box>
      {isAuthenticated && <Footer />}
    </Box>
  );
}

export default Layout;
