import React from 'react';

export default function CarCard({ car }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={car.image} alt={`${car.brand} ${car.model}`} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{car.brand} {car.model}</h2>
        <p className="text-gray-600 text-sm mb-1">Año: {car.year} | Kilometraje: {car.mileage.toLocaleString()} km</p>
        <p className="text-gray-600 text-sm mb-1">Ciudad: {car.city}, {car.state}</p>
        <p className="text-gray-800 font-bold mb-2">$ {parseInt(car.price).toLocaleString()}</p>
        <p className="text-sm text-gray-700">{car.description}</p>
      </div>
    </div>
  );
}
