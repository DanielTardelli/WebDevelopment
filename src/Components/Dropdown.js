import React, { useRef, useEffect } from 'react'
import { MenuItem, Typography, Box, Button } from '@mui/material'
import ReactDOM from 'react-dom'

import DropdownEntries from './DropdownEntries'

const Dropdown = (props) => {
    const [curMenu, setCurMenu] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event, origin) => {
        setCurMenu(origin)
        setAnchorEl(event.currentTarget);
    };

    const pages = props.pages
    const dropdownTextCSS = props.dropdownTextCSS

    return (
        <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {Object.entries(pages).map(([key, value]) => {
                return(
                    <>
                        <Button
                        onClick={(event) => handleClick(event, key)}
                        sx={{ my: 2, color: 'white', display: 'block', mr: 2}}
                        disableRipple>
                            <Typography className={dropdownTextCSS} sx={{fontWeight: 600}}> {key} </Typography>
                        </Button>
                        {(value.length != 0 && key == curMenu) && 
                            <DropdownEntries value={value} leftOffset={anchorEl == null ? null : anchorEl.offsetLeft} setCurMenu={setCurMenu}/>
                        }
                    </>
                )
            })}
        </Box>
    )
}

export default Dropdown;