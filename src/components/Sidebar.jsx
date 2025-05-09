import { useState } from "react";


export default function Sidebar({ onFilterChange }) {

  // Propiedades de los filtros
  const [filters, setFilters] = useState({
    brand: '',
    model: '',
    city: '',
    state: '',
    min_price: '',
    max_price: '',
    min_year: '',
    max_year: '',
    min_mileage: '',
    max_mileage: '',
  });

  // Handlers para los filtros
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
  };



  return (
    <div className="w-64 bg-gray-100 p-4 overflow-y-auto h-full">
      <h2 className="text-lg font-bold mb-4">Filtros</h2>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Búsqueda por texto</h3>
        {['brand', 'model', 'city', 'state'].map((field) => (
          <div key={field} className="mb-2">
            <label className="block text-sm font-medium capitalize">{field}</label>
            <input
              type="text"
              name={field}
              value={filters[field]}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Rango de precios</h3>
        <input
          type="number"
          name="min_price"
          value={filters.min_price}
          onChange={handleInputChange}
          placeholder="Precio mínimo"
          className="w-full p-2 mb-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="max_price"
          value={filters.max_price}
          onChange={handleInputChange}
          placeholder="Precio máximo"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Año del vehículo</h3>
        <input
          type="number"
          name="min_year"
          value={filters.min_year}
          onChange={handleInputChange}
          placeholder="Año mínimo"
          className="w-full p-2 mb-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="max_year"
          value={filters.max_year}
          onChange={handleInputChange}
          placeholder="Año máximo"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Kilometraje</h3>
        <input
          type="number"
          name="min_mileage"
          value={filters.min_mileage}
          onChange={handleInputChange}
          placeholder="Mínimo"
          className="w-full p-2 mb-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="max_mileage"
          value={filters.max_mileage}
          onChange={handleInputChange}
          placeholder="Máximo"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <button
        onClick={handleApplyFilters}
        className="w-full bg-blue-600 text-white p-2 mt-2 rounded hover:bg-blue-700"
      >
        Aplicar filtros
      </button>
    </div>
  );
}