import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function CarCard({ car }) {
  const navigate = useNavigate();
  const { accessToken } = useContext(AuthContext);

  const handleEdit = () => {
    navigate(`/edit/${car.id}`);
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(`¿Estás seguro de que deseas eliminar el auto "${car.brand} ${car.model}"?`);
    if (!confirmed) return;

    try {
      await api.delete(`/api/cars/${car.id}/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      window.location.reload(); // Recarga la página para reflejar el cambio
    } catch (error) {
      console.error('Error al eliminar el auto:', error);
      alert('No se pudo eliminar el auto. Intenta de nuevo.');
    }
  };

  return (
    <div className="border rounded-xl p-4 shadow-md bg-white">
      {car.image && (
        <img src={car.image} alt={`${car.brand} ${car.model}`} className="w-full h-48 object-cover rounded-lg mb-2" />
      )}
      <h3 className="text-xl font-semibold text-gray-800">{car.brand} {car.model}</h3>
      <p className="text-gray-600">Año: {car.year}</p>
      <p className="text-gray-600">Precio: ${car.price}</p>
      <p className="text-gray-600">Kilometraje: {car.mileage} km</p>
      {car.description && <p className="text-gray-700 text-sm mt-2">{car.description}</p>}

      {/* Botones */}
      <div className="mt-4 flex justify-between">
        <button onClick={handleEdit} className="px-4 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          Editar
        </button>
        <button onClick={handleDelete} className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700">
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default CarCard;