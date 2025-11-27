import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, Toolbar, } from '@mui/material';
import React, { useState } from 'react';
import logo from '../images/code/Black___White_Minimalist_Business_Logo-removebg-preview (1).png';
import { Link, animateScroll } from 'react-scroll';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import LaptopIcon from '@mui/icons-material/Laptop';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel'
import style from './NavBar.module.css';
import { FiAlignJustify } from "react-icons/fi";


const links = [
  {
    id: "contact",
    text: "Contact me",
    icon: <ContactMailIcon fontSize='large'/>
  },
  {
    id: "work",
    text: "My Proyects",
    icon: <WorkIcon fontSize='large'/>
  },
  {
    id: "skills",
    text: "Skills",
    icon: <LaptopIcon fontSize='large'/>
  },
  {
    id: "about",
    text: "About me",
    icon: <PersonIcon fontSize='large' />
  },
  
]

const links2 = [
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
    text: "My Proyects",
    icon: <WorkIcon fontSize='large'/>
  },
  {
    id: "contact",
    text: "Contact me",
    icon: <ContactMailIcon fontSize='large'/>
  },
]

const Navbar = () => {
    const [open, setOpen] = useState(false);
    
    const scrollTop = () => {
       animateScroll.scrollToTop()
    }

    return ( 
        <>
          <div  className={style.root}>
            <Toolbar className={style.toolbar}>
              <List className={style.menu}>
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
              <div className={style.menuButton} onClick={() => setOpen(true)}>
                <FiAlignJustify className={style.burguer} size='50'/>
              </div>
          </Toolbar>
          </div>
          <Drawer anchor='right'  open={open} onClose={() => setOpen(false)}>
             <IconButton  onClick={()=>setOpen(false)} className={style.cancelButton}>
              <CancelIcon fontSize='large'/>
             </IconButton>
             <Divider />
             {
                    links2.map(({id, text, icon}, index)=>(
                      <Link 
                        className={style.sidebar}
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
 

export default Navbar;