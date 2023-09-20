import { Link as RouterLink } from "react-router-dom";

import { Box, Button, Link, Grid, TextField } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

import { AppRegistration } from "@mui/icons-material";

export const RegisterPage = () => {
  return (
    <AuthLayout icon={<AppRegistration />} title="Registar">
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="Nombre"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Apellido"
              name="lastName"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password2"
              label="Confirma Password"
              type="password"
              id="password2"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Registrar
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
            <Link component={RouterLink} variant="body2" to={"/auth/login"}>
              ¿ Ya tenes cuenta ? Login
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};
