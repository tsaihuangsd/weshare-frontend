import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './styles/NavBar.css'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const NavBar = (props) => {
  const pathname = window.location.href
  const frontendURL = process.env.REACT_APP_FRONTEND_URL

  return (<>
    <AppBar color="primary" position="static">
      <Toolbar>
        <TypoGraphy variant="title" color="inherit" >
          WeShare
        </TypoGraphy>
        
        <List component="nav">
          <ListItem component="div">
            <ListItemText inset>
              <TypoGraphy color="inherit" variant="title">
                Home
              </TypoGraphy>
            </ListItemText>
            <ListItemText inset>
              <TypoGraphy color="inherit" variant="title">
                Groups
              </TypoGraphy>
            </ListItemText>
            <ListItemText inset>
              <TypoGraphy color="inherit" variant="title">
                My Account
              </TypoGraphy>
            </ListItemText>
          </ListItem >
        </List>
      </Toolbar>
    </AppBar>
    
  </>)
}
export default NavBar
