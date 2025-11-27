import { Drawer, IconButton, List, ListItem, ListItemIcon, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { Link, animateScroll } from "react-scroll";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import LaptopIcon from "@mui/icons-material/Laptop";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CancelIcon from "@mui/icons-material/Cancel";
import style from "./NavBar.module.css";
import { FiAlignJustify } from "react-icons/fi";

const links = [
  { id: "about", text: "About me" },
  { id: "skills", text: "Skills" },
  { id: "work", text: "My Projects" },
  { id: "contact", text: "Contact" },
];

const linksMobile = [
  { id: "about", text: "About me", icon: <PersonIcon fontSize="large" /> },
  { id: "skills", text: "Skills", icon: <LaptopIcon fontSize="large" /> },
  { id: "work", text: "My Projects", icon: <WorkIcon fontSize="large" /> },
  { id: "contact", text: "Contact", icon: <ContactMailIcon fontSize="large" /> },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <>
      <header className={style.root}>
        <Toolbar className={style.toolbar}>
          <div className={style.logo} onClick={scrollTop}>
            <span className={style.logoInitials}>OB</span>
            <span className={style.logoText}>Oscar Burgos</span>
          </div>

          <List className={style.menu}>
            {links.map(({ id, text }) => (
              <Link
                key={id}
                to={id}
                spy={true}
                activeClass={style.active}
                smooth={true}
                duration={500}
                offset={-80}
                className={style.menuLink}
              >
                {text}
              </Link>
            ))}
          </List>

          <div className={style.menuButton} onClick={() => setOpen(true)}>
            <FiAlignJustify className={style.burguer} size={32} />
          </div>
        </Toolbar>
      </header>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className={style.drawer}>
          <IconButton onClick={() => setOpen(false)} className={style.cancelButton}>
            <CancelIcon fontSize="large" />
          </IconButton>
          {linksMobile.map(({ id, text, icon }) => (
            <Link
              key={id}
              to={id}
              spy={true}
              activeClass={style.active}
              smooth={true}
              duration={500}
              offset={-80}
              className={style.sidebar}
              onClick={() => setOpen(false)}
            >
              <ListItem component="div" className={style.sidebarItem}>
                <ListItemIcon>{icon}</ListItemIcon>
                {text}
              </ListItem>
            </Link>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
