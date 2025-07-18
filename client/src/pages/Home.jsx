import React from 'react'
import { Button, Card } from 'antd';
const Home = () => {

  const login = () => {
        window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
    };

  return (
    <div>
      <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <Card title='Welcome to Admin Portal' className='text-center'>
          <Button type='primary' onClick={login}> Login with Google </Button>
        </Card>
      </div>
    </div>
  )
}

export default Home
