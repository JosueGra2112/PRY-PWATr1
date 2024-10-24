import React, { useState } from 'react';
import Header from './HeaderSe';
import Menu from './Repo/MenuAd';
import Breadcrumbs from './BreadcrumbsLog'

const Bitacoras = () => {
    const [nuevaActividad, setNuevaActividad] = useState({
        tipoDiario: '',
        titulo: '',
        fecha: '',
        descripcion: ''
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNuevaActividad(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const agregarActividad = () => {
        // Validar el formulario antes de agregar la actividad
        if (!validateForm()) {
            return;
        }

        // Enviar los datos al backend para registrar la nueva actividad
        //fetch('http://localhost/WebServices/registrarDiario.php', {
        fetch('https://sigaemail.host8b.me/registrarDiario.php', {    
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevaActividad),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta del servidor:', data);
            // Limpiar el formulario después de la inserción exitosa
            setNuevaActividad({
                tipoDiario: '',
                titulo: '',
                fecha: '',
                descripcion: ''
            });
            // Mostrar mensaje de éxito
            setSuccessMessage('Diario creado exitosamente');
        })
        .catch(error => console.error('Error al registrar la actividad:', error));
    };

    const validateForm = () => {
        const { tipoDiario, titulo, fecha, descripcion } = nuevaActividad;
        if (!tipoDiario || !titulo || !fecha || !descripcion) {
            alert('Favor de llenar todos los campos para agregar la actividad.');
            return false;
        }
        return true;
    };

    return (
        <div>
            <Header />
            <Menu />
            <Breadcrumbs />
            <div>
                <div style={styles.bitacorasContainer}>
                    <h2 style={styles.title}>Diario de Eventos</h2>
                    <div style={styles.form}>
                        <select
                            name="tipoDiario"
                            value={nuevaActividad.tipoDiario}
                            onChange={handleChange}
                            style={styles.input}
                        >
                            <option value="">Seleccione el tipo de diario</option>
                            <option value="Boletín">Boletín</option>
                            <option value="Bitácora">Bitácora</option>
                        </select>
                        <label style={styles.label}>Asunto</label>
                        <input
                            type="text"
                            name="titulo"
                            value={nuevaActividad.titulo}
                            onChange={handleChange}
                            style={styles.input}
                        />
                        <label style={styles.label}>Fecha</label>
                        <input
                            type="date"
                            name="fecha"
                            value={nuevaActividad.fecha}
                            onChange={handleChange}
                            style={styles.input}
                        />
                        <label style={styles.label}>Agregar descripción</label>
                        <textarea
                            name="descripcion"
                            placeholder="Agrega una descripción"
                            value={nuevaActividad.descripcion}
                            onChange={handleChange}
                            style={styles.textarea}
                            rows="3"
                        ></textarea>
                        <button style={styles.button} onClick={agregarActividad}>Agregar</button>
                    </div>
                    {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
                </div>
            </div>
        </div>
    );
};

export default Bitacoras;

const styles = {
    bitacorasContainer: {
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '25px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: '24px',
        color: '#333',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        marginBottom: '10px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    textarea: {
        marginBottom: '10px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    buttonHover: {
        backgroundColor: '#0056b3'
    },
    successMessage: {
        color: 'green',
        marginTop: '10px',
    }
};