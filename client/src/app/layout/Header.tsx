import { AppBar, Box, Switch, Typography } from '@mui/material'

interface Props {
  darkMode: boolean
  handleThemeChange: () => void
}

function Header({ darkMode, handleThemeChange }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Box display="flex" alignItems="center">
        <Typography variant="h6">RE_STORE</Typography>
        <Switch checked={darkMode} onChange={handleThemeChange} />
      </Box>
    </AppBar>
  )
}

export default Header
