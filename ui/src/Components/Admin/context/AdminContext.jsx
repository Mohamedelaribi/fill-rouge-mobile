import React, { createContext } from 'react'
import axios from 'axios';


export const ContextAdmin = createContext();
const AdminContext = ({children}) => {
    const [utilisateurs , setUtilisateurs]= useState({Utilisateurs: [], Profils:[]});

    const getUtilisateurs = async() =>{
      constresponse = await axios.get('http://127.0.0.1:8000/api/utilisateurs')
      setUtilisateurs(response.data); 
    }
  return (
    <ContextAdmin.Provider value={{
      utilisateurs,
      setUtilisateurs,
      getUtilisateurs
    }}>
      {children}
    </ContextAdmin.Provider>
  )
}

export default AdminContext