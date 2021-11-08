import React, {useState} from 'react'
import {useHistory,} from 'react-router-dom'
import './styles/NavBar.css'
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Link,
} from "@material-ui/core";
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    // marginLeft: "0px",
    color: "white",
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      cursor: "pointer",
      // borderBottom: "1px solid white",
    },
  },
}));

const NavBar = (props) => {
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const pathname = window.location.href
  const frontendURL = process.env.REACT_APP_FRONTEND_URL
  const classes = useStyles()

  return (<>
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Link href="/" variant="h4" className={classes.logo}>
          WeShare
        </Link>
        <div className={classes.navlinks}>
          <Link href="/" className={classes.link}>
            Home
          </Link>
          <Link href="/groups" className={classes.link}>
            Groups
          </Link> 
        </div>
      </Toolbar>
    </AppBar>

  </>)
}
export default NavBar
