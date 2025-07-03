import Stack from '@mui/material/Stack'
import React from 'react'

const Mainbar = () => {
  return (
    <Stack spacing={4} direction="column" sx={{background:"#3e4444", color:"#fff",}}>
    <Stack spacing={2} direction="column" >

        <div>
            
        </div>
        <div>
            <div>About</div>
            <div>Contact Us</div>
        </div>
    </Stack>
    <Stack spacing={2} direction="column"></Stack>
    </Stack>
  )
}

export default Mainbar