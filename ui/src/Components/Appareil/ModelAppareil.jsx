import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AdminModel() {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div>
  <Button variant="primary" onClick={handleShow}>
Nouvelle appareil      </Button>

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nouvelle appareil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <Form noValidate>
     
      <Row className="mb-3">
      
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Type d'appareil</Form.Label>
          <Form.Select aria-label="Default select example">
             <option disabled>Veuillez choisir un type</option>
      <option value="1">GPS</option>
      <option value="2">SIM</option>
      <option value="3">Accessoires</option>
    </Form.Select>       
        </Form.Group>
   
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Modéle</Form.Label>
          <Form.Select aria-label="Default select example">
             <option disabled>Veuillez choisir un Modéle</option>
      <option value="1">Modéle A</option>
      <option value="2">Modéle B</option>
    </Form.Select>       
        </Form.Group>
   
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Type Modéle</Form.Label>
          <Form.Select aria-label="Default select example">
             <option disabled>Veuillez choisir un type</option>
      <option value="1">Type A</option>
      <option value="2">Type B</option>
    </Form.Select>       
        </Form.Group>
        
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>IMEI : </Form.Label>
          <Form.Control
            type="text"
            placeholder="Veuillez saisir IMEI"
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
