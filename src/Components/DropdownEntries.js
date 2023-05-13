import React, { useRef, useEffect } from 'react'
import { MenuItem, Typography } from '@mui/material'

// REFERENCES:
// COMPONENT HIDE ON EXTERIOR CLICK
// https://stackoverflow.com/questions/32553158/detect-click-outside-react-component?answertab=votes#tab-top

const DropdownEntries = ({value, leftOffset, setCurMenu}) => {
    
    const [visible, setVisible] = React.useState(false);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setCurMenu(null)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    },[])

    return (    
        <div ref={ref}>
            <div style={{position: 'absolute', top: '68px', left: leftOffset, backgroundColor: '#4a4a4a', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px', boxShadow: '0px 32px 35px 1px rgba(0,0,0,0.46)'}}>
            {value.map((elem) => {
                return(
                    <MenuItem dense disableRipple>
                        <Typography sx={{color: 'white', fontWeight: 500, fontSize: '18px', height: '30px'}}>{elem}</Typography>
                    </MenuItem>
                )
            })}
            </div>
        </div>
    )
}

export default DropdownEntries;