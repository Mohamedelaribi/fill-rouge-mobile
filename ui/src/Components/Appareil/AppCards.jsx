import React from 'react';

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
 <MDBRow className='AppCard'>
      <MDBCol>
        <MDBCard className='cardStats'>
          <MDBCardBody>
            <MDBCardTitle>Gps </MDBCardTitle>
            <MDBCardText>
            10
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='cardStats'>
          <MDBCardBody>
            <MDBCardTitle>SIM</MDBCardTitle>
            <MDBCardText>
                10
               </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='cardStats'>
          <MDBCardBody>
            <MDBCardTitle>Accessoires</MDBCardTitle>
            <MDBCardText>
                10
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    
    </MDBRow>
  );
}