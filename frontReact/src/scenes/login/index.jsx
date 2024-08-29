import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Email:', email);
    console.log('Password:', password);
    // Simulação de login bem-sucedido
    setIsAuthenticated(true);
    navigate('/');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
      position="fixed"
      top={0}
      left={0}
      bgcolor="background.default"
    > 
      <Box mb={2}>
        <img src="./assets/image.png" alt="logo" style={{ width: '150px' }} />
      </Box>
      <Typography variant="h4" mb={2}>Login</Typography>
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        sx={{ mt: 2 }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;