import { Avatar, Box, Container, Typography } from "@mui/material";

export const AuthLayout = ({ children, icon, title = "" }) => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>{icon}</Avatar>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        {children}
      </Box>
    </Container>
  );
};
