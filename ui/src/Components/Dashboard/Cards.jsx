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

export default function Cards() {
    
  return (
 <MDBRow className='cardRow'>
      <MDBCol>
        <MDBCard className='cardStats'>
          <MDBCardBody>
            <MDBCardTitle>Tâches du jour </MDBCardTitle>
            <MDBCardText>
            15
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='cardStats'>
          <MDBCardBody>
            <MDBCardTitle>Tâches réalisée</MDBCardTitle>
            <MDBCardText>
                12
               </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='cardStats'>
          <MDBCardBody>
            <MDBCardTitle>Tâches reportée</MDBCardTitle>
            <MDBCardText>
                2
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='cardStats'>
          <MDBCardBody>
            <MDBCardTitle>Tâches annulée</MDBCardTitle>
            <MDBCardText>
              1
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}