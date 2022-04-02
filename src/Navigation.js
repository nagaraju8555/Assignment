/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import PaidIcon from '@mui/icons-material/Paid';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
const useStyles = makeStyles((theme) => ({
    // eslint-disable-next-line no-labels
    drawerPaper: {
      width: "inherit",
  
    
    },
  }));


function Navigation() {

    const classes = useStyles();
  return (
    <Drawer
    style={{ width: "20%", height: "100%" }}
      variant="persistent"
      anchor="left"
      open={true}
      classes={{ paper: classes.drawerPaper }}
    >
      <p
        style={{
          lineHeight: "2vw",
          textAlign: "center",
          textDecoration: "none",
          fontSize : "25px"
        }}
        className="menutitle pt-2"
      >
        <NavLink exact to="/" className="menutitle">
          <span style={{ color: "red" }}><b>Zendenta</b></span>
        </NavLink>
      </p>

      <Divider />

      {/* -------------------------------------------- Navigation Start----------------------------------------------- */}
      <List >
        <NavLink
          exact
          to="/"
          className="navigation_text"
          activeStyle={{ color: "#f14b1d" , backgroundColor : "red"}}
        >
          <ListItem button>
            <ListItemIcon>
              <ManageSearchIcon />
            </ListItemIcon>
            <ListItemText primary={"Overview"} />
          </ListItem>
        </NavLink>
      </List>
      
      <List>
        <NavLink
          exact
          to="/calendar"
          className="navigation_text"
          activeStyle={{ color: "#f14b1d" }}
        >
          <ListItem button>
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText primary={"Calendar"} />
          </ListItem>
        </NavLink>
      </List>
      <List>
        <NavLink
          exact
          to="/patientlist"
          className="navigation_text"
          activeStyle={{ color: "#f14b1d" }}
        >
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={"patient List"} />
          </ListItem>
        </NavLink>
      </List>
      <List>
        <NavLink
          exact
          to="/messages"
          className="navigation_text"
          activeStyle={{ color: "#f14b1d" }}
        >
          <ListItem button>
            <ListItemIcon>
              <MessageIcon />
            </ListItemIcon>
            <ListItemText primary={"Messages"} />
          </ListItem>
        </NavLink>
      </List>
      <List>
        <NavLink
          exact
          to="/payment"
          className="navigation_text"
          activeStyle={{ color: "#f14b1d" }}
        >
          <ListItem button>
            <ListItemIcon>
              <PaidIcon />
            </ListItemIcon>
            <ListItemText primary={"Payment Information"} />
          </ListItem>
        </NavLink>
      </List>
      <List>
        <NavLink
          exact
          to="/settings"
          className="navigation_text"
          activeStyle={{ color: "#f14b1d" }}
        >
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={"Settings"} />
          </ListItem>
        </NavLink>
      </List>
     

   
      {/* -------------------------------------------- Navigation End----------------------------------------------- */}
    </Drawer>
  );
}
export default Navigation;
