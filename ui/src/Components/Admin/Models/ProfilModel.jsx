import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../style/profilModel.css";
import { useContext } from 'react';
import { NewProfilContext } from '../context/ProfilManagment';


   

export default function ProfilModel() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
      <Button className='nouveauProfilButton' onClick={handleShow}>
          Nouveau profil
      </Button>

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nouveau Profil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <Form noValidate>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Nom Profil : </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nom Profil"

          />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Permission : </Form.Label>
          <Form.Check 
            type="checkbox"
            label={`Créer tâches`}
          />
          <Form.Check 
            type="checkbox"
            label={`Suivi des tâches`}
          />
            <Form.Check 
                type="checkbox"
                label={`Voir calendrier`}
            />
            <Form.Check 
                type="checkbox"
                label={`Créer utilisateur`}
            />
        </Form.Group>

        

      </Row>
     

      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermée
          </Button>
          <Button className='Modelbutton' variant="primary" onClick={handleClose}>
            Envoyer
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}
