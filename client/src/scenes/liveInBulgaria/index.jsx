import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import Header from "components/Header";

import { useGetEmployeesLiveInBulgariaQuery } from "state/api";

const EmployeesLiveInBulgaria = () => {
    const theme = useTheme()
    const { data, isLoading } = useGetEmployeesLiveInBulgariaQuery();

    const columns = [
        {
            field: "username",
            headerName: "Username",
            flex: 0.5,
        },
        {
            field: "first_name",
            headerName: "First Name",
            flex: 0.5,
        },
        {
            field: "last_name",
            headerName: "Last Name",
            flex: 0.5,
        },
        {
            field: "country",
            headerName: "Country",
            flex: 0.4,
        },
        {
            field: "department",
            headerName: "Department",
            flex: 1,
        },
        {
            field: "position",
            headerName: "Position",
            flex: 1,
        },
        {
            field: "description",
            headerName: "Description",
            flex: 1,
        },
        {
            field: "startDate",
            headerName: "From",
            flex: 0.5,
            renderCell: (params) => {
                return params.value.slice(0, 10)
            },
        },
    ];


    return (
        <Box m="1.5rem 2.5rem">
            <Header title="Employees" subtitle="List of Employees that live in Bulgaria and in the company more than 10 years" />
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
                      overflowX: "scroll",
                }}
            >
                <DataGrid
                    loading={isLoading || !data}
                    getRowId={(row) => row.username}
                    rows={data || []}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}

export default EmployeesLiveInBulgaria;