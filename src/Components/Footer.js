import React, { useState, useRef } from 'react'

const Footer = (props) => {

    const [curHeight, setCurHeight] = React.useState(null);
    const ref = useRef(null);

    return(
        <div ref={ref} style={{flexShrink: 0}}>
            {props.children}
        </div>
    )
}

export default Footer