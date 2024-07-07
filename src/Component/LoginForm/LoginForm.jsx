// Importa las dependencias necesarias de React
import React, { useState } from 'react';
// Importa el archivo de estilos CSS para el componente LoginForm
import './LoginForm.css';
// Importa los íconos de la biblioteca react-icons
import { FaUser, FaLock } from "react-icons/fa";

// Define el componente funcional LoginForm
// Acepta la prop onLogin, que es una función que se llama al iniciar sesión
const LoginForm = ({ onLogin }) => {
    // Define el estado username y la función setUsername para actualizarlo
    const [username, setUsername] = useState('');
    // Define el estado password y la función setPassword para actualizarlo
    const [password, setPassword] = useState('');

    // Maneja el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validar credenciales (ejemplo simple)
        if (username === 'admin' && password === 'password') {
            onLogin(true); // Llama a la función onLogin con true si las credenciales son correctas
        } else {
            alert('Credenciales inválidas'); // Muestra una alerta si las credenciales son incorrectas
        }
    };

    return (
        // Envoltorio principal del formulario de inicio de sesión con clase CSS 'wrapper'
        <div className='wrapper'>
            {/* Formulario de inicio de sesión */}
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                
                {/* Campo de entrada para el nombre de usuario */}
                <div className="input-box">
                    <input
                        type="text"
                        placeholder='Usuario'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <FaUser className='icon' />
                </div>
                
                {/* Campo de entrada para la contraseña */}
                <div className="input-box">
                    <input
                        type="password"
                        placeholder='Contraseña'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <FaLock className='icon' />
                </div>
                
                {/* Opción de recordar contraseña y enlace para recuperar contraseña */}
                <div className="remember-forgot">
                    <label><input type="checkbox" />Recuerdame</label>
                    <a href="#">Olvido su contraseña?</a>
                </div>
                
                {/* Botón de envío del formulario */}
                <button type="submit">Login</button>
                
                {/* Enlace para registrarse */}
                <div className="register-link">
                    <p>No te has registrado? <a href="#">Registro</a></p>
                </div>
            </form>
        </div>
    )
}

// Exporta el componente LoginForm como el valor predeterminado del módulo
export default LoginForm;
