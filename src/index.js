// Importa la biblioteca React
import React from 'react';
// Importa ReactDOM para interactuar con el DOM
import ReactDOM from 'react-dom/client';
// Importa los estilos globales desde el archivo index.css
import './index.css';
// Importa el componente principal App
import App from './App';
// Importa reportWebVitals para medir el rendimiento de la aplicación
import reportWebVitals from './reportWebVitals';

// Crea una raíz de React en el elemento DOM con el id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza el componente App dentro de React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals se usa para medir el rendimiento de la aplicación
// Para comenzar a medir el rendimiento, se pasa una función para registrar los resultados
// (por ejemplo: reportWebVitals(console.log)) o se envían a un endpoint de análisis.
// Aprende más: https://bit.ly/CRA-vitals
reportWebVitals();
