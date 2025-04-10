import { Box } from "@mui/material";

export const ColoredCircle = () => {
  return (
    <Box
      sx={{
        width: 120,
        height: 120,
        backgroundColor: '#69a2b0', // blue outer
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: 60,
          height: 60,
          backgroundColor: '#ed4d6e', // red inner
          borderRadius: '50%',
        }}
      />
    </Box>
  );
};