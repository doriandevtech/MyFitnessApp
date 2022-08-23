import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <Typography variant="h5" mt="20px">
          💪 MyFitnessApp
        </Typography>
        <Typography variant="h5" pb="40px" mt="20px">
          ✨ Made with 💪 by DE ✨
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
