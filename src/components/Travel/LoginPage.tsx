import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Alert } from '@mui/material';

type Props = {
    onLogin: (username: string) => void;
};

const LoginPage = ({ onLogin }: Props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if ((username === 'admin' && password === 'admin') || (username === 'jayaram' && password === 'ab12345')) {
            onLogin(username);
            setError('');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <Box
            sx={{
                width: 300,
                margin: '100px auto',
                padding: 4,
                boxShadow: 3,
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
            }}
        >
            <Typography variant="h5" align="center">
                Login Page
            </Typography>

            <TextField
                label="Username"
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button
                variant="contained"
                color="primary"
                onClick={handleLogin}
                fullWidth
            >
                Login
            </Button>

            {error && <Alert severity="error">{error}</Alert>}
        </Box>
    );
};

export default LoginPage;
