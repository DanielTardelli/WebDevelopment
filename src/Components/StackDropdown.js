import React, { useRef } from 'react'

import { Button, Chip, Divider, MenuItem, Paper, Typography, IconButton } from '@mui/material'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const StackDropdown = (props) => {
    const image = props.img
    const [dropDown, setDropDown] = React.useState(false);
    const [curHeight, setCurHeight] = React.useState(null)
    const ref = useRef(null);

    const handleMovement = () => {
        if (dropDown && ref.current) {
            ref.current.style.height = curHeight;
            setDropDown(false);
            setCurHeight(null);
        } else if (!dropDown && ref.current) {
            setCurHeight(ref.current.style.height)
            ref.current.style.height = "200px";
            setDropDown(true);
        }
    }

    return (
        <>
            <Paper ref={ref} sx={{height: {xs: "70px", sm: '80px'}, width: '90%', marginLeft: '5%', marginTop: '20px', transition: 'height 200ms ease-in-out'}} elevation={2}>
                <div style={{overflowY: 'hidden', height: '50px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}}>
                    <img src={image}/>
                </div>
                <Divider sx={{marginTop: {xs: '0px', sm: '5px'}, position: 'relative', bottom: '5px'}} variant="middle">
                    <IconButton onClick={handleMovement} style={{position: 'relative', bottom: '0px'}}>
                        <ArrowCircleDownIcon sx={{ fontSize: '17px' }}/>
                    </IconButton>
                </Divider>
                
            </Paper>
        </>
    )
}

export default StackDropdown;