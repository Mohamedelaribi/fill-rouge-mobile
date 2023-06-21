import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../style/profilModel.css";

export default function AdminModel() {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div>
  <Button variant="primary" onClick={handleShow}>
Nouveau utilisateur      </Button>

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nouveau utilisateur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <Form noValidate>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Nom complet : </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nom complet"
          />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Email : </Form.Label>
          <Form.Control
            type="email"
            placeholder="example@example.com"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Télephone</Form.Label>
          <Form.Control type="text" placeholder="0505050505" required />
          {/* <Form.Control.Feedback type="invalid">
            Please provide a valid number.
          </Form.Control.Feedback> */}
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Profil</Form.Label>
          <Form.Select aria-label="Default select example">
             <option disabled>Veuillez choisir un profil</option>
      <option value="1">Technicien</option>
      <option value="2">Support technique</option>
      <option value="3">Gérant</option>
    </Form.Select>       
        </Form.Group>
   
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Mot de passe : </Form.Label>
          <Form.Control
            type="text"
            placeholder="mot de passe "
          />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Image : </Form.Label>
          <Form.Control
            required
            type="file"
            placeholder=""
          />
        </Form.Group>
      
      </Row>

      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermée
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Envoyer
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}
