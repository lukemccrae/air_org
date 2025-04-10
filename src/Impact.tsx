import { Box, Typography, Button } from "@mui/material";

export const ImpactSection = () => {
  return (
    <Box sx={{ padding: '32px 16px' }}>
      {/* Impact Numbers Section */}
      <Box sx={{
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, 
        gap: 2,
      }}>
        <Box sx={{ textAlign: 'center', borderRight: { md: '2px solid #ddd' }, padding: '16px' }}>
          <Typography variant="h3" sx={{ color: '#ed4d6e', fontWeight: 'bold' }}>12,000+</Typography>
          <Typography sx={{ color: '#333' }}>athletes educated about smart philanthropy through AFH Workshops</Typography>
        </Box>

        <Box sx={{ textAlign: 'center', borderRight: { md: '2px solid #ddd' }, padding: '16px' }}>
          <Typography variant="h3" sx={{ color: '#ed4d6e', fontWeight: 'bold' }}>200,000+</Typography>
          <Typography sx={{ color: '#333' }}>children positively impacted by AFH programming on a monthly basis</Typography>
        </Box>

        <Box sx={{ textAlign: 'center', borderRight: { md: '2px solid #ddd' }, padding: '16px' }}>
          <Typography variant="h3" sx={{ color: '#ed4d6e', fontWeight: 'bold' }}>1,600+</Typography>
          <Typography sx={{ color: '#333' }}>non-profits from all over the world impacted by AFH Athletes</Typography>
        </Box>

        <Box sx={{ textAlign: 'center', padding: '16px' }}>
          <Typography variant="h3" sx={{ color: '#ed4d6e', fontWeight: 'bold' }}>10,000+</Typography>
          <Typography sx={{ color: '#333' }}>AFH Athlete-led volunteer and advocacy activations in communities around the world</Typography>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
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
    </Box>
  );
};
