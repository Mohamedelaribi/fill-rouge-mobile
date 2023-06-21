import React, { useEffect, useState } from "react";
import { BsToggle2On, BsCheckLg } from "react-icons/bs";
import AdminModel from "./Models/AdminModel";
import "./style/admin.css";
import Switch from "@mui/material/Switch";

import {
  MDBCardHeader,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import AdminContext from "./context/AdminContext";

const Utilisateurs = () => {
  const {utilisateurs , getUtilisateur, setUtilisateurs} = useContext(AdminContext);

  const users = [
    {
      name: "omar",
      email: "omar@gmail.com",
      telephone: "06626364654",
      profile: "technicien",
      Motdepasse: "*****",
      checked: true,
    },
    {
      name: "eribi",
      email: "Mohamed@gmail.com",
      telephone: "0426334654",
      profile: "Support technique",
      Motdepasse: "******",
      checked: false,
    }
  ];

  const handleRadioToggle = async (e, objname) => {
    console.log(e.currentTarget.checked);
    utilisateurs.forEach((obj) => {
      if (obj.name === objname) {
        obj.checked = e.currentTarget.checked;
        setUtilisateurs([...utilisateurs]);
        // console.log(user);
      }
    });
  };

  useEffect(() => {
    getUtilisateur();
  }, []);
  // console.log(user);

  return (
    <div>
      <div className="modelProfilContainer">
        <AdminModel />
      </div>
      <div className="usercards">
        {utilisateurs.Utilisateurs.map((utilisateur) => (
          <MDBCard className="usercards" style={{ maxWidth: "570px" }}>
            <MDBRow className="g-0" style={{ maxheight:"7rem" }}>
              <MDBCardHeader className="headercard">
                <Switch
                  id="toggle-check"
                  type="checkbox"
                  variant="outline-primary"
                  checked={utilisateur.checked}
                  value=""
                  onChange={(e) => handleRadioToggle(e, utilisateu.id)}
                >
                  <BsCheckLg />
                </Switch>
                {/* <input
                  type="checkbox"
                  checked={obj.checked}
                  onChange={(e) => handleRadioToggle(e, obj.name)}
                /> */}
              </MDBCardHeader>

              <MDBCol md="4">
                <MDBCardImage
                  className="userimage"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt="..."
                  fluid
                />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody className="card-body">
                    <MDBCardText className="data-user">
                  <ul className="data">
                    <li>Nom complet : </li>
                    <li>Email : </li>
                    <li>Telephone : </li>
                    <li>Profil : </li>
                    <li>Mot de passe : </li>
                  </ul>
                  <ul>
                    <li>{utilisateur.name} </li>
                    <li>{utilisateur.email}</li>
                    <li>{utilisateur.telephone} </li>
                    <li>{utilisateur.profile}</li>
                    <li>{utilisateur.Motdepasse}</li>
                  </ul>
            </MDBCardText>                   
                                    
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
          
        ))}

      </div>
    </div>
  );
};

export default Utilisateurs;