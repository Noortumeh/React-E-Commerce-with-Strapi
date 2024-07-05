import { KeyboardArrowUp } from '@mui/icons-material'
import { Fab, Zoom, useScrollTrigger } from '@mui/material'
import React from 'react'

export default function scrollToTop() {
    return (
        <Zoom in={useScrollTrigger()}>
            <Fab 
            onClick={()=>{
                window.scrollTo({top: 0, behavior: 'smooth'})
            }}
            size='small' sx={{position : "fixed", bottom: 33, right: 33,}} color="primary" aria-label="add">
                <KeyboardArrowUp fontSize="medium" />
            </Fab>
        </Zoom>
    )
}
