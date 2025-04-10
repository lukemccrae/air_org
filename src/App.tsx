import { Box, Button, Container, Typography } from '@mui/material';
import { ImpactSection } from './Impact';
import { ColoredCircle } from './ColoredCircle';

export const App = () => {
  return (
    <Box
      component="main"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: 0,
          marginTop: '128px',
          flexDirection: 'column'
        }}
      >
        <Box>
          <Typography sx={{ fontSize: '32px', color: 'black' }}>
            We provide accessible, reliable anemia testing for runners to ensure they stay strong,
            healthy, and at their peak performance. Iron deficiency shouldn't hold you back – let's
            keep your energy where it belongs: on the track.
          </Typography>
          <Button
            sx={{
              backgroundColor: '#69a2b0', // Blue background
              color: 'white', // White text color
              padding: '10px 20px', // Padding for better clickability
              borderRadius: '4px', // Rounded corners
              '&:hover': {
                backgroundColor: '#ed4d6e', // Darker blue on hover
              },
            }}
          >
            Our Story
          </Button>
        </Box>
        <ImpactSection></ImpactSection>
      </Container>
    </Box>
  );
};
