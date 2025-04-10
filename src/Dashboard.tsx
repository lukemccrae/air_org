import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

export const Dashboard = () => {
  return (
    <AppBar sx={{ backgroundColor: '#69a2b0' }} position="fixed">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Typography
            variant="h1"
            noWrap
            component={Link}
            to="/"
            sx={{
              display: { md: 'flex' },
              flexGrow: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: '36px',
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
              alignItems: 'center',
              '&:hover': {
                color: '#ed4d6e',
              },
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ fontStyle: 'italic', fontSize: '24px', fontColor: 'black' }}>Anemia in Runners</Typography>
            </Box>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
