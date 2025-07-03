import Stack from '@mui/material/Stack'
import React from 'react'
import ThemeToggleProvider from '../../ThemeToggleProvider.jsx'
import ThemeToggleSwitch from '../../ThemeToggleSwitch.jsx'
import { Route, Routes } from "react-router-dom"
import Dashboard from '../modules/Dashboard.jsx'
import InsTraining from '../modules/InsTraining.jsx'
import ServiceVlog from '../modules/ServiceVlog.jsx'
import AmcCmcTracker from '../modules/AmcCmcTracker.jsx'
import AlertPhoto from '../modules/AlertPhoto.jsx'

const Mainbar = () => {
  return (
    <ThemeToggleProvider>
    <Stack spacing={4} direction="column" sx={{background:"#3e4444", color:"#fff", fontSize:"1.2rem", height:"100vh", width:"80vw",}}>
    <Stack spacing={2} direction="row" sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:"15px",}}>

        <Stack>
            dashboard   
        </Stack>
        <Stack spacing={2} direction="row" display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
            <div>About</div>
            <div>Contact Us</div>
            <ThemeToggleSwitch />

        </Stack>
    </Stack>
    <Stack spacing={2} direction="column">
        <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/instraining" element={<InsTraining/>}/>
        <Route path="/service" element={<ServiceVlog/>}/>
        <Route path="/amc" element={<AmcCmcTracker/>}/>
        <Route path="/photo" element={<AlertPhoto/>}/>
      </Routes>
    </Stack>
    </Stack>
    </ThemeToggleProvider>
  )
}

export default Mainbar