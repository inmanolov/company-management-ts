import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { useGetAverageSalaryQuery } from "state/api";

import Header from "components/Header";

const Average = () => {
    const theme = useTheme();
    const { data, isLoading } = useGetAverageSalaryQuery();

    const columns = [
        {
            field: "id",
            headerName: "Team ID",
            flex: 0.5,
        },
        {
            field: "Team Name",
            headerName: "Team Name",
            flex: 0.5,
        },
        {
            field: "Department",
            headerName: "Department",
            flex: 0.5,
        },
        {
            field: "Employees",
            headerName: "Employees",
            flex: 0.4,
        },
        {
            field: "Average Salary",
            headerName: "Average Salary",
            flex: 0.5,
            renderCell: (params) => {
                const fixedValue = Number(params.value).toFixed(2)
                return fixedValue;
            },
        },
    ];
    return (
        <Box m="1.5rem 2.5rem">
            <Header title="Average salary" subtitle="Average salary for teams by department" />
            <Box mt="40px" height="75vh"
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
                    getRowId={(row) => row.id}
                    rows={data || []}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Average;