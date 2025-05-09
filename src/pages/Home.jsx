import { useState, useEffect, useContext } from 'react';
import CarCard from '../components/CarCard';
import api from '../api/api';
import { AuthContext } from '../context/AuthContext';



function Home({ filters }) {

  // Accedemos al Tocken de acceso desde el contexto de autenticación
  const { accessToken } = useContext(AuthContext);
  // Definimos el estado para los autos, la carga y el error
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Parametros de ordenamiento
  const [sortBy, setSortBy] = useState('price'); // puedes usar "price", "year", "mileage"
  const [sortOrder, setSortOrder] = useState('asc'); // "asc" o "desc"

  // Función para ordenar los autos
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const ordering = sortOrder === 'desc' ? `-${sortBy}` : sortBy;
        const response = await api.get('/api/cars/', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            ordering: ordering,
            ...filters, // Agregar filtros aquí si es necesario
          },
        });
        //console.log('Autos cargados:', response.data.results);
        setCars(response.data.results);
        setError(null);
      } catch (err) {
        console.error('Error al cargar autos:', err);
        setError('No se pudieron cargar los autos.');
      } finally {
        setLoading(false);
      }
    };

    if (accessToken) {
      fetchCars();
    }
  }, [accessToken, sortBy, sortOrder, filters]);

  if (loading) return <p className="text-center mt-10">Cargando autos...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="px-4">
      {/* Filtros de ordenamiento fuera del grid */}
      <div className="flex flex-wrap items-center justify-end mb-4 gap-2">
        <label className="text-sm font-medium text-gray-600">Ordenar por:</label>
        <select
          className="p-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-white text-gray-700"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="price">Precio</option>
          <option value="year">Año</option>
          <option value="mileage">Kilometraje</option>
        </select>

        <select
          className="p-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-white text-gray-700"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default Home;