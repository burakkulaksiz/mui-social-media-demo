import Add from './components/Add'
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'

const App = () => {
  const [mode,setMode] = useState("dark")

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar/>
      <Box bgcolor="background.default" color="text.primary">
        <Stack direction="row" spacing={2} justifyContent="space-between"> 
          <Sidebar mode={mode} setMode={setMode}/>
          <Feed />
          <Rightbar/>
        </Stack> 
        <Add/>
      </Box>
    </ThemeProvider>
  )
}

export default App