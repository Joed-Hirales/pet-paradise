import React, { useEffect, useState } from "react";
import { Table, Container, Row, Col } from 'react-bootstrap';
import '../../css/AllAdoptionRequest.css';
import { fetchAdoptions } from "../../Services/ApiServices";

function AllAdoptionRequest() {
    const [adoptions,setadoptions] = useState([])
    useEffect(() => {
        const getAllAdoption = async () => {
            try {
                const token = window.localStorage.getItem("token");
                const response = await fetchAdoptions(token)
                setadoptions(response)
                console.log(response);
            } catch (error) {

            }
        }
        getAllAdoption()
    }, [])
    return (
        <Container className='CompleteContainerAllAdoptionRequest roboto-slab'>
            <Row className="justify-content-md-center">
                <Col md={10}>
                    <h2 className="text-center mb-4">Solicitudes de adopción</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nombre mascota</th>
                                <th>Tipo mascota</th>
                                <th>Raza mascota</th>
                                <th>Género mascota</th>
                                <th>Edad Mascota</th>
                                <th>Peso</th>
                                <th>Nombre Adoptante</th>
                                <th>Correo Adoptante</th>
                            </tr>
                        </thead>
                        <tbody>
                            {adoptions.map((request, index) => (
                                <tr key={index}>
                                    <td>{request.pet.name}</td>
                                    <td>{request.pet.type}</td>
                                    <td>{request.pet.breed}</td>
                                    <td>{request.pet.gender}</td>
                                    <td>{request.pet.age}</td>
                                    <td>{request.pet.weight}</td>
                                    <td>{request.user.name}</td>
                                    <td>{request.user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default AllAdoptionRequest;
