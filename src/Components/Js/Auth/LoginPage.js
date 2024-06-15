import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../css/StyleTexts.css';
import { fetchUserLogin } from "../../Services/ApiServices";

function LoginPage() {
    const [formData, setFormData] = useState({
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
        const { email, password } = formData;

        if (!email || !password) {
            setShowModal(true);
            return;
        }

        // Aquí puedes manejar el envío de los datos del formulario
        console.log(formData);
        const response = await fetchUserLogin(formData);
        console.log(response);
        window.localStorage.setItem('token', response.access_token);

        // Simular un delay antes de la redirección (por ejemplo, 2 segundos)
        setTimeout(() => {
            // Redirigir al usuario a la página de inicio
            navigate('/'); // Cambia esta ruta a la que desees
        }, 2000); // 2000 milisegundos = 2 segundos
    };

    const closeModal = () => {
        setShowModal(false);
        setFormData({
            email: '',
            password: '',
        });
    };

    return (
        <div className='CompleteContainer roboto-slab'>
            <div className='LeftContainer'>
                <div className='ElementsContainer'>
                    <h1>Gracias por usar Pet Paradise</h1>
                    <hr className="divider" />
                    <p className="orText">Inicia sesión aquí</p>
                    <form onSubmit={handleSubmit}>
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
                        <button type="submit" className='StyleCount'>Confirmar</button>
                        <p className="privacyText"> ¿Aún no tienes cuenta? <a href="/CreateAccount">Únete a Pet Paradise aquí</a>.</p>
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
                        <p>Debe llenar todos los campos para iniciar sesión.</p>
                        <button onClick={closeModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LoginPage;
