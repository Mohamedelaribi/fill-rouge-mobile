import React from 'react'
import './style/admin.css'
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import ProfilModel from './Models/ProfilModel';


export default function Profil() {
  return (
    <div>
      <div className='modelProfilContainer'>
      <ProfilModel/>
      </div>

      <MDBContainer className="porfils pt-4" style={{maxWidth: '1242px'}}>
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle="Comptable">
            <ul className='permission'>
                <li>Ajouter appareil</li>
                <li>Supprimer appareil</li>
                <li>créer tâches</li>
            </ul>
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="Technicien" className='title'>
        <ul className='permission'>
                <li>Ajouter appareil</li>
                <li>Supprimer appareil</li>
                <li>créer tâches</li>
            </ul>
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="Support technique">
        <ul className='permission'>
                <li>Ajouter appareil</li>
                <li>Supprimer appareil</li>
                <li>créer tâches</li>
            </ul>
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>




    </div>
  )
}
