// RequestAdoption.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../../css/AdoptionRequest.css';
import { fetchAdoption } from '../../Services/ApiServices';

function AdoptionRequest({ show, handleClose, pet }) {
    const [message, setMessage] = useState('');
    const [agreement, setAgreement] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSubmit = async (e) => {
        const token = window.localStorage.getItem("token");
        console.log(pet);
        e.preventDefault();
        console.log("Formulario enviado:", message, agreement);
        const response = await fetchAdoption({ petId: pet.id }, token);
        console.log(response);
        handleClose();
        setShowConfirmation(true);
    };

    const handleConfirmationClose = () => setShowConfirmation(false);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Solicitud de Adopción</Modal.Title>
                </Modal.Header>
                
                <Modal.Footer>
                    <form onSubmit={handleSubmit}>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </form>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showConfirmation} onHide={handleConfirmationClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p> Solicitud enviada </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleConfirmationClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AdoptionRequest;
