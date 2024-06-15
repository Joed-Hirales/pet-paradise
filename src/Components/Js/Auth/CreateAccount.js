import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../css/CreateAccount.css';
import '../../css/PetInformation.css';
import { fetchUserRegister } from "../../Services/ApiServices";


function CreateAccount() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = formData;

        if (!name || !email || !password) {
            setShowModal(true);
            return;
        }

        // Aquí puedes manejar el envío de los datos del formulario
        console.log(formData);
        const response = await fetchUserRegister(formData);
        console.log(response);
        // Redirigir a otra página después de guardar los datos
        navigate('/LoginPage'); // Cambia esta ruta por la que desees
    };

    const closeModal = () => {
        setShowModal(false);
        setFormData({
            name: '',
            email: '',
            password: '',
        });
    };

    return (
        <div className='CompleteContainer roboto-slab'>
            <div className='LeftContainer'>
                <div className='ElementsContainer'>
                    <h1>¡Únete a Pet Paradise!</h1>
                    <hr className="divider" />
                    <p className="orText">Agrega tu informacion aquí</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            className="CelsForm"
                            type="text"
                            placeholder="name completo"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            className="CelsForm"
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            className="CelsForm"
                            type="password"
                            placeholder="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <button type="submit" className='StyleCount'>Crear cuenta</button>
                    </form>
                </div>
            </div>
            <div className='RightContainer'>
                {/* Imagen de fondo a la derecha */}
            </div>
            {showModal && (
                <div className='modalOverlay'>
                    <div className='modalContent'>
                        <h2>Formulario Incompleto</h2>
                        <p>Debe llenar todos los campos para crear cuenta.</p>
                        <button onClick={closeModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CreateAccount;
