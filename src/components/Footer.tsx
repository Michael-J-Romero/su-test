import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f9f9f9',
        py: 4,
        px: { xs: 2, md: 6 },
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Stack   flexDirection="row" justifyContent="space-between" alignItems="center">
        <Stack spacing={1}>
        <Typography variant="body2" color="text.primary">
          9663 Santa Monica Blvd., #1015
        </Typography>
        <Typography variant="body2" color="text.primary">
          Beverly Hills, CA 90210, USA
        </Typography>
        <Typography variant="body2" color="text.primary">
          818-623-9898
        </Typography>
        <Typography variant="body2" color="text.primary">
          Email: <a href="mailto:info@suxiaobai-foundation.org" style={{ color: 'inherit', textDecoration: 'none' }}>info@suxiaobai-foundation.org</a>
        </Typography>
        </Stack>
      <Stack 
      justifyContent="center"
      alignItems="flex-end"

      >

        <Logo vertical/>
        <Typography variant="body2" color="text.primary" sx={{ mt: 1 }}>
          &copy; 2025 Su Xiaobai Foundation
        </Typography>
      </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
