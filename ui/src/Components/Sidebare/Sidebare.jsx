import React, { useEffect, useState } from "react";
import "../../App.css";
import './style/sideBar.css';
import logo from "../../logo.png";
import LOGO from "../../logo2.png";

import { HiClipboardList } from "react-icons/hi";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebare = () => {
  
  let activeStyle = {
    color: "green",
  };

  let activeClassName = "color : red";

  const [imgSrc, setImgSrc] = useState(false);
  // const[windowSize,setWindowSize]= useState(false)
  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      if (window.innerWidth > 720) {
        setImgSrc(false);
      } else if (window.innerWidth < 720) {
        setImgSrc(true);
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    };
    handleResize();
  }, []);

  const handleChange = () => {
    setImgSrc(!imgSrc);
    console.log(imgSrc);
  };
  return (
    <div className="sideBarContainer">
      <CDBSidebar className="sideBar"
        textColor=""
        backgroundColor="#ffffff" >
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/">
              {!imgSrc ? (
                <img className="logo1 sc-gScZFl" src={logo} />
              ) : (
                <img className="logo2 sc-gScZFl" src={LOGO} />
              )}

              {}
            </NavLink>
            <NavLink exact to="/"
       style={({ isActive }) => 
       (isActive ? {color: '#00DEA3' , fontWeight:'650' } : {color: 'black'})
        
          }
          >
              <CDBSidebarMenuItem icon="home">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/taches"
            style={({ isActive }) => 
            (isActive ? {color: '#00DEA3' , fontWeight:'650'} : {color: 'black'})}
          
          
          >
              <CDBSidebarMenuItem icon="list">Tâches</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Calendrie"
                  style={({ isActive }) => 
                  (isActive ? {color: '#00DEA3' , fontWeight:'650'} : {color: 'black'})}
                  >

              <CDBSidebarMenuItem icon="th">Calendrier</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Appareil"
              style={({ isActive }) => 
              (isActive ? {color: '#00DEA3', fontWeight:'650'} : {color: 'black'})}
               >
              <CDBSidebarMenuItem icon="shopping-bag">
                Appareil
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profil" activeClassName="activeClicked"
               style={({ isActive }) => 
               (isActive ? {color: '#00DEA3', fontWeight:'650'} : {color: 'black'})}
               >
              <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/utilisateurs" activeClassName="activeClicked"
               style={({ isActive }) => 
               (isActive ? {color: '#00DEA3', fontWeight:'650'} : {color: 'black'})}
               >
              <CDBSidebarMenuItem icon="users">Utilisateurs</CDBSidebarMenuItem>
            </NavLink>

          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarHeader
          prefix={
            <i onClick={handleChange} className="fa fa-bars fa-large"></i>
          }
        >
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          ></a>
        </CDBSidebarHeader>
      </CDBSidebar>
    </div>
  );
};

export default Sidebare;
