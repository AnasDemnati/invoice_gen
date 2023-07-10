import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import RegisterForm from './Form';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <Navbar />
      <Container disableGutters>
        <Box sx={{ my: 4 }}>
          <RegisterForm />
        </Box>
      </Container>
    </div>
  );
}
