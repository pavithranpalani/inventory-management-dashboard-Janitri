import React from 'react'
import Stack from '@mui/material/Stack';

const Sidebar = () => {
  return (
    <Stack spacing={4} direction="column" sx={{
        background:"black", color:"white", fontSize:"1.2rem", height:"100vh", width:"20vw",
    }}>
        <Stack spacing={2} direction="row">JANITRY CRM + INVENTORY </Stack>
        <Stack spacing={2} direction="column">
            
                <div className='menu-link'>Dashboard</div>
                <div className='menu-link'>Installation and trainig </div>
                <div className='menu-link'>Service visit logs</div>
                <div className='menu-link'>AMC/CMC tracker</div>
                <div className='menu-link'>Alerts and photo logs</div>
            
        </Stack>
    </Stack>
  )
}

export default Sidebar