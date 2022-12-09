import { Groups, Home, Layers, People, Person, Settings, Storefront, ModeNightRounded } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';

const Sidebar = ({mode, setMode}) => {
  return (
    <>
        <Box 
            // bgcolor="pink" 
            flex={1} 
            p={2} 
            sx={{ 
                display: { 
                    xs: "none", 
                    sm: "block"
            }}}
        >
            <Box position="fixed" >
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Home/>
                            </ListItemIcon>
                            <ListItemText primary="Homepage" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Layers/>
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Groups/>
                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Storefront/>
                            </ListItemIcon>
                            <ListItemText primary="Marketplace" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <People/>
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Settings/>
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Person/>
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <ModeNightRounded/>
                            </ListItemIcon>
                            <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
       
    </>
  )
}

export default Sidebar