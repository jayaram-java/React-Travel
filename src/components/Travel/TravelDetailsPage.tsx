import React, { useEffect, useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
    CircularProgress, Typography, Grid, Checkbox, FormControlLabel, TextField
} from '@mui/material';
import MenuBar from '../Menu/MenuBar';

type TravelDetail = {
    id: number;
    destination: string;
    date: string;
    purpose: string;
    package: string;
    travelDays: number;
};

const TravelDetailsPage = () => {
    const [travelData, setTravelData] = useState<TravelDetail[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const packageOptions = ['Premium', 'Standard', 'Luxury', 'Economy'];

    useEffect(() => {
        const fetchTravelDetails = async () => {
            try {
                await new Promise(res => setTimeout(res, 1000));
                const data: TravelDetail[] = [
                    { id: 1, destination: 'Paris', date: '2025-08-10', purpose: 'Business', package: 'Premium', travelDays: 5 },
                    { id: 2, destination: 'New York', date: '2025-09-15', purpose: 'Conference', package: 'Standard', travelDays: 3 },
                    { id: 3, destination: 'Tokyo', date: '2025-10-20', purpose: 'Vacation', package: 'Luxury', travelDays: 7 },
                    { id: 4, destination: 'London', date: '2025-11-01', purpose: 'Training', package: 'Standard', travelDays: 4 },
                    { id: 5, destination: 'Berlin', date: '2025-11-15', purpose: 'Workshop', package: 'Economy', travelDays: 2 },
                    { id: 6, destination: 'Sydney', date: '2025-12-05', purpose: 'Business', package: 'Premium', travelDays: 6 },
                    { id: 7, destination: 'Dubai', date: '2025-12-20', purpose: 'Exhibition', package: 'Luxury', travelDays: 5 },
                    { id: 8, destination: 'Singapore', date: '2026-01-10', purpose: 'Conference', package: 'Standard', travelDays: 3 },
                    { id: 9, destination: 'Rome', date: '2026-01-25', purpose: 'Cultural Exchange', package: 'Economy', travelDays: 4 },
                    { id: 10, destination: 'Bangkok', date: '2026-02-15', purpose: 'Team Building', package: 'Standard', travelDays: 3 },
                    { id: 11, destination: 'Toronto', date: '2026-03-01', purpose: 'Training', package: 'Premium', travelDays: 6 },
                    { id: 12, destination: 'Cape Town', date: '2026-03-20', purpose: 'Research', package: 'Luxury', travelDays: 7 },
                ];
                setTravelData(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load travel details');
                setLoading(false);
            }
        };

        fetchTravelDetails();
    }, []);

    const handlePackageChange = (pkg: string) => {
        setSelectedPackages((prev) =>
            prev.includes(pkg) ? prev.filter(p => p !== pkg) : [...prev, pkg]
        );
    };

    const filteredData = travelData.filter(row =>
        (selectedPackages.length === 0 || selectedPackages.includes(row.package)) &&
        row.package.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <>
           
            <Grid container spacing={2} sx={{ mt: 2, px: 2 }}>
                {/* Sidebar Filter */}
             
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="subtitle1" gutterBottom>PACKAGE</Typography>
                        <TextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            placeholder="Search Package"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div style={{ marginTop: 10 }}>
                            {packageOptions.map((pkg) => (
                                <FormControlLabel
                                    key={pkg}
                                    control={
                                        <Checkbox
                                            checked={selectedPackages.includes(pkg)}
                                            onChange={() => handlePackageChange(pkg)}
                                        />
                                    }
                                    label={pkg}
                                />
                            ))}
                        </div>
                    </Paper>
                

                {/* Table */}
                
                    <TableContainer component={Paper}>
                        <Typography variant="h6" align="center" gutterBottom>
                            Travel Details
                        </Typography>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Destination</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Purpose</TableCell>
                                    <TableCell>Package</TableCell>
                                    <TableCell>Travel Days</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredData.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell>{row.id}</TableCell>
                                        <TableCell>{row.destination}</TableCell>
                                        <TableCell>{row.date}</TableCell>
                                        <TableCell>{row.purpose}</TableCell>
                                        <TableCell>{row.package}</TableCell>
                                        <TableCell>{row.travelDays}</TableCell>
                                    </TableRow>
                                ))}
                                {filteredData.length === 0 && (
                                    <TableRow>
                                        <TableCell colSpan={6} align="center">
                                            No matching records found.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
              
            </Grid>
        </>
    );
};

export default TravelDetailsPage;
