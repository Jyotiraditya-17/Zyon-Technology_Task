import React from 'react'
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

function AuthSuccess() {

    const navigate = useNavigate();
    const { search } = useLocation();

    useEffect( () => {
        const params = new URLSearchParams(search);
        const token = params.get('token');

        if(token) {
            localStorage.setItem('token' , token);
            navigate('/dashboard');
        }
    } , [])
    
  return (
    <p>
        Loading..
    </p>
  )
}

export default AuthSuccess
