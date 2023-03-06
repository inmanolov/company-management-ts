import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { useGetEmployeesOverSixMonthsQuery } from "state/api";

import Header from "components/Header";

const OverSixMonths = () => {
    const theme = useTheme();
    const { data, isLoading } = useGetEmployeesOverSixMonthsQuery();
    
    const columns = [
        {
            field: "Start Date",
            headerName: "Start Date",
            flex: 0.5,
            renderCell: (params) => {
                return params.value.slice(0, 10);
            },
        },
        {
            field: "First Name",
            headerName: "First Name",
            flex: 0.5,
        },
        {
            field: "Last Name",
            headerName: "Last Name",
            flex: 0.5,
        },
        {
            field: "Position",
            headerName: "Position",
            flex: 0.4,
        },
        {
            field: "Company",
            headerName: "Company",
            flex: 0.4,
        },
    ];

    return (
        <Box m="1.5rem 2.5rem">
            <Header title="Employees over six months" subtitle="List of employees over six months in the company" />
            <Box mt="15px">
                <Typography fontWeight="bold" fontSize="20px" >Count of employees: {data?.length}</Typography>
            </Box>
            <Box mt="40px" height="65vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: theme.palette.background.alt,
                        color: theme.palette.secondary[100],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: theme.palette.primary.light,
                    },
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: theme.palette.background.alt,
                        color: theme.palette.secondary[100],
                        borderTop: "none",
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${theme.palette.secondary[200]} !important`,
                    },
                }}
            >
                <DataGrid
                    loading={isLoading || !data}
                    getRowId={(row) => row.employeeId}
                    rows={data || []}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}

export default OverSixMonths;