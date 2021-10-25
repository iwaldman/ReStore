import { AppBar, Typography } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Typography variant="h6">RE_STORE</Typography>
    </AppBar>
  )
}

export default Header
