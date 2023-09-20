import { Link as RouterLink } from "react-router-dom";

import { Box, Button, Link, Grid, TextField } from "@mui/material";

import { AuthLayout } from "../layout/AuthLayout";
import { Login } from "@mui/icons-material";

export const LoginPage = () => {
  return (
    <AuthLayout icon={<Login />} title="Login">
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
        >
          Login
        </Button>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid item>
            <Link component={RouterLink} variant="body2" to={"/auth/register"}>
              {"¿ No tenes una cuenta ? Registrate"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};
