import React, { useEffect, useRef, useState } from 'react'

import { Card } from '@mui/material'
import { makeStyles } from '@mui/styles'

const styles = makeStyles({
    cardEffects: {
        "&:hover": {
            boxShadow: "-1px 5px 200px -9px rgba(0,0,0,0.76)",
        }
    }
})

const CustomCard = (props) => {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const classes = styles();

    const handleTilt = (event) => {
        console.log(event.clientX, event.clientY)
        let box = ref2.current.getBoundingClientRect();
        let xCenter = box.left + box.width / 2;
        let yCenter = box.top + box.height / 2;
        ref.current.style.transform = `perspective(1000px) rotateY(${(event.clientX - xCenter) * 0.07}deg) rotateX(${(event.clientY - yCenter) * -0.07}deg)`
        console.log(xCenter, yCenter);
    }

    const handleExit = (event) => {
        ref.current.style.transform = "";
    }

    useEffect(() => {
        if (ref.current && ref2.current) {
            ref2.current.addEventListener("mousemove", (event) => handleTilt(event), true);
            ref2.current.addEventListener("mouseleave", (event) => handleExit(event), true);
            return () => {
                ref2.current.removeEventListener("mousemove", handleTilt, true);
                ref2.current.removeEventListener("mouseleave", handleExit, true);
            }
        }
    }, [])

    return (
        <div ref={ref2}>
            <Card ref={ref} sx={{width: props.wwidth}} className={classes.cardEffects}>
                {props.children}
            </Card>
        </div>
    )
}


export default CustomCard