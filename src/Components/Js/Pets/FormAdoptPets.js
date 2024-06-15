import React, { useState } from "react";
import '../../css/AdoptPetStyle.css';
import '../../css/StyleTexts.css';
import { fetchFormAdoption } from "../../Services/ApiServices";

function FormAdoptPet() {
    const [imagePreview, setImagePreview] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        breed: '',
        gender: '',
        age: '',
        weight:'',
        img: null,
    });
    const [showModal, setShowModal] = useState(false);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
            setFormData((prevState) => ({
                ...prevState,
                img: file,
            }));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, type, breed, gender,age,weight, img } = formData;

        if (!name || !type || !breed || !gender || !age || !weight || !img) {
            setShowModal(true);
            return;
        }

        // Aquí puedes manejar el envío de los datos del formulario
        console.log(formData);
        const token = window.localStorage.getItem("token");
        const response = await fetchFormAdoption(formData,token);
        console.log(response);
        // Resetear los campos del formulario
        setFormData({
            name: '',
            type: '',
            breed: '',
            gender: '',
            age: '',
            weight:'',
            img: null,
        });
        setImagePreview(null);
    };

    const closeModal = () => {
        setShowModal(false);
        setFormData({
            name: '',
            type: '',
            breed: '',
            gender: '',
            age: '',
            weight:'',
            img: null,
        });
        setImagePreview(null);
    };

    return (
        <div>
            <div className='ContainerEnterPet roboto-slab'>
                <div className='FormPetInformation'>
                    <h1>formulario de ingreso</h1>
                    <hr className="divider" />
                    <p className="orText">Informacion de la mascota</p>
                    <div className='ContainerInformationImage'>
                        <form className='InformationCels' onSubmit={handleSubmit}>
                            <input
                                className="CelsForm"
                                type="text"
                                placeholder="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <select
                                className="CelsForm"
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                            >
                                <option value="">Seleccione type</option>
                                <option value="Canino">Canino</option>
                                <option value="Felino">Felino</option>
                            </select>
                            <input
                                className="CelsForm"
                                type="text"
                                placeholder="breed"
                                name="breed"
                                value={formData.breed}
                                onChange={handleChange}
                            />
                            <select
                                className="CelsForm"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option value="">Seleccione Género</option>
                                <option value="MACHO">Macho</option>
                                <option value="hembra">Hembra</option>
                            </select>
                            <input
                                className="CelsForm"
                                type="text"
                                placeholder="age"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                            />
                            <input
                            className="CelsForm"
                            type="text"
                            placeholder="weight"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                        />
                            <input
                                className="CelsForm"
                                type="file"
                                onChange={handleImageChange}
                            />
                            <button type="submit" className='StyleCount'>Ingresar Registro</button>
                        </form>
                        <div className='[grid-area:image] ImageContainerFormAdoptPet'>
                            {imagePreview && <img className="petImage" src={imagePreview} alt="img de la mascota" />}
                        </div>
                    </div>
                </div>
            </div>
            {showModal && (
                <div className='modalOverlay'>
                    <div className='modalContent'>
                        <h2>Formulario Incompleto</h2>
                        <p>Debe llenar todos los campos para ingresar el registro.</p>
                        <button onClick={closeModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FormAdoptPet;
