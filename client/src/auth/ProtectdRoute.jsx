/*import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProtectdRoute = ( {children} ) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/api/user` , { withCredentials:true})
        .then(() => setIsAuthenticated(true))
        .catch(() => {
            setIsAuthenticated(false);
            navigate('/');
        });
    } , []);

    if(isAuthenticated === null) {
        return <div>Loading...</div>
    }

    return children;
  
}

export default ProtectdRoute */




import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" />;
}

