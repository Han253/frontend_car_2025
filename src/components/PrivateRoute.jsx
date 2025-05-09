import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    // Puedes mostrar un loader o simplemente no renderizar nada
    return <div>Cargando...</div>;
  }

  // Si no hay usuario autenticado, redirige al login
  if (!user) return <Navigate to="/login" />;

  return children;
}

export default PrivateRoute;
