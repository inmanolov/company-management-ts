import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";

import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";

const navItems = [
    {
        text: "Dashboard",
        headerName: "Dashboard",
        icon: <HomeOutlined />,
    },
    {
        text: "Companies",
        headerName: "CRUD",
        icon: null,
    },
    {
        text: "Companies",
        headerName: "CRUD Companies",
        icon: <PublicOutlined />,
    },
    {
        text: "employees",
        headerName: "CRUD Employees",
        icon: <Groups2Outlined />,
    },
    {
        text: "Employees Facing",
        headerName: "Employees Facing",
        icon: null,
    },
    {
        text: "Employees-in-bg",
        headerName: "Employees",
        icon: <Groups2Outlined />,
    },
    {
        text: "Teams",
        headerName: "Teams",
        icon: <Groups2Outlined />,
    },
    {
        text: "over-six-months",
        headerName: "Six Months",
        icon: <CalendarMonthOutlined />,
    },
    {
        text: "Teams",
        headerName: "Teams",
        icon: null,
    },
    {
        text: "Average",
        headerName: "Average Salary",
        icon: <ReceiptLongOutlined />,
    },
];

const Sidebar = ({
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile
}) => {

    const { pathname } = useLocation();
    const [active, setActive] = useState('');
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname])

    return (
        <Box component="nav" sx={{
        }}>
            {isSidebarOpen && (
                <Drawer
                    open={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    variant="persistent"
                    anchor="left"
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            color: theme.palette.secondary[200],
                            backgroundColor: theme.palette.background.alt,
                            boxSizing: "border-box",
                            borderWidth: isNonMobile ? 0 : "2px",
                            width: drawerWidth
                        }
                    }}
                >
                    <Box width="100%">
                        <Box m="1.5rem 2rem 2rem 3rem">
                            <FlexBetween color={theme.palette.secondary.main}>
                                <Box display="flex" alignItems="center" gap="0.5rem" >
                                    <Typography variant="h4" fontWeight="bold" >
                                        COMPANIES MANAGEMENT
                                    </Typography>
                                </Box>
                                {!isNonMobile && (
                                    <IconButton onClick={(prevSate) => setIsSidebarOpen(!prevSate)}>
                                        <ChevronLeft />
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <List>
                            {navItems.map(({ text, icon, headerName }) => {
                                if (!icon) {
                                    return (
                                        <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                                            {headerName}
                                        </Typography>
                                    )
                                }
                                const lcText = text.toLowerCase();

                                return (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(`/${lcText}`);
                                                setActive(lcText);
                                            }}
                                            sx={{
                                                backgroundColor:
                                                    active === lcText
                                                        ? theme.palette.secondary[300]
                                                        : "transparent",
                                                color:
                                                    active === lcText
                                                        ? theme.palette.primary[600]
                                                        : theme.palette.secondary[100],
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    ml: "2rem",
                                                    color:
                                                        active === lcText
                                                            ? theme.palette.primary[600]
                                                            : theme.palette.secondary[200],
                                                }}
                                            >
                                                {icon}
                                            </ListItemIcon>
                                            <ListItemText primary={headerName} />
                                            {active === lcText && (
                                                <ChevronRightOutlined sx={{
                                                    ml: "auto"
                                                }} />
                                            )}
                                        </ListItemButton>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Box>
                </Drawer>
            )}
        </Box>
    )
};


export default Sidebar;