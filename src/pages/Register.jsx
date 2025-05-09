import React, { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

function Register() {

    // Hook para la navegación
    const navigate = useNavigate();

    // Estado local para almacenar los valores del formulario
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

    // Hook para manejar el estado de error
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    // Maneja los cambios en los inputs del formulario
    const handleChange = e => {
      const { name, value } = e.target;

      // Actualiza el estado con el nuevo valor ingresado
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    // Maneja el envío del formulario
  const handleSubmit = async e => {
    e.preventDefault();

    // Validación simple
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await api.post('/api/register/', {
        username: formData.username,
        email: formData.email,
        password: formData.password
      });

      setSuccess("Usuario registrado exitosamente.");
      setError(null);
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      console.error(err);
      setError("Error al registrar usuario.");
    }
  };

    return (
      <div className="max-w-md mx-auto bg-white shadow-md rounded p-6 mt-8">
        <h2 className="text-2xl font-semibold mb-4">Registro</h2>

        {error && <div className="text-red-500 mb-4">{error}</div>}
        {success && <div className="text-green-500 mb-4">{success}</div>}

        {/* Formulario de registro */}
        <form onSubmit={handleSubmit}>
          {/* Campo de usuario */}
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

          {/* Campo de correo electrónico */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Correo electrónico</label>
            <input
              type="email"
              name="email"
              className="w-full border rounded px-3 py-2 mt-1"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Campo de contraseña */}
          <div className="mb-4">
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

          {/* Campo para confirmar contraseña */}
          <div className="mb-6">
            <label className="block text-sm font-medium">Confirmar Contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full border rounded px-3 py-2 mt-1"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/* Botón de registro */}
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Registrarse
          </button>
        </form>
      </div>
    );
}

export default Register;