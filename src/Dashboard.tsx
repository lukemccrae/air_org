import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

export const Dashboard = () => {
  return (
    <AppBar sx={{ backgroundColor: '#515B63' }} position="fixed">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              display: { md: 'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
              alignItems: 'center',
              '&:hover': {
                color: '#E3A446',
              },
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ fontStyle: 'italic' }}>Anemia</Typography>
              <Typography sx={{ fontStyle: 'italic' }}>in Runners</Typography>
            </Box>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
