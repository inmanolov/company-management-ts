import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, Table, TableBody, TableContainer, TableHead, TableCell, TableRow, Paper, Popper, TextField, Button } from "@mui/material";
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Header from "components/Header";

import { useGetCompaniesQuery, useAddUpdateCompanyMutation, useAddCompanyMutation, useDeleteCompanyMutation } from "state/api";

const Companies = () => {
    const theme = useTheme();
    const { data, isLoading } = useGetCompaniesQuery();
    const [selecterRow, setSelectedRow] = useState({ id: '', name: '', country: '' });
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [id, setId] = useState();
    const [buttonLabel, setButtonLabel] = useState('Create');

    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);

    const [ addUpdateCompany, updateResponse ] = useAddUpdateCompanyMutation();
    const [ addCompany, addResponse ] = useAddCompanyMutation();
    const [ deleteCompany, deleteResponse ] = useDeleteCompanyMutation();

    const handleClose = () => setAnchorEl(null);

    useEffect(() => {
        if (selecterRow !== {}) {
            setName(selecterRow.name)
            setCountry(selecterRow.country)
            setId(selecterRow.id);
        }
    }, [selecterRow]);

    useEffect(() => {
        if (name == '' && country == '' && selecterRow == {}) {
            setButtonLabel('Create')
        }
    }, [name, country])

    const handleUpdate = (e) => {
        e.preventDefault()
        switch (buttonLabel) {
            case 'Create':
                if (name.length > 1 && country.length > 1) {
                    const newData = {
                        name,
                        country
                    }
                    addCompany(newData);
                    console.log(newData);

                    setName('')
                    setCountry('')
                } else {
                    setAnchorEl(e.currentTarget)
                }
                break;
            case 'Update':
                if (id && name.length > 1 && country.length > 1) {
                    const updateData = {
                        id,
                        name,
                        country
                    }
                    addUpdateCompany(updateData);
                    console.log(updateData);

                    setName('')
                    setCountry('')
                    setId('')
                    setSelectedRow({});
                    setId('');
                    setButtonLabel('Create');
                } else {
                    setAnchorEl(e.currentTarget)
                }
                break;
            default:
                break;
        }

    };

    const handleDelete = () => {
        deleteCompany(id);
        setSelectedRow({});
        setName('');
        setCountry('');
        setId('');
        setButtonLabel('Create');
    }

    const handleClearInputs = () => {
        setSelectedRow({ id: '', name: '', country: '' });
        setName('');
        setCountry('');
        setId('');
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
            <Header title="Companies" subtitle="Overview of all companies" />
            <Box m="15px 0px 15px 0px" width="85%">
                <Box sx={{ alignItems: 'center', display: { md: 'block', lg: 'flex' } }}>
                    <Box onClick={handleClose}>
                        <TextField
                            id="outlined-uncontrolled"
                            label="Company name"
                            value={name == null ? selecterRow.name : name}
                            onChange={(e) => setName(e.target.value)}
                            focused
                            sx={{ mt: "7px", ml: "3px" }}
                        />
                        <TextField
                            id="outlined-uncontrolled"
                            label="Country"
                            value={country == null ? selecterRow.country : country}
                            onChange={(e) => setCountry(e.target.value)}
                            focused
                            sx={{ mt: "7px", ml: "3px" }}
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
                                Name and Country must be filled
                            </Box>
                        </Popper>

                        <Button
                            variant="autlined"
                            onClick={(e) => handleUpdate(e)}
                        >{buttonLabel}</Button>

                        {buttonLabel == 'Update' && (
                            <Button
                                variant="autlined"
                                onClick={handleDelete}
                            >
                                Delete
                            </Button>
                        )}
                    </Box>

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
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '15px' }}>Country</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '15px' }}>Update</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row, i) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.country}</TableCell>
                                <TableCell
                                    onClick={() => {
                                        setSelectedRow(row)
                                        setButtonLabel('Update')
                                    }}
                                ><SystemUpdateAltIcon sx={{ cursor: 'pointer' }} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box
                position='fixed'
                bottom="25px"
                right="25px"
            >
                <Button
                    sx={{ color: 'gray' }}
                    onClick={scrollToTop}
                >
                    <ArrowCircleUpIcon 
                        sx={{  width: '45px', height: '45px' }}
                    />
                </Button>
            </Box>
        </Box>
    )
}

export default Companies;