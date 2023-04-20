import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, Toolbar, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import logo from '../images/pexels-photo-574069.webp';
import { Link, animateScroll } from 'react-scroll';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import LaptopIcon from '@material-ui/icons/Laptop';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel'

const links = [
  {
    id: "about",
    text: "About me",
    icon: <PersonIcon fontSize='large' />
  },
  {
    id: "skills",
    text: "Skills",
    icon: <LaptopIcon fontSize='large'/>
  },
  {
    id: "work",
    text: "My Work",
    icon: <WorkIcon fontSize='large'/>
  },
  {
    id: "contact",
    text: "Get in touch",
    icon: <ContactMailIcon fontSize='large'/>
  },
  
]

const Navbar = () => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return ( 
        <>
            <AppBar position='sticky' className={classes.root}>
              <Toolbar className={classes.toolbar}>
                  <img src={logo} className={classes.logo} alt='Not Foud'/>
                <List className={classes.menu}>
                  {
                    links.map(({id, text}, index)=>(
                      <Link 
                        key={index} 
                        to={id} 
                        spy={true}
                        activeClass='active'
                        smooth={true}
                        duration={500}
                        offset={-70}
                        >
                          {text}
                      </Link>
                    ))
                  }
                </List>
                <IconButton edge="end" className={classes.menuButton} onClick={() => setOpen(true)}>
                  <MenuIcon fontSize='large'/>
                </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer anchor='right'  open={open} onClose={() => setOpen(false)}>
             <IconButton  onClick={()=>setOpen(false)} className={classes.cancelButton}>
              <CancelIcon fontSize='large'/>
             </IconButton>
             <Divider />
             {
                    links.map(({id, text, icon}, index)=>(
                      <Link 
                        className={classes.sidebar}
                        key={index} 
                        to={id} 
                        spy={true}
                        activeClass='active'
                        smooth={true}
                        duration={500}
                        offset={-70}
                        >
                          <ListItem component="h5">
                            <span>
                              <ListItemIcon>
                                {icon}
                              </ListItemIcon>
                            </span>
                            {text}
                          </ListItem>
                      </Link>
                    ))
                  }
          </Drawer>
        </>
     );
}
 
const useStyles = makeStyles((theme) => ({
    logo: {
      height: "1.5rem",
      objectFit: "contain", 
      "&:hover":{
        cursor: "pointer"
      }
    },

    root: {
      backgroundColor: "#fafafa",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 999
    },

    toolbar: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center"
    },

    menu: {
      [theme.breakpoints.down("sm")]: {
        display: "none"
      },
      '& a': {
        color: "#333",
        fontSize: "1.4rem",
        fontWeight: "bold",
        marginLeft: theme.spacing(3)
      },
      "& a:hover":{
        cursor: "pointer",
        color: "tomato",
        borderBotton: "3px solid tomato"
      }
    },
    menuButton: {
      display: "none",
      [theme.breakpoints.down("sm")]:{
        display: "block",
        color: "tomato",
        position: "absolute",
        top: 0,
        right: 10
      }
    },
    sidebar: {
      width: "40vw",
      [theme.breakpoints.down("sm")]:{
        width: "60vw"
      },
      "& h5":{
        margin: theme.spacing(10, 0, 0, 4),
        fontSize: "1.2rem",
        color: "#333",
        fontWeight: "bold"
      },
      "& h5:hover":{
        color: "tomato",
        cursor: "pointer"
      }
    },
    cancelButton: {
      color: "tomato",
      position: "absolute",
      top: 0,
      right: 10,
      "& a:hover":{
        cursor: "pointer",
        color: "tomato",
        borderBotton: "4px solid tomato"
      }
    }
    
  }))

export default Navbar;