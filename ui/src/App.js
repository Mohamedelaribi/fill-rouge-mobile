import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebare from "./Components/Sidebare/Sidebare";
import NavigationBar from "./Components/Sidebare/Topbar";
import "./App.css";
import Profil from "./Components/Admin/Profil";
import Utilisateurs from "./Components/Admin/Utilisateurs";
import Dashboard from "./Components/Dashboard/Dashboard";
import Appareil from "./Components/Appareil/Appareil";
import Taches from "./Components/Tâches/Taches";
import { ContextAdmin } from "./Components/Admin/context/AdminContext";

function App() {
  return (
    
    
    <div className="App">

        <Sidebare />
      <div className="containt">
        <div className="navBar">
          <NavigationBar/>
        </div>
        <div className="buttomContaint">
          <ContextAdmin>
          <Routes>
              <Route path='/profil' element={<Profil/>}/>
              <Route path='/utilisateurs' element={<Utilisateurs/>}/>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/appareil' element={<Appareil/>}/>
              <Route path='/taches' element={<Taches/>}/>
            </Routes>
          </ContextAdmin>
            
        </div>

      </div>
 

                     
            
          
            
    </div>
  );
}

export default App;
