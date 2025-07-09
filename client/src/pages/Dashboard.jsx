/*import React, { useState, useEffect } from 'react'
import { Button } from 'antd';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/user`, { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(() => window.location.href = '/');
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  }

  return (
    <div className='p-8'>
      <h1>Dashboard</h1>
      {user && (
        <p>
          Welcome {user.given_name ? user.given_name : user.name} ({user.email})
        </p>
      )}
      <Button onClick={logout} type='primary' danger className="mt-4">
        Logout
      </Button>
    </div>
  )
}

export default Dashboard */


import { Button } from "antd";

export default function Dashboard() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <Button danger onClick={logout}>Logout</Button>
    </div>
  );
}

