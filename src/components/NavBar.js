import {useState} from 'react'
import {useHistory,} from 'react-router-dom'
import './styles/NavBar.css'
import { AppBar, Box, Button, CssBaseline, IconButton, Link, Menu, MenuItem, Toolbar, useMediaQuery,
} from "@mui/material";
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';

import { useAuth0 } from "@auth0/auth0-react";   

const Logo = styled('div')(({ theme }) => ({
  fontSize: "30px",
  sx:"{{ display: { xs: 'none', sm: 'block' } }}",
  color: "white",
  cursor: "pointer",
}))

export default function NavBar(props) {
  const [userMenu, setUserMenu] = useState(false);
  const [mobileUserMenu, setMobileUserMenu] = useState(false);
  // const [userProfileModal, setUserProfileModal] = useState(false)
  // const [mobileUserProfileModal, setMobileUserProfileModal] = useState(false)
  
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const history = useHistory()
  const isDesktop = useMediaQuery('(min-width:900px)')
  const frontendURL = process.env.REACT_APP_FRONTEND_URL
  
  const toggleUserMenu = (event) => {
    setUserMenu(!userMenu);
  };
  
  const toggleMobileUserMenu = (event) => {
    setMobileUserMenu(!mobileUserMenu);
  };

  const signOut = async () => { // logs out the current user and redirects to the homepage
      await logout({returnTo: frontendURL})
      toggleUserMenu()
  };

  const signUp = async () => {
    await loginWithRedirect({screen_hint: 'signup', redirect_uri:`${frontendURL}/callback`})
  }

  const menuId = 'primary-search-account-menu';
  const renderUserMenu = (
    <Menu
      anchorEl={userMenu}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={userMenu}
      onClose={toggleUserMenu} >
      <MenuItem onClick={()=>{history.push("/userprofile")}}>Profile</MenuItem>
      <MenuItem onClick={()=>{signOut()}}>Sign Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileUserMenu = (
    <Menu
      anchorEl={mobileUserMenu}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={mobileUserMenu}
      onClose={toggleMobileUserMenu} >
      { isAuthenticated
      ? (<> 
          <MenuItem onClick={()=>{history.push("/groups")}}>Groups</MenuItem>
          <MenuItem onClick={()=>{history.push("/userprofile")}}>Profile</MenuItem>
          <MenuItem onClick={()=>{signOut()}}>Sign Out</MenuItem></>)
      : ( <MenuItem onClick={() => { signUp() }}>Sign Up/Login
          </MenuItem>)
      }
    </Menu>
  );

  return (<>
    <CssBaseline />
    <Box sx={{ flexGrow: 1 }}>    
      <AppBar position="static">
        <Toolbar>
          {!isDesktop && (<IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }} >
            <MenuIcon />
          </IconButton>)}
          <Logo onClick={()=>{history.push("/")}}>
            WeShare
          </Logo>          
          { isDesktop 
          ? (<>
              <Box sx={{  display: "flex", 
                          justifyContent: 'flex-end', 
                          flexGrow: 1 }}>
                  { isAuthenticated && 
                    ( <Link fontSize="20px"
                              href="/groups" 
                              color= "white" 
                              underline="hover"
                              padding="25px">
                          Groups
                      </Link>)}
              </Box>
              <Box>
              { isAuthenticated
              ? (<IconButton
                  size="large"
                  // edge="end"
                  // aria-label="account of current user"
                  // aria-controls={menuId}
                  // aria-haspopup="true"
                  onClick={toggleUserMenu}
                  color="inherit" >
                  <AccountCircle />
                </IconButton>)
              : (<Button  variant="contained" 
                          onClick={() => { signUp() }}>
                    Sign Up/Login</Button>)
              }
            </Box>
            </>)
          : (<Box sx={{  display: "flex", 
                  justifyContent: 'flex-end', 
                  flexGrow: 1 }}>
              <IconButton
                size="large"
                // aria-label="show more"
                // aria-controls={mobileMenuId}
                // aria-haspopup="true"
                onClick={toggleMobileUserMenu}
                color="inherit">
                <MoreIcon />
              </IconButton>
            </Box>)}
        </Toolbar>
      </AppBar>
      {renderMobileUserMenu}
      {renderUserMenu}
    </Box>
  </>
  )
}

