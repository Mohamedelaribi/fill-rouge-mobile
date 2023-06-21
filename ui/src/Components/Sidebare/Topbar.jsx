import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./style/topbar.css";


const NavigationBar = () => {
  const showdate = new Date();
  const displaydate = showdate.getDate() + '/' + showdate.getMonth() + '/' + showdate.getFullYear();
  const displayTime = showdate.getHours() +':' + showdate.getMinutes();
  // + showdate.getFullYear() +' ;' + showdate.getMinutes();
  const dt = showdate.toDateString();
  return (

    <nav className="navBar">
      <div className="ContainerTitle">
          <h5 className="nameProfil">
              Bonjour "nom d'utilisateur"
          </h5>
          <span>{displayTime}  {dt}</span>
      </div>
      <div className="profilContainer">
        <button className="profil">
        <NotificationsIcon/>
        </button>
        <button className="profil">
        <PersonIcon/>
        </button>
      </div>
    </nav>
 
  );
};

export default NavigationBar;
