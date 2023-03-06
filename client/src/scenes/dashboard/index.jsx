import React,  { useState, useEffect } from "react";
import { Box, Typography, useTheme, Table, TableBody, TableContainer, TableHead, TableCell, TableRow, Paper, Popper, TextField, Button } from "@mui/material";
import Header from "components/Header";

const Dashboard = () => {
    return (
        <Box m="1.5rem 2.5rem">
            <Header title="Dashboard" subtitle="Summmary of companies data" />
            <Box m="10rem 20%">
                <Header subtitle="Still in development keep going on other tabs" />
            </Box>
        </Box>
    )
};

export default Dashboard;