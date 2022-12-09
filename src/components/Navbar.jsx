import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Box, InputBase, styled, Toolbar, Typography, Icon, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled(Icon)(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
        <StyledToolbar>
            <Typography variant="h6" sx={{ 
                display: {
                    xs:"none", 
                    sm: "block"
                }
            }}>BRK DEV</Typography>
            <Pets
                sx={{ 
                    display: {
                        xs:"block", 
                        sm: "none"
                    }
                }}
            />
            <Search sx={{ textAlign: "left", display: "flex"}}>
                <InputBase placeholder='search...' sx={{ width: "100%"}}></InputBase>
            </Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <Mail  />
                </Badge>
                <Badge badgeContent={4} color="error">
                    <Notifications  />
                </Badge>
                <Avatar 
                    src="https://source.unsplash.com/user/c_v_r/100x100" 
                    sx={{ width: "30px", height: "30px"}}
                    onClick={e => setOpen(true)}
                />
            </Icons>
            <UserBox onClick={e => setOpen(true)}>
                <Avatar
                    sx={{ width: 30, height:30}}
                    src="https://source.unsplash.com/user/c_v_r/100x100"
                />
                <Typography variant="span">John</Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={e => setOpen(false)}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar