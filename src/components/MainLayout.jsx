import React from 'react'
import Sidebar from './layouts/Sidebar'
import Mainbar from './layouts/Mainbar'
import Stack from '@mui/material/Stack'

const MainLayout = () => {
  return (
    <Stack spacing={0} direction="row">
    <Sidebar />
    <Mainbar />
     </Stack>
  )
}

export default MainLayout