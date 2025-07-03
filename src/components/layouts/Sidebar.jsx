import React from 'react'
import Stack from '@mui/material/Stack';

const Sidebar = () => {
  return (
    <Stack spacing={4} direction={'column'} sx={{
        background:"black", color:"white", fontSize:"1.2rem", height:"100vh", width:"30vw",
    }}>
        <Stack spacing={2} direction={row}>JANITRY CRM + INVENTORY </Stack>
        <Stack spacing={2} direction={row}>
            <ul className='sidbar-menu'>
                <li className='menu-link'>Dashboard</li>
                <li className='menu-link'>Installation and trainig </li>
                <li className='menu-link'>Service visit logs</li>
                <li className='menu-link'>AMC/CMC tracker</li>
                <li className='menu-link'>Alerts and photo logs</li>
            </ul>
        </Stack>
    </Stack>
  )
}

export default Sidebar