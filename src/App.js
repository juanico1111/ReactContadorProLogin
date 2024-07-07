// Importa las dependencias necesarias de React
import React, { useState } from 'react';
// Importa el archivo de estilos CSS
import './App.css';
// Importa el componente LoginForm desde su ruta específica
import LoginForm from './Component/LoginForm/LoginForm';
// Importa el componente Menu desde su ruta específica
import Menu from './Component/Menu/Menu';

// Define el componente funcional App
function App() {
  // Define el estado isAuthenticated y la función setIsAuthenticated para actualizarlo
  // Inicialmente, isAuthenticated está configurado como false
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Define la función handleLogin que actualiza el estado de autenticación
  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  // Renderiza el componente App
  return (
    <div>
      {/* Si el usuario está autenticado, muestra el componente Menu */}
      {/* Si el usuario no está autenticado, muestra el componente LoginForm y pasa la función handleLogin como prop */}
      {isAuthenticated ? <Menu /> : <LoginForm onLogin={handleLogin} />}
    </div>
  );
}

// Exporta el componente App como el valor predeterminado del módulo
export default App;
