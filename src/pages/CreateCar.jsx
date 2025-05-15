import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import { AuthContext } from '../context/AuthContext';

function CreateCar() {
  const navigate = useNavigate();
  const { accessToken } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    price: '',
    mileage: '',
    description: '',
    image: null, // Para archivos
    city: '',
    state: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let key in formData) {
      if (formData[key]) {
        data.append(key, formData[key]);
      }
    }

    try {
      await api.post('/api/cars/', data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/');
    } catch (err) {
      console.error('Error al crear el auto:', err);
      setError('No se pudo crear el auto. Revisa los campos e intenta nuevamente.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Crear Nuevo Auto</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="brand" placeholder="Marca" value={formData.brand} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="model" placeholder="Modelo" value={formData.model} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="year" placeholder="Año" value={formData.year} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="price" placeholder="Precio" value={formData.price} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="mileage" placeholder="Kilometraje" value={formData.mileage} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="city" placeholder="Ciudad" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="state" placeholder="Municipio" value={formData.state} onChange={handleChange} className="w-full p-2 border rounded" required />

        {/* Campo nuevo: descripción */}
        <textarea name="description" placeholder="Descripción del auto" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" rows="4" />

        {/* Campo nuevo: imagen */}
        <input type="file" name="image" accept="image/*" onChange={handleChange} className="w-full p-2 border rounded" />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Guardar Auto
        </button>
      </form>
    </div>
  );
}

export default CreateCar;
