// Importa las dependencias necesarias de React
import React from 'react';
// Importa el archivo de estilos CSS para el componente Menu
import './Menu.css';
// Importa los íconos de la biblioteca react-icons
import { FaCamera, FaSave, FaPaperclip } from "react-icons/fa";

// Define el componente funcional Menu
const Menu = () => {
    return (
        // Envoltorio principal del menú con clase CSS 'menu-wrapper'
        <div className='menu-wrapper'>
            {/* Título del menú */}
            <h1>Menu</h1>

            {/* Elemento del menú para escanear documento */}
            <div className="menu-item">
                {/* Ícono de cámara */}
                <FaCamera className='icon' />
                {/* Botón que muestra una alerta al hacer clic */}
                <button type="button" onClick={() => alert('Escanear Documento')}>Escanear Documento</button>
            </div>

            {/* Elemento del menú para guardar */}
            <div className="menu-item">
                {/* Ícono de guardar */}
                <FaSave className='icon' />
                {/* Botón que muestra una alerta al hacer clic */}
                <button type="button" onClick={() => alert('Guardar')}>Guardar</button>
            </div>

            {/* Elemento del menú para adjuntar desde dispositivo */}
            <div className="menu-item">
                {/* Ícono de adjuntar */}
                <FaPaperclip className='icon' />
                {/* Botón que muestra una alerta al hacer clic */}
                <button type="button" onClick={() => alert('Adjuntar desde Dispositivo')}>Adjuntar desde Dispositivo</button>
            </div>
        </div>
    )
}

// Exporta el componente Menu como el valor predeterminado del módulo
export default Menu;
