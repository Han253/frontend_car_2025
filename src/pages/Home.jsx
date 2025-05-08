import CarCard from '../components/CarCard';

const cars = [
  {
    id: 6,
    brand: "Renault",
    model: "Koleos 2.5 Expression",
    year: 2011,
    price: "38000000.00",
    mileage: 83135,
    description: "Vendido directamente por Sanautos S.A, Concesionario Renault y Usados certificados a nivel nacional.",
    image: "http://127.0.0.1:8000/media/car_images/Koleos.jpg",
    city: "Bucaramanga",
    state: "Santander"
  },
  {
    id: 5,
    brand: "Mercedes-Benz",
    model: "Clase GLC GLC 300 E 4matic 2.0",
    year: 2023,
    price: "235000000.00",
    mileage: 42800,
    description: "Marca: Mercedes Benz- blanco polar\nModelo: GLC300 E 4matic 2.0 2023\nKm: 42.800\nCombustible: Hibrida",
    image: "http://127.0.0.1:8000/media/car_images/Mercedes.jpg",
    city: "Medellín",
    state: "Antioquia"
  },
  {
    id: 4,
    brand: "Kia",
    model: "Sportage New Sportage 2.0",
    year: 2015,
    price: "49900000.00",
    mileage: 90000,
    description: "2 Dueños, bien cuidada, papeles al día, peritaje septiembre 2024",
    image: "http://127.0.0.1:8000/media/car_images/kia.jpg",
    city: "Suba",
    state: "Bogotá D.C."
  },
  {
    id: 3,
    brand: "Renault",
    model: "Duster 1.3 Intense Cvt",
    year: 2023,
    price: "85000000.00",
    mileage: 39524,
    description: "Lista para Transpaso",
    image: "http://127.0.0.1:8000/media/car_images/Duster.jpg",
    city: "Bucaramanga",
    state: "Santander"
  },
  {
    id: 2,
    brand: "Toyota",
    model: "Hilux 2.5 INV 4x4 DIESEL",
    year: 2015,
    price: "95000000.00",
    mileage: 128000,
    description: "Lista para Transpaso",
    image: "http://127.0.0.1:8000/media/car_images/Toyota.jpg",
    city: "Bucaramanga",
    state: "Santander"
  }
];


function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default Home;