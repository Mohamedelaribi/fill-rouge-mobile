import React from 'react';
import './style/dashboard.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function AppCards() {
    
  return (
 <MDBRow className='cardRow'>
      <MDBCol>
        <MDBCard className='cardStats'>
          <MDBCardBody>
            <MDBCardTitle>Nbr GPS installé </MDBCardTitle>
            <MDBCardText>
            23
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='cardStats'>
          <MDBCardBody>
            <MDBCardTitle>Modéle plus installée</MDBCardTitle>
            <MDBCardText >
              Modéle A
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='cardStats'>
          <MDBCardBody>
            <MDBCardTitle>Nbr SIM installée</MDBCardTitle>
            <MDBCardText>
                23
               </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='cardStats'>
          <MDBCardBody>
            <MDBCardTitle>Acc plus installée</MDBCardTitle>
            <MDBCardText>
                23
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
   
    </MDBRow>
  );
}