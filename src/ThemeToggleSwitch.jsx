import React from 'react';
import { Switch, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useColorMode } from './ThemeToggleProvider';

export default function ThemeToggleSwitch() {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'  gap={1}>
      <Brightness7Icon />
      <Switch
        checked={mode === 'dark'}
        onChange={toggleColorMode}
        color="default"
      />
      <Brightness4Icon />
    </Box>
  );
}