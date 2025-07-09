import { useEffect, useState } from 'react';
import { Button, Dropdown, Space, Switch } from 'antd';
import axios from 'axios';

const Navbar = ({ setThemeMode }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/user`, { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const logout = async () => {
    await axios.get(`${import.meta.env.VITE_API_URL}/logout`, { withCredentials: true });
    window.location.href = '/';
  };

  const toggleTheme = (checked) => {
    setTheme(checked ? 'dark' : 'light');
    setThemeMode(checked ? 'dark' : 'light');
  };

  const items = [
    {
      key: 'profile',
      label: <a href="/profile">View Profile</a>
    },
    {
      key: 'logout',
      label: <span onClick={logout}>Logout</span>
    }
  ];

  return (
    <div className="flex justify-between items-center p-4 shadow-md">
      <div className="text-xl font-bold">Admin Portal</div>
      <Space>
        <span>Dark Mode</span>
        <Switch checked={theme === 'dark'} onChange={toggleTheme} />
        {user && (
          <>
            <Dropdown menu={{ items }} placement="bottomRight">
              <Button type="primary">{user.given_name ? user.given_name : user.name}</Button>
            </Dropdown>
            <Button danger onClick={logout}>Logout</Button>
          </>
        )}
      </Space>
    </div>
  );
};

export default Navbar;