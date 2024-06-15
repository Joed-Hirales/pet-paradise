// PetInformation.js
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import RequestAdoption from './AdoptionRequest';
import '../../css/PetInformation.css';
import '../../css/StyleButtons.css';
import AdoptionRequest from './AdoptionRequest';
import { fetchPetsId } from '../../Services/ApiServices';

function PetInformation() {
    const { id } = useParams();
    const [pet, setPet] = useState();
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
       const getInformation= async() => {try {
        const response = await fetchPetsId(id);
        console.log(response);
        setPet(response);

       } catch (error) {
        
       }}
       getInformation();
    }, [id]);

    const handleShowForm = () => setShowForm(true);
    const handleCloseForm = () => setShowForm(false);

    return (
        pet !== undefined &&
        <div className='PrincipalContainer roboto-slab'>
            <div className='ContainerPetInformation'>
                <div className='[grid-area:image] ContainerImage'>
                    <picture>
                        <img className='FormImage img-fluid' src={`https://petparadiseapi-production.up.railway.app${pet.img}`} alt={pet.name} />
                    </picture>
                </div>
                <div className='[grid-area:main] ContainerInformation'>
                    <div className='FirstContainer'>
                        <img className='FormLogo2' src='https://i.imgur.com/lqugLJW.png' alt='Logo'/>
                        <div className='roboto-slab'>
                            <h1>{pet.name}</h1>
                            <h5>La paz, B.C.S</h5>
                        </div>
                        <div className='LogoContainer'>
                           <a href='https://www.facebook.com/profile.php?id=61560605894677&mibextid=ZbWKwL'>  <img className='FormLogo1' src='https://i.imgur.com/7ZZOUl3.png' alt='Logo 1'/> </a>
                           <a href='https://www.instagram.com/llpetparadisell/'> <img className='FormLogo1' src='https://i.imgur.com/ZvpH0du.png' alt='Logo 2'/> </a>
                            <img className='FormLogo1' src='https://i.imgur.com/vm0gSMd.png' alt='Logo 3'/>
                        </div>
                    </div>
                    <div className='SecondContainer'>
                        <div className='roboto-slab'>
                            <h2 className='ColorInfo'>Mis datos</h2>
                        </div>
                    </div>
                    <div className='ThirdContainer'>
                        <div className='FirstColum'>
                            <h3 className='ColorType'>Nombre: </h3>
                            <h3>{pet.name}</h3>
                        </div>
                        <div className='FirstColum'>
                            <h3 className='ColorType'>Tipo: </h3>
                            <h3>{pet.type}</h3>
                        </div>
                        <div className='FirstColum'>
                            <h3 className='ColorType'>Raza: </h3>
                            <h3>{pet.breed}</h3>
                        </div>
                        <div className='FirstColum'>
                            <h3 className='ColorType'>Edad: </h3>
                            <h3>{pet.age} años</h3>
                        </div>
                        <div className='FirstColum'>
                            <h3 className='ColorType'>Género: </h3>
                            <h3>{pet.gender}</h3>
                        </div>
                    </div>
                    <div className='FourthContainer'>
                        <Button className='ButtonColor' variant="dark" onClick={handleShowForm}>Adoptar Mascota</Button>
                    </div>
                </div>
                <div className='PublicityContainer'>
                    <img src='https://i.imgur.com/zJzXjbz.jpeg' alt='Publicidad'/>
                </div>
            </div>

            {/* Formulario de Adopción */}
            <AdoptionRequest show={showForm} handleClose={handleCloseForm} pet={pet} />
        </div>
    );
}

export default PetInformation;
