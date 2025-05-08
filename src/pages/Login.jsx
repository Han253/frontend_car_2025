import React, { useState } from 'react';

function Login() {

  // Estado local para almacenar los valores del formulario
  const [formData, setFormData] = useState({ username: '', password: '' });

  // Maneja los cambios en los inputs del formulario
  const handleChange = e => {
    const { name, value } = e.target;
    // Actualiza el estado con el nuevo valor ingresado
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Maneja el envío del formulario
  const handleSubmit = e => {
    e.preventDefault();// Previene el comportamiento por defecto del formulario (recarga)
    console.log('Datos ingresados:', formData);
    // Aquí se conectará con el backend en la Fase 3
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-4">Iniciar Sesión</h2>

      {/* Formulario de login */}
      <form onSubmit={handleSubmit}>
        {/* Campo para el nombre de usuario */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Usuario</label>
          <input
            type="text"
            name="username"
            className="w-full border rounded px-3 py-2 mt-1"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campo para la contraseña */}
        <div className="mb-6">
          <label className="block text-sm font-medium">Contraseña</label>
          <input
            type="password"
            name="password"
            className="w-full border rounded px-3 py-2 mt-1"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default Login;
