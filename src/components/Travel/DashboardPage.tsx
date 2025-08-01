import React from 'react'
import { Typography, Box, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import MenuBar from '../Menu/MenuBar';

// Sample travel data for the graph
const travelData = [
  { month: 'Jan', trips: 4, cost: 12000 },
  { month: 'Feb', trips: 6, cost: 18000 },
  { month: 'Mar', trips: 3, cost: 9000 },
  { month: 'Apr', trips: 5, cost: 15000 },
  { month: 'May', trips: 8, cost: 24000 },
  { month: 'Jun', trips: 6, cost: 20000 },
];

const DashboardPage = () => {
  return (
     <>
          
            <Box sx={{ p: 4 }}>
                <Typography variant="h4" align="center">Dashboard Overview</Typography>

                
        {/* Stat Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
       
            <Card>
              <CardContent>
                <Typography variant="h6">Total Trips</Typography>
                <Typography variant="h4" color="primary">32</Typography>
              </CardContent>
            </Card>
         

       
            <Card>
              <CardContent>
                <Typography variant="h6">Pending Approvals</Typography>
                <Typography variant="h4" color="error">5</Typography>
              </CardContent>
            </Card>
         
            <Card>
              <CardContent>
                <Typography variant="h6">Total Travel Cost</Typography>
                <Typography variant="h4" color="secondary">₹92,000</Typography>
              </CardContent>
            </Card>
          
        </Grid>

        {/* Travel Graph */}
        <Typography variant="h6" gutterBottom>
          Monthly Travel Report
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={travelData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="trips" stroke="#1976d2" name="Trips" />
            <Line type="monotone" dataKey="cost" stroke="#9c27b0" name="Cost (₹)" />
          </LineChart>
        </ResponsiveContainer>
            </Box>
        </>
  )
}

export default DashboardPage
