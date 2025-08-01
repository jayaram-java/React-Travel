import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

type Props = {
    username: string;
    onLogout: () => void;
};

const MenuBar = ({ username,onLogout }: Props) => {
    return (
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">Travel App</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
                    <Button color="inherit" component={Link} to="/traveldetails">Travel Details</Button>
                     <Typography variant="body1">
                        Welcome, {username}
                    </Typography>
                    <Button color="inherit" onClick={onLogout}>
                    Logout
                    </Button>
                </Box>
            </Toolbar> 
        </AppBar>
    );
};

export default MenuBar;
