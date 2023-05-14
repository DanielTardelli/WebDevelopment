import { Link, Outlet } from "react-router-dom"
import { AppBar, Toolbar, Typography, IconButton, Divider, Menu, Button, Box, collapseClasses, MenuItem, useScrollTrigger, Container, Grid, Paper } from "@mui/material"
import { Engineering } from "@mui/icons-material"
import { makeStyles } from '@mui/styles';
import React from "react"

import Dropdown from "../Components/Dropdown"
import Footer from "../Components/Footer";

const pages = {
    'Products':['Product1', 'Product2', 'Product3'], 
    'Pricing':[], 
    'Contact Us':[], 
    'About Us':['Our Mission', 'Meet Our Team']
}

const useStyles = makeStyles({
    textUnderline: {
        position: 'relative',
        '&:after': {
            content: "''",
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            borderBottom: '2px solid white',
            transform: 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 0.3s ease-in-out',
        },
        '&:hover:after': {
            transform: 'scaleX(1)'
        }
    },
    muiPaper: {
        background: '#696969',
        width: "fit-content",
        height: "fit-content"
    },
    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto'
    }
})

const ElevationScroll = (props) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(props.children, {
        elevation: trigger ? 4 : 0,
    })
}

const Layout = () => {
    const classes = useStyles();

    return(
        <>
            <ElevationScroll>
                <AppBar position="fixed" sx={{background: 'linear-gradient(191deg, rgba(0,0,0,1) 0%, rgba(83,83,83,1) 49%, rgba(126,126,126,1) 100%)'}}>
                    <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    >
                    <Toolbar>
                        <Engineering sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: 35}}/>
                        <Typography variant="h6" sx={{mr: 2, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600}}>
                            <Link to={"/"} style={{color: 'white', textDecoration: 'none'}}>Dan's Web Dev</Link>
                        </Typography>
                        <Divider orientation="vertical" variant="middle" flexItem sx={{backgroundColor: 'white', mr: 2}}/>
                        <Dropdown pages={pages} dropdownTextCSS={classes.textUnderline}/>
                    </Toolbar>
                    </Box>
                </AppBar>
            </ElevationScroll>
            <Outlet/>
        </>
    )
}

export default Layout;