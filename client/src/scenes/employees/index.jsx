import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, Table, TableBody, TableContainer, TableHead, TableCell, TableRow, Paper, Popper, TextField, Button } from "@mui/material";
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

import Header from "components/Header";

import { useGetEmployeesQuery, useDeleteEmployeeMutation, useUpdateEmployeeMutation, useCreateEmployeeMutation } from "state/api";

const Employees = () => {
    const theme = useTheme();
    const { data, isLoading } = useGetEmployeesQuery();
    const [selecterRow, setSelectedRow] = useState({ id: '', team_id: '', first_name: '', last_name: '', username: '', email: '', position: '', salary: '', startDate: '', endDate: '' });

    // console.log('data', data)
    // console.log('row', selecterRow);

    const [deleteEmployee, deleteResponse] = useDeleteEmployeeMutation();
    const [updateEmployee, updateResponse] = useUpdateEmployeeMutation();
    const [createEmployee, createResponse] = useCreateEmployeeMutation();

    const handleClose = () => setAnchorEl(null);

    const [buttonLabel, setButtonLabel] = useState('Create');
    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);

    const handleUpdateOrCreate = (e) => {
        e.preventDefault();
        switch (buttonLabel) {
            case 'Create':
                if (selecterRow.first_name.length > 1 && selecterRow.last_name.length > 1 && selecterRow.startDate.length > 1 && selecterRow.team_id.length >= 1) {
                    const newData = { 
                        team_id: selecterRow.team_id, 
                        first_name: selecterRow.first_name, 
                        last_name: selecterRow.last_name, 
                        username: selecterRow.username, 
                        email: selecterRow.email, 
                        position: selecterRow.position, 
                        salary: selecterRow.salary, 
                        startDate: selecterRow.startDate, 
                        endDate: selecterRow.endDate
                    }
                    createEmployee(newData);

                    setSelectedRow({ id: '', team_id: '', first_name: '', last_name: '', username: '', email: '', position: '', salary: '', startDate: '', endDate: '' });
                } else {
                    setAnchorEl(e.currentTarget)
                }
                break;
            case 'Update':
                if (selecterRow.first_name.length > 1 && selecterRow.last_name.length > 1 && selecterRow.startDate.length > 1 && selecterRow.team_id.length >= 1) {
                    const updateData = {
                        id: selecterRow.id, 
                        team_id: selecterRow.team_id, 
                        first_name: selecterRow.first_name, 
                        last_name: selecterRow.last_name, 
                        username: selecterRow.username, 
                        email: selecterRow.email, 
                        position: selecterRow.position, 
                        salary: selecterRow.salary, 
                        startDate: selecterRow.startDate, 
                        endDate: selecterRow.endDate
                    }
                    updateEmployee(updateData);

                    setSelectedRow({ id: '', team_id: '', first_name: '', last_name: '', username: '', email: '', position: '', salary: '', startDate: '', endDate: '' });
                    setButtonLabel('Create');
                } else {
                    setAnchorEl(e.currentTarget)
                }
                break;
            default:
                break;
        }
    }

    const handleDelete = () => {
        deleteEmployee(selecterRow.id);
        setSelectedRow({ id: '', team_id: '', first_name: '', last_name: '', username: '', email: '', position: '', salary: '', startDate: '', endDate: '' });
        setButtonLabel('Create');
    }

    const handleClearInputs = () => {
        setSelectedRow({ id: '', team_id: '', first_name: '', last_name: '', username: '', email: '', position: '', salary: '', startDate: '', endDate: '' });
        setButtonLabel('Create')
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <Box m="1.5rem 2.5rem">
            <Header title="Employees" subtitle="List of all employees" />
            <Box m="15px 0px 15px 0px" width="100%" sx={{ alignItems: 'center', display: 'block' }}>
                <Box onClick={handleClose}>
                    <TextField
                        id="outlined-uncontrolled"
                        label="First Name"
                        value={selecterRow.first_name ? selecterRow.first_name : ''}
                        onChange={(e) => setSelectedRow({ ...selecterRow, first_name: e.target.value })}
                        focused
                        sx={{ mt: "7px", ml: "3px", width: "19%", width: { lg: "19%" } }}
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Last Name"
                        value={selecterRow.last_name ? selecterRow.last_name : ''}
                        onChange={(e) => setSelectedRow({ ...selecterRow, last_name: e.target.value })}
                        focused
                        sx={{ mt: "7px", ml: "3px", width: "19%", width: { lg: "19%" } }}
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Position"
                        value={selecterRow.position ? selecterRow.position : ''}
                        onChange={(e) => setSelectedRow({ ...selecterRow, position: e.target.value })}
                        focused
                        sx={{ mt: "7px", ml: "3px", width: "19%", width: { lg: "19%" } }}
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Email"
                        value={selecterRow.email ? selecterRow.email : ''}
                        onChange={(e) => setSelectedRow({ ...selecterRow, email: e.target.value })}
                        focused
                        sx={{ mt: "7px", ml: "3px", width: "19%", width: { lg: "19%" } }}
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Salary"
                        value={selecterRow.salary ? selecterRow.salary : ''}
                        onChange={(e) => setSelectedRow({ ...selecterRow, salary: e.target.value })}
                        focused
                        sx={{ mt: "7px", ml: "3px", width: { lg: "19%" } }}
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Team ID"
                        value={selecterRow.team_id ? selecterRow.team_id : ''}
                        onChange={(e) => setSelectedRow({ ...selecterRow, team_id: e.target.value })}
                        focused
                        sx={{ mt: "9px", ml: "3px", width: { lg: "19%" } }}
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Username"
                        value={selecterRow.username ? selecterRow.username : ''}
                        onChange={(e) => setSelectedRow({ ...selecterRow, username: e.target.value })}
                        focused
                        sx={{ mt: "9px", ml: "3px", width: { lg: "19%" } }}
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Date Started"
                        value={selecterRow.startDate ? selecterRow.startDate : ''}
                        onChange={(e) => setSelectedRow({ ...selecterRow, startDate: e.target.value })}
                        focused
                        sx={{ mt: "9px", ml: "3px", width: { lg: "19%" } }}
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Date end"
                        value={selecterRow.endDate ? selecterRow.endDate : ''}
                        onChange={(e) => setSelectedRow({ ...selecterRow, endDate: e.target.value })}
                        focused
                        sx={{ mt: "9px", ml: "3px", width: { lg: "19%" } }}
                    />
                </Box>
                <Box sx={{ display: '' }}>

                    <Popper
                        id='spring-popper'
                        placement="top-start"
                        open={isOpen}
                        anchorEl={anchorEl}
                    >
                        <Box sx={{ border: 1, p: 1, bgcolor: '#5A5A5A', mb: "11px" }}>
                            All fields except "Date end" must be filed
                        </Box>
                    </Popper>

                    <Button
                        variant="autlined"
                        onClick={handleUpdateOrCreate}
                    >{buttonLabel}</Button>

                    {buttonLabel == 'Update' && (
                        <Button
                            variant="autlined"
                            onClick={handleDelete}
                        >
                            Delete
                        </Button>
                    )}

                    <Button
                        variant="autlined"
                        onClick={handleClearInputs}
                    >
                        Clear inputs
                    </Button>
                </Box>
            </Box>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '15px' }} >ID</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '15px' }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '15px' }}>Email</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '15px' }}>Position</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '15px' }}>Company</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '15px' }}>Department</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '15px' }}>Salary</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '15px' }}>Update</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((employee, i) => (
                            <TableRow key={employee.employeeId}>
                                <TableCell>{employee.employeeId}</TableCell>
                                <TableCell>{employee.first_name} {employee.last_name}</TableCell>
                                <TableCell>{employee.email}</TableCell>
                                <TableCell>{employee.position}</TableCell>
                                <TableCell>{employee.name}</TableCell>
                                <TableCell>{employee.department}</TableCell>
                                <TableCell>{employee.salary}</TableCell>
                                <TableCell
                                    onClick={() => {
                                        setSelectedRow({ id: employee.employeeId, team_id: employee.team_id, first_name: employee.first_name, last_name: employee.last_name, username: employee.username, email: employee.email, position: employee.position, salary: employee.salary, startDate: employee.startDate.slice(0, 10), endDate: employee.endDate })
                                        setButtonLabel('Update')
                                    }}
                                ><SystemUpdateAltIcon
                                        sx={{ cursor: 'pointer' }}
                                    /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box
                position='fixed'
                bottom="25px"
                right="20px"
            >
                <Button
                    sx={{ color: 'gray' }}
                    onClick={scrollToTop}
                >
                    <ArrowCircleUpIcon
                        sx={{ width: '45px', height: '45px' }}
                    />
                </Button>
            </Box>
        </Box>
    )
}

export default Employees;